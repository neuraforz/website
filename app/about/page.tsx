import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Neuraforz",
  description: "Learn about Neuraforz - your trusted partner for AI-powered technology solutions and IT services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Tomorrow's Technology, Today
          </h1>
          <p className="text-xl text-gray-200">
            We're a team of passionate technologists dedicated to delivering
            production-ready solutions that drive real business outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue/5 to-cyan/5 p-8 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-blue rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower mid-market companies with enterprise-grade technology
                solutions that are delivered quickly, work reliably, and drive
                measurable results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan/5 to-accent/5 p-8 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-cyan rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the most trusted technology partner for companies looking to
                leverage AI and modern software to transform their operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every line of code, every design
                decision is made with excellence in mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We measure our performance by the
                results we deliver for you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Continuous Innovation
              </h3>
              <p className="text-gray-600">
                Technology evolves rapidly, and so do we. We stay ahead of the
                curve to bring you cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Why Choose Neuraforz?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Rapid Delivery
                </h3>
                <p className="text-gray-600">
                  We deliver production-ready solutions in weeks, not months. Our
                  agile approach ensures quick time-to-value.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-cyan rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Our team brings deep expertise in AI, cloud, automation, and
                  modern software development practices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  50+ successful projects, 95% client satisfaction rate, and
                  measurable ROI for every engagement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-dark rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Flexible Engagement
                </h3>
                <p className="text-gray-600">
                  From staff augmentation to full project delivery, we adapt to
                  your needs and scale with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue to-cyan">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
