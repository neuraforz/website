import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const DEFAULT_FAQS = [
  {
    question: "What services does Neuraforz offer?",
    answer: "Neuraforz offers comprehensive IT solutions including Staff Augmentation, QA Testing, ERP/CRM Implementation, Managed Services, Data Analytics, and AI Automation. We specialize in helping mid-sized businesses transform their operations through intelligent technology solutions.",
    category: "services",
    keywords: ["services", "offerings", "what we do", "solutions", "IT services"],
  },
  {
    question: "How does staff augmentation work?",
    answer: "Our staff augmentation service provides you with skilled IT professionals who integrate seamlessly with your existing team. We handle recruitment, vetting, and onboarding, allowing you to scale your team quickly without the overhead of permanent hires. Our professionals are available for short-term projects or long-term engagements.",
    category: "services",
    keywords: ["staff augmentation", "hiring", "team extension", "developers", "IT professionals"],
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, logistics, and technology. Our solutions are tailored to meet the specific needs and compliance requirements of each industry.",
    category: "general",
    keywords: ["industries", "sectors", "verticals", "markets"],
  },
  {
    question: "How quickly can we get started?",
    answer: "We can typically start your project within 1-2 weeks. After an initial consultation to understand your needs, we'll create a custom plan and assemble the right team. For urgent projects, we can accelerate this timeline.",
    category: "process",
    keywords: ["timeline", "start", "onboarding", "quick start", "how fast"],
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based agreements. Pricing depends on the scope, complexity, and duration of your project. Contact us for a free consultation and custom quote.",
    category: "pricing",
    keywords: ["pricing", "cost", "rates", "budget", "payment"],
  },
  {
    question: "Do you offer AI automation services?",
    answer: "Yes, we specialize in AI automation solutions including process automation, intelligent chatbots, predictive analytics, and machine learning implementations. We help businesses automate repetitive tasks and gain insights from their data.",
    category: "services",
    keywords: ["AI", "automation", "machine learning", "chatbots", "artificial intelligence"],
  },
  {
    question: "What is your QA testing process?",
    answer: "Our QA testing includes manual testing, automated testing, performance testing, security testing, and user acceptance testing. We use industry-standard tools and frameworks to ensure your software is bug-free, secure, and performs optimally.",
    category: "services",
    keywords: ["QA", "testing", "quality assurance", "bugs", "test automation"],
  },
  {
    question: "Can you help with ERP/CRM implementation?",
    answer: "Absolutely! We have extensive experience implementing and customizing ERP and CRM systems including SAP, Salesforce, Oracle, Microsoft Dynamics, NetSuite, HubSpot, and Zoho. We handle everything from requirements analysis to deployment and training.",
    category: "services",
    keywords: ["ERP", "CRM", "implementation", "SAP", "Salesforce", "Oracle"],
  },
  {
    question: "What is your approach to data security?",
    answer: "Security is our top priority. We follow industry best practices including encryption, secure authentication, regular security audits, and compliance with standards like GDPR, HIPAA, and SOC 2. All our team members sign NDAs and undergo security training.",
    category: "security",
    keywords: ["security", "data protection", "privacy", "compliance", "GDPR", "HIPAA"],
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive managed services and ongoing support packages. This includes monitoring, maintenance, updates, bug fixes, and technical support. We ensure your systems continue to run smoothly after launch.",
    category: "support",
    keywords: ["support", "maintenance", "managed services", "ongoing", "post-launch"],
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, PyTorch, and many more. Our team stays updated with the latest technology trends.",
    category: "technology",
    keywords: ["technologies", "tech stack", "tools", "platforms", "frameworks"],
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow agile methodologies with regular sprints, code reviews, automated testing, continuous integration/deployment, and frequent client communication. Quality checkpoints are built into every phase of development.",
    category: "process",
    keywords: ["quality", "agile", "methodology", "process", "standards"],
  },
  {
    question: "Can you work with our existing team?",
    answer: "Yes, our staff augmentation model is designed to integrate seamlessly with your existing team. Our professionals adapt to your workflows, tools, and communication practices to ensure smooth collaboration.",
    category: "collaboration",
    keywords: ["collaboration", "team integration", "existing team", "work together"],
  },
  {
    question: "What is data analytics and how can it help my business?",
    answer: "Data analytics involves collecting, processing, and analyzing your business data to uncover insights and trends. We help you make data-driven decisions, improve operations, predict customer behavior, and identify new opportunities for growth.",
    category: "services",
    keywords: ["data analytics", "business intelligence", "insights", "reporting", "dashboards"],
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular status updates, sprint reviews, and dedicated project managers. We use tools like Slack, Microsoft Teams, Jira, and email. You'll always know the project status and next steps.",
    category: "process",
    keywords: ["communication", "updates", "project management", "transparency"],
  },
  {
    question: "Do you sign NDAs and confidentiality agreements?",
    answer: "Yes, we're happy to sign NDAs and confidentiality agreements before discussing your project. Protecting your intellectual property and sensitive information is extremely important to us.",
    category: "legal",
    keywords: ["NDA", "confidentiality", "intellectual property", "legal", "agreement"],
  },
  {
    question: "What is the typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex ERP implementation could take 6-12 months. We'll provide a detailed timeline during the planning phase.",
    category: "process",
    keywords: ["timeline", "duration", "how long", "project length"],
  },
  {
    question: "Can you scale resources up or down as needed?",
    answer: "Yes, that's one of the main benefits of our staff augmentation model. You can easily scale your team size based on project demands, seasonal needs, or budget changes. We offer flexible engagement models.",
    category: "flexibility",
    keywords: ["scaling", "flexible", "resources", "team size", "adjust"],
  },
  {
    question: "What makes Neuraforz different from other IT service providers?",
    answer: "We combine deep technical expertise with a focus on business outcomes. Our team has experience with Fortune 500 companies and startups alike. We prioritize transparent communication, quality delivery, and building long-term partnerships with our clients.",
    category: "company",
    keywords: ["competitive advantage", "why choose us", "difference", "unique"],
  },
  {
    question: "How can I get started with Neuraforz?",
    answer: "Getting started is easy! Book a free 15-minute consultation call through our website. We'll discuss your needs, challenges, and goals. Then we'll create a custom proposal with timeline and pricing. No obligation required.",
    category: "process",
    keywords: ["get started", "begin", "first step", "consultation", "contact"],
  },
];

export async function POST() {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: "Supabase credentials not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert FAQs
    const { data, error } = await supabase
      .from("neuraforz_faqs")
      .insert(DEFAULT_FAQS)
      .select();

    if (error) {
      console.error("Error seeding FAQs:", error);
      return NextResponse.json(
        { error: "Failed to seed FAQs", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${data.length} FAQs`,
      faqs: data,
    });
  } catch (error) {
    console.error("Error in FAQ seeding:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
