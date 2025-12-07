# Neuraforz AI Chatbot Setup Guide

## Overview

This chatbot system uses **RAG (Retrieval Augmented Generation)** to provide accurate, context-aware responses about Neuraforz services. It supports multiple AI providers with Groq as the free default option.

### Features
- Multi-provider AI support (Groq, OpenAI, Claude, Gemini)
- RAG with vector similarity search
- 20 pre-loaded FAQ responses
- Beautiful animated chat widget
- Conversation history
- Free tier available (Groq + Supabase)

---

## Quick Start (FREE Setup - 10 minutes)

### Step 1: Get Groq API Key (FREE)
1. Visit https://console.groq.com/keys
2. Sign up (no credit card required)
3. Click "Create API Key"
4. Copy the key (starts with `gsk_...`)

### Step 2: Set Up Supabase (FREE)
1. Visit https://supabase.com
2. Create a new project
3. Wait ~2 minutes for database provisioning
4. Go to **Settings > API** and copy:
   - Project URL (`https://xxx.supabase.co`)
   - Service Role Key (secret key)

### Step 3: Run SQL Setup
1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `lib/supabase-setup.sql`
4. Paste and click **Run**
5. Verify success (should see "Success. No rows returned")

### Step 4: Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your keys:
   ```env
   AI_PROVIDER=groq
   GROQ_API_KEY=gsk_your-actual-groq-key
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbG...your-actual-key
   ```

### Step 5: Seed FAQ Data
1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Seed the FAQs (one-time only):
   ```bash
   curl -X POST http://localhost:3000/api/faq/seed
   ```

   Or visit in browser: `http://localhost:3000/api/faq/seed`

3. Verify success: Check Supabase **Table Editor > neuraforz_faqs** (should see 20 rows)

### Step 6: Test the Chatbot
1. Visit http://localhost:3000
2. Click the blue chat button (bottom-right)
3. Try asking: "What services do you offer?"
4. You should get an instant, accurate response!

---

## AI Provider Options

### Option 1: Groq (FREE - Recommended Default)
- **Cost**: FREE
- **Speed**: Very fast (~1-2 seconds)
- **Model**: Llama 3.1 70B
- **Limits**: 30 requests/min, 6000 tokens/min
- **Best for**: Free tier, development, testing

```env
AI_PROVIDER=groq
GROQ_API_KEY=gsk_your_key_here
```

### Option 2: OpenAI (Paid - Best Quality)
- **Cost**: ~$0.0005-$0.03 per 1K tokens
- **Speed**: Fast (~2-3 seconds)
- **Model**: GPT-3.5 Turbo / GPT-4
- **Best for**: Production, embeddings (RAG)

```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your_key_here
```

### Option 3: Claude (Paid - Fast & Smart)
- **Cost**: ~$0.00025-$0.015 per 1K tokens
- **Speed**: Very fast (~1-2 seconds)
- **Model**: Claude 3 Haiku / Sonnet
- **Best for**: Production, long conversations

```env
AI_PROVIDER=claude
ANTHROPIC_API_KEY=sk-ant-your_key_here
```

### Option 4: Gemini (Free Tier Available)
- **Cost**: FREE (with limits) or pay-as-you-go
- **Speed**: Fast (~2-3 seconds)
- **Model**: Gemini 1.5 Flash
- **Best for**: Free alternative to Groq

```env
AI_PROVIDER=gemini
GOOGLE_API_KEY=AIza-your_key_here
```

---

## RAG (Retrieval Augmented Generation) Setup

RAG improves accuracy by searching your FAQ knowledge base before responding.

### Without RAG (Basic Mode)
- Chatbot uses only AI model's knowledge
- Faster setup (no embedding generation needed)
- May provide less accurate company-specific info

### With RAG (Recommended)
- Searches FAQ database for relevant info
- Provides accurate, source-backed responses
- Requires OpenAI API key for embeddings

**To enable RAG:**
1. Add OpenAI API key to `.env.local`:
   ```env
   OPENAI_API_KEY=sk-your_key_here
   ```

2. The system will automatically:
   - Generate embeddings for user questions
   - Search FAQ database for similar content
   - Provide AI with relevant context

**Note**: Even with Groq as chat provider, you can use OpenAI just for embeddings (very cheap, ~$0.00002 per query).

---

## Customization

### Add More FAQs
Edit `app/api/faq/seed/route.ts`:
```typescript
const DEFAULT_FAQS = [
  {
    question: "Your new question?",
    answer: "Your detailed answer here...",
    category: "services",
    keywords: ["keyword1", "keyword2"],
  },
  // ... add more
];
```

Then re-seed by calling: `POST http://localhost:3000/api/faq/seed`

### Change Chat Widget Appearance
Edit `components/chat-widget.tsx`:
- Line 133-140: Button colors and position
- Line 174-185: Header colors and text
- Line 200-215: Message bubble styles

### Modify AI Behavior
Edit `app/api/chat/route.ts`:
- Line 192-206: System prompt and guidelines
- Line 232: Temperature (0.7 = balanced, 0.3 = focused, 1.0 = creative)
- Line 233: Max tokens (500 = concise, 1000 = detailed)

---

## Troubleshooting

### Issue: "AI provider not configured"
**Solution**: Make sure you have set the correct API key in `.env.local`

### Issue: "Supabase credentials not configured"
**Solution**: Verify Supabase keys are correct in `.env.local`

### Issue: No FAQs returned (RAG not working)
**Solution**:
1. Make sure OpenAI API key is set (for embeddings)
2. Re-seed FAQs to generate embeddings
3. Check Supabase table: `neuraforz_faqs` should have `embedding` column filled

### Issue: Chat widget not appearing
**Solution**:
1. Clear browser cache (Ctrl+Shift+R)
2. Delete .next directory and rebuild: `rm -rf .next && npm run dev`
3. Verify ChatWidget is imported in app/layout.tsx

---

## Production Deployment

### Environment Variables (Vercel/Netlify)
Add these in your deployment platform:
```
AI_PROVIDER=groq
GROQ_API_KEY=gsk_xxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
OPENAI_API_KEY=sk-xxx  # Optional, for RAG
```

### Security Best Practices
1. Never commit `.env.local` to git
2. Use environment variables for all keys
3. Enable Supabase RLS (already configured)
4. Rate limit API routes in production
5. Monitor API usage in provider dashboards

---

## Cost Estimates

### FREE Tier (Recommended for MVP)
- **Groq**: FREE (30 req/min)
- **Supabase**: FREE (500MB database)
- **Total**: $0/month
- **Handles**: ~10,000 chat messages/month

### Production (With RAG)
- **Groq**: FREE (chat)
- **OpenAI**: ~$2/month (embeddings only)
- **Supabase**: FREE tier sufficient
- **Total**: ~$2/month
- **Handles**: ~10,000 chat messages/month

### Heavy Usage
- **OpenAI**: ~$20-50/month (GPT-3.5)
- **Supabase**: $25/month (Pro tier)
- **Total**: ~$45-75/month
- **Handles**: ~100,000 chat messages/month

---

## Next Steps

After successful setup:
1. Customize FAQs with your company info
2. Adjust chat widget colors to match brand
3. Test with real user questions
4. Monitor usage in Supabase dashboard
5. Consider upgrading to OpenAI for RAG in production

Happy chatting! >
