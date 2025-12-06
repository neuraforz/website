/**
 * Message Match Engine
 * Dynamically matches headlines and CTAs to UTM parameters from outbound campaigns
 */

export interface MessageVariant {
  headline: string;
  subheadline: string;
  ctaText: string;
  badge?: string;
}

const MESSAGE_VARIANTS: Record<string, MessageVariant> = {
  // Default variant
  default: {
    headline: "Get Your Software Built in 6 Weeks",
    subheadline: "We build what you need. You launch faster. No delays. No excuses.",
    ctaText: "Book My Free 15-Min Call",
    badge: "AI-Powered Solutions",
  },

  // Campaign-specific variants
  "ai-automation": {
    headline: "Automate Your Business with AI",
    subheadline: "Cut manual work by 70%. Launch your AI solution in weeks, not months.",
    ctaText: "Get My AI Plan (Free)",
    badge: "As Promised in Our Email",
  },

  "staff-augmentation": {
    headline: "Scale Your Team 60% Faster",
    subheadline: "Developer-ready talent in 3 weeks. No hiring headaches. No delays.",
    ctaText: "Book My Team Strategy Call",
    badge: "Developer Talent Ready",
  },

  "qa-testing": {
    headline: "Cut Testing Time from Weeks to Days",
    subheadline: "Automate your QA. Ship faster. Sleep better at night.",
    ctaText: "Get My Free QA Audit",
    badge: "Testing Automation Experts",
  },

  "erp-crm": {
    headline: "Your ERP Done Right, On Time",
    subheadline: "Implementation in 8 weeks. No budget overruns. Guaranteed.",
    ctaText: "Book My ERP Strategy Call",
    badge: "ERP/CRM Implementation Pros",
  },

  "data-analytics": {
    headline: "Turn Your Data Into Decisions",
    subheadline: "Get insights in days, not months. No PhD required.",
    ctaText: "Get My Free Data Audit",
    badge: "Data Analytics Experts",
  },

  "managed-services": {
    headline: "IT Support That Actually Works",
    subheadline: "24/7 coverage. 99.9% uptime. Flat monthly rate.",
    ctaText: "Book My IT Strategy Call",
    badge: "Managed IT Services",
  },
};

/**
 * Get message variant based on URL parameters
 */
export function getMessageVariant(searchParams?: URLSearchParams): MessageVariant {
  if (!searchParams) {
    return MESSAGE_VARIANTS.default;
  }

  // Check for headline parameter
  const headlineParam = searchParams.get("headline") || searchParams.get("h");
  if (headlineParam && MESSAGE_VARIANTS[headlineParam]) {
    return MESSAGE_VARIANTS[headlineParam];
  }

  // Check for campaign parameter
  const campaignParam = searchParams.get("utm_campaign") || searchParams.get("campaign");
  if (campaignParam && MESSAGE_VARIANTS[campaignParam]) {
    return MESSAGE_VARIANTS[campaignParam];
  }

  // Check for source parameter for specific industries
  const sourceParam = searchParams.get("utm_source") || searchParams.get("source");
  if (sourceParam && MESSAGE_VARIANTS[sourceParam]) {
    return MESSAGE_VARIANTS[sourceParam];
  }

  return MESSAGE_VARIANTS.default;
}

/**
 * Get headline from URL or use default
 */
export function useMessageMatch(): MessageVariant {
  if (typeof window === "undefined") {
    return MESSAGE_VARIANTS.default;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return getMessageVariant(searchParams);
}
