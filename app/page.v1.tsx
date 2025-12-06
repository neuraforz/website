import { prisma } from "@/lib/prisma";
import { PremiumHero } from "@/components/premium-hero";
import { ClientLogos } from "@/components/client-logos";
import { StatsSection } from "@/components/stats-section";
import { PremiumServices } from "@/components/premium-services";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CTASection } from "@/components/cta-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default async function Home() {
  // Fetch services from database
  const services = await prisma.service.findMany({
    where: { status: "published" },
    orderBy: { orderIndex: "asc" },
    take: 6,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Premium Hero with Animated Gradient */}
      <PremiumHero />

      {/* Client Logos - Social Proof */}
      <ClientLogos />

      {/* Stats Section - Build Trust */}
      <StatsSection />

      {/* Premium Services Grid */}
      <PremiumServices services={services} />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Final CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
