"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  Bot, 
  MessageSquare, 
  FileText, 
  Brain, 
  Zap, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const aiSolutions = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI that handles customer inquiries 24/7, reduces support costs, and improves response times.",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Seamless system integration",
      "Learning & improvement over time"
    ],
    color: "blue",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: FileText,
    title: "Document Processing & Automation",
    description: "Extract, classify, and process documents automatically using AI-powered optical character recognition and data extraction.",
    features: [
      "Invoice & receipt processing",
      "Contract analysis",
      "Data extraction & validation",
      "Automated workflows"
    ],
    color: "purple",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Bot,
    title: "Robotic Process Automation (RPA)",
    description: "Automate repetitive tasks across applications, eliminating manual errors and freeing your team for strategic work.",
    features: [
      "Rule-based task automation",
      "Cross-application workflows",
      "Data entry & migration",
      "Report generation"
    ],
    color: "green",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Brain,
    title: "Predictive Analytics & ML Models",
    description: "Leverage machine learning to forecast trends, identify patterns, and make data-driven decisions with confidence.",
    features: [
      "Demand forecasting",
      "Customer behavior prediction",
      "Risk assessment",
      "Anomaly detection"
    ],
    color: "orange",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Intelligent Process Automation",
    description: "Combine AI with automation to handle complex decisions, adapt to changing conditions, and optimize business processes.",
    features: [
      "Smart decision engines",
      "Adaptive workflows",
      "Process optimization",
      "Real-time monitoring"
    ],
    color: "red",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Business Intelligence",
    description: "Transform raw data into actionable insights with AI-enhanced analytics, natural language queries, and automated reporting.",
    features: [
      "Natural language queries",
      "Automated insights",
      "Predictive dashboards",
      "Smart recommendations"
    ],
    color: "cyan",
    gradient: "from-cyan-500 to-cyan-600"
  }
];

const benefits = [
  {
    title: "Reduce Operational Costs",
    description: "Automate repetitive tasks and reduce labor costs by up to 60%",
    stat: "60%"
  },
  {
    title: "Improve Accuracy",
    description: "Eliminate human errors in data processing and decision-making",
    stat: "99%"
  },
  {
    title: "Scale Efficiently",
    description: "Handle increased workload without proportional cost increases",
    stat: "3x"
  },
  {
    title: "Faster Time-to-Market",
    description: "Accelerate product development and deployment cycles",
    stat: "50%"
  }
];

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy via-blue-dark to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Solutions We Deliver
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI and automation solutions tailored to your unique challenges
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From chatbots to predictive analytics, we deliver AI solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-blue transition-colors">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600">
              Our AI solutions deliver quantifiable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
              >
                <div className="text-4xl font-bold text-blue mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand your business challenges and identify automation opportunities"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Design AI solutions tailored to your specific requirements"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Build, test, and deploy AI solutions with minimal disruption"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Monitor, measure, and continuously improve AI performance"
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full">
                  <div className="text-5xl font-bold text-blue/10 mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-navy mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-blue" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how AI and automation can solve your specific business challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
