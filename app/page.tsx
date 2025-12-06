import { PremiumHeroV2 } from "@/components/premium-hero-v2";
import { ClientLogos } from "@/components/client-logos";
import { StatsSection } from "@/components/stats-section";
import { PremiumServices } from "@/components/premium-services";
import { ProductDemo } from "@/components/product-demo";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { InlineBookingForm } from "@/components/inline-booking-form";
import { AIWorkflowInfographic } from "@/components/ai-workflow-infographic";
import { ProcessInfographic } from "@/components/process-infographic";
import { TechStackVisual } from "@/components/tech-stack-visual";
import { CTASection } from "@/components/cta-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Static data for services (replacing Prisma database call)
const staticServices = [
  {
    id: "1",
    name: "AI Development",
    slug: "ai-development",
    excerpt: "Custom AI solutions powered by machine learning",
    bodyMd: "Full AI development services",
    iconUrl: "🤖",
    status: "published" as const,
    orderIndex: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Web Development",
    slug: "web-development",
    excerpt: "Modern, responsive web applications",
    bodyMd: "Full web development services",
    iconUrl: "🌐",
    status: "published" as const,
    orderIndex: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Mobile Apps",
    slug: "mobile-apps",
    excerpt: "Native and cross-platform mobile solutions",
    bodyMd: "Full mobile development services",
    iconUrl: "📱",
    status: "published" as const,
    orderIndex: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    excerpt: "Scalable cloud infrastructure and deployment",
    bodyMd: "Full cloud services",
    iconUrl: "☁️",
    status: "published" as const,
    orderIndex: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Data Analytics",
    slug: "data-analytics",
    excerpt: "Transform data into actionable insights",
    bodyMd: "Full data analytics services",
    iconUrl: "📊",
    status: "published" as const,
    orderIndex: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "DevOps",
    slug: "devops",
    excerpt: "Streamlined development and operations",
    bodyMd: "Full DevOps services",
    iconUrl: "⚙️",
    status: "published" as const,
    orderIndex: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Enhanced Hero - Single CTA, Message Match Enabled */}
      <PremiumHeroV2 />

      {/* Client Logos - Social Proof Early */}
      <ClientLogos />

      {/* Product Demo - Interactive "How It Works" */}
      <ProductDemo />

      {/* Stats Section - Build Trust */}
      <StatsSection />

      {/* Testimonials with ROI - Positioned Before Form */}
      <TestimonialsCarousel />

      {/* CONVERSION POINT - Inline Booking Form (3 Fields) */}
      <section id="booking-form" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <InlineBookingForm />
        </div>
      </section>

      {/* Premium Services Grid - For Additional Context */}
      <PremiumServices services={staticServices} />

      {/* How AI Transforms Your Business - For Deep-Dive Visitors */}
      <AIWorkflowInfographic />

      {/* Our Proven Process - Build Confidence */}
      <ProcessInfographic />

      {/* Technologies We Master - Show Expertise */}
      <TechStackVisual />

      {/* Final CTA Section - Reinforcement */}
      <CTASection />

      <Footer />
    </div>
  );
}
