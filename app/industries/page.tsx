import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Heart, Factory, ShoppingCart, Truck, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Neuraforz",
  description: "Neuraforz provides specialized IT solutions across Financial Services, Healthcare, Manufacturing, Retail, Logistics, and Insurance industries.",
};

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    description: "Reduce risk and operating costs with compliant AI workflows, secure data processing, and automated compliance reporting.",
    benefits: [
      "Fraud detection systems",
      "Automated KYC/AML processes",
      "Risk assessment automation",
      "Regulatory compliance tools"
    ],
    color: "from-blue to-cyan"
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Improve patient outcomes with AI-powered triage, secure EHR integration, and HIPAA-compliant automation solutions.",
    benefits: [
      "Patient triage automation",
      "EHR system integration",
      "Clinical workflow optimization",
      "Medical data analytics"
    ],
    color: "from-cyan to-accent"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimize production with IoT integration, predictive maintenance, and supply chain automation systems.",
    benefits: [
      "Production line automation",
      "Predictive maintenance",
      "Quality control systems",
      "Supply chain optimization"
    ],
    color: "from-blue-dark to-blue"
  },
  {
    icon: ShoppingCart,
    name: "Retail & eCommerce",
    description: "Boost sales with personalized recommendations, inventory optimization, and omnichannel integration solutions.",
    benefits: [
      "Customer analytics",
      "Inventory management",
      "Personalization engines",
      "Order fulfillment automation"
    ],
    color: "from-accent to-cyan"
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Streamline operations with route optimization, real-time tracking, and warehouse automation systems.",
    benefits: [
      "Route optimization",
      "Fleet management",
      "Warehouse automation",
      "Real-time tracking"
    ],
    color: "from-cyan to-blue"
  },
  {
    icon: Shield,
    name: "Insurance",
    description: "Accelerate claims processing with AI-powered underwriting, fraud detection, and policy management automation.",
    benefits: [
      "Claims processing automation",
      "Fraud detection",
      "Risk assessment",
      "Policy management systems"
    ],
    color: "from-blue to-blue-dark"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industry-Specific Solutions
          </h1>
          <p className="text-xl text-gray-200">
            We understand the unique challenges of your industry and deliver
            tailored solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-navy mb-4">
                    {industry.name}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-navy mb-3">Key Solutions:</h3>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Industry Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue mb-2">50+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan mb-2">6</div>
              <div className="text-gray-600">Industries</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-dark mb-2">120+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue to-cyan">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our industry-specific solutions can help your business thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
