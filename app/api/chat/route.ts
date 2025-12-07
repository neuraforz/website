import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Multi-provider configuration
const AI_PROVIDER = (process.env.AI_PROVIDER || "groq").toLowerCase();
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Initialize AI client based on provider
function getAIClient() {
  switch (AI_PROVIDER) {
    case "openai":
      if (!OPENAI_API_KEY) throw new Error("OpenAI API key not configured");
      return new OpenAI({ apiKey: OPENAI_API_KEY });

    case "groq":
      if (!GROQ_API_KEY) throw new Error("Groq API key not configured");
      return new OpenAI({
        apiKey: GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
      });

    case "claude":
    case "anthropic":
      if (!ANTHROPIC_API_KEY) throw new Error("Anthropic API key not configured");
      // Anthropic has a different SDK, we'll handle it separately
      return null;

    case "gemini":
    case "google":
      if (!GOOGLE_API_KEY) throw new Error("Google API key not configured");
      // Google has a different SDK, we'll handle it separately
      return null;

    default:
      throw new Error(`Unsupported AI provider: ${AI_PROVIDER}`);
  }
}

// Get model name based on provider
function getModelName(): string {
  switch (AI_PROVIDER) {
    case "openai":
      return "gpt-3.5-turbo";
    case "groq":
      return "llama-3.3-70b-versatile"; // Groq's current free model (updated from 3.1)
    case "claude":
    case "anthropic":
      return "claude-3-haiku-20240307"; // Claude's fast model
    case "gemini":
    case "google":
      return "gemini-1.5-flash"; // Google's free model
    default:
      return "gpt-3.5-turbo";
  }
}

// Generate embedding (uses OpenAI for all providers for now)
async function generateEmbedding(text: string): Promise<number[]> {
  // For embeddings, we'll use OpenAI if available, otherwise skip RAG
  if (OPENAI_API_KEY) {
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });
    return response.data[0].embedding;
  }

  // If no embedding model available, return empty array (skip RAG)
  return [];
}

// Get chat completion from Claude
async function getChatCompletionClaude(
  messages: Message[],
  systemPrompt: string
): Promise<string> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: getModelName(),
      max_tokens: 500,
      system: systemPrompt,
      messages: messages.filter((m) => m.role !== "system"),
    }),
  });

  const data = await response.json();
  return data.content[0].text;
}

// Get chat completion from Gemini
async function getChatCompletionGemini(
  messages: Message[],
  systemPrompt: string
): Promise<string> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${getModelName()}:generateContent?key=${GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: systemPrompt },
              ...messages.map((m) => ({ text: m.content })),
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    }
  );

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

export async function POST(req: NextRequest) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: "Supabase credentials not configured" },
        { status: 500 }
      );
    }

    const { message, conversationHistory = [] } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Step 1: Generate embedding and search FAQs (if embedding model available)
    let context = "";
    let faqs: any[] = [];

    try {
      const queryEmbedding = await generateEmbedding(message);

      if (queryEmbedding.length > 0) {
        const { data: searchResults, error: searchError } = await supabase.rpc(
          "match_faqs",
          {
            query_embedding: queryEmbedding,
            match_threshold: 0.7,
            match_count: 3,
          }
        );

        if (!searchError && searchResults && searchResults.length > 0) {
          faqs = searchResults;
          context = searchResults
            .map(
              (faq: any) =>
                `Q: ${faq.question}\nA: ${faq.answer}\n(Relevance: ${(faq.similarity * 100).toFixed(1)}%)`
            )
            .join("\n\n");
        }
      }
    } catch (embeddingError) {
      console.warn("Embedding search failed, continuing without RAG:", embeddingError);
    }

    // Step 2: Build system prompt with context
    const systemPrompt = `You are a helpful AI assistant for Neuraforz, an IT solutions and technology services company.

IMPORTANT GUIDELINES:
- Be professional, friendly, and concise
- Focus on Neuraforz's services: Staff Augmentation, QA Testing, ERP/CRM Implementation, Managed Services, Data Analytics, and AI Automation
- If you don't know something specific about Neuraforz, admit it and suggest contacting the team directly
- Encourage users to book a free consultation for detailed discussions
- Keep responses under 150 words unless more detail is specifically requested

${context ? `RELEVANT INFORMATION FROM KNOWLEDGE BASE:\n${context}\n\nUse this information to answer the user's question accurately.` : "No specific information was found in the knowledge base. Provide a helpful general response based on what you know about IT services companies."}

Contact Information:
- Email: support@neuraforz.com
- Phone: +1 (773) 888-9957
- Website: Book a free 15-min consultation through the booking form`;

    // Step 3: Prepare messages
    const messages: Message[] = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-6), // Keep last 3 exchanges for context
      { role: "user", content: message },
    ];

    // Step 4: Get response based on provider
    let assistantMessage: string;

    if (AI_PROVIDER === "claude" || AI_PROVIDER === "anthropic") {
      assistantMessage = await getChatCompletionClaude(messages, systemPrompt);
    } else if (AI_PROVIDER === "gemini" || AI_PROVIDER === "google") {
      assistantMessage = await getChatCompletionGemini(messages, systemPrompt);
    } else {
      // OpenAI-compatible APIs (OpenAI, Groq)
      const client = getAIClient();
      if (!client) {
        throw new Error("AI client initialization failed");
      }

      const completion = await client.chat.completions.create({
        model: getModelName(),
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      });

      assistantMessage = completion.choices[0].message.content || "";
    }

    return NextResponse.json({
      message: assistantMessage,
      provider: AI_PROVIDER,
      model: getModelName(),
      sources: faqs.map((faq: any) => ({
        question: faq.question,
        similarity: faq.similarity,
      })),
    });
  } catch (error: any) {
    console.error("Error in chat API:", error);

    // Provide helpful error messages
    if (error.code === "insufficient_quota") {
      return NextResponse.json(
        { error: "API quota exceeded. Please contact support." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process chat request", details: error.message },
      { status: 500 }
    );
  }
}
