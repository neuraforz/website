"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TestTube, 
  Settings, 
  Cloud,
  BarChart3,
  Bot,
  Sparkles,
  Stethoscope,
  FileText,
  DollarSign,
  ClipboardCheck,
  TrendingUp,
  Shield,
  Zap,
  Brain
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    excerpt: "Scale your team with pre-vetted IT professionals who integrate seamlessly with your existing workforce.",
    features: [
      "Vetted technical talent",
      "Flexible engagement models",
      "Quick onboarding",
      "Direct team integration"
    ],
    color: "blue",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: TestTube,
    title: "QA & Testing Services",
    slug: "qa-testing",
    excerpt: "Comprehensive quality assurance and testing solutions to ensure your software meets the highest standards.",
    features: [
      "Manual & automated testing",
      "Performance testing",
      "Security testing",
      "Continuous testing"
    ],
    color: "purple",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Settings,
    title: "ERP/CRM Implementations",
    slug: "erp-crm-implementations",
    excerpt: "Expert implementation and customization of enterprise resource planning and customer relationship management systems.",
    features: [
      "System selection & design",
      "Custom configuration",
      "Data migration",
      "Training & support"
    ],
    color: "green",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Cloud,
    title: "Managed IT Services",
    slug: "managed-services",
    excerpt: "Proactive IT management and support to keep your systems running smoothly 24/7.",
    features: [
      "24/7 monitoring",
      "Preventive maintenance",
      "Help desk support",
      "Cloud management"
    ],
    color: "orange",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    slug: "data-analytics",
    excerpt: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Custom dashboards",
      "Real-time reporting"
    ],
    color: "cyan",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    slug: "ai-automation",
    excerpt: "Leverage artificial intelligence and automation to optimize processes and drive innovation.",
    features: [
      "Process automation",
      "AI chatbots",
      "Machine learning",
      "Intelligent workflows"
    ],
    color: "red",
    gradient: "from-red-500 to-red-600"
  }
];

const rcmFeatures = [
  {
    icon: Stethoscope,
    title: "Medical Billing",
    description: "Accurate claim submission and follow-up to maximize reimbursements"
  },
  {
    icon: FileText,
    title: "Medical Coding",
    description: "Expert ICD-10, CPT, and HCPCS coding for all specialties"
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "End-to-end RCM from patient registration to final payment"
  },
  {
    icon: ClipboardCheck,
    title: "Claims Management",
    description: "Denial management, appeals, and AR follow-up services"
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description: "Comprehensive financial and operational reporting"
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "HIPAA-compliant processes and regular audits"
  }
];

const benefits = [
  {
    title: "Faster Delivery",
    description: "Accelerate project timelines with our experienced teams",
    stat: "50%"
  },
  {
    title: "Cost Savings",
    description: "Reduce operational costs with optimized solutions",
    stat: "40%"
  },
  {
    title: "Quality Assurance",
    description: "Maintain high standards with rigorous testing",
    stat: "99%"
  },
  {
    title: "Client Satisfaction",
    description: "Proven track record of successful implementations",
    stat: "95%"
  }
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy via-blue-dark to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Our Services
          </h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Comprehensive IT solutions tailored for mid-market companies. From staff augmentation to AI automation, 
            we deliver measurable results that drive your business forward.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Core IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.excerpt}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <span className="inline-flex items-center text-blue font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI-Powered Healthcare Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative overflow-hidden">
        {/* AI Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
              <Bot size={20} className="animate-pulse" />
              <span className="text-sm font-semibold">AI-Powered Healthcare Solutions</span>
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              AI-Driven RCM, Medical Billing & Coding
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              <span className="font-semibold text-blue">Intelligent automation</span> and <span className="font-semibold text-purple-600">AI agents</span> eliminate manual errors, accelerate workflows, and maximize revenue
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Bot size={16} className="text-blue" />
                <span className="font-medium">AI Agents</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Zap size={16} className="text-orange-500" />
                <span className="font-medium">Hyperautomation</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield size={16} className="text-green-500" />
                <span className="font-medium">99.9% Accuracy</span>
              </div>
            </div>
          </div>

          {/* AI-Driven RCM Overview */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-12 mb-12 border-2 border-blue-200 shadow-xl relative overflow-hidden">
            {/* AI Circuit Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                  <Bot size={16} className="animate-pulse" />
                  <span>AI-Powered Automation</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  Zero Manual Effort, Maximum Revenue
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-semibold text-blue">intelligent AI agents</span> handle the entire revenue cycle with 
                  <span className="font-semibold text-purple-600"> zero human intervention</span>. From claim submission to payment posting, 
                  every step is <span className="font-semibold text-green-600">automated, accurate, and error-free</span>.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <Bot size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">99.9% AI Accuracy</div>
                      <div className="text-sm text-gray-600">Eliminates manual coding errors</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">70% Faster Processing</div>
                      <div className="text-sm text-gray-600">Hyperautomated workflows</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">Zero Manual Errors</div>
                      <div className="text-sm text-gray-600">AI-driven quality assurance</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {rcmFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-purple-300 hover:shadow-xl transition-all group relative overflow-hidden"
                    >
                      {/* AI Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all"></div>
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-navy text-sm">{feature.title}</h4>
                          <Bot size={14} className="text-purple-600 opacity-60" />
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{feature.description}</p>
                        <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                          <Zap size={12} />
                          <span>AI-Automated</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* AI-Driven Process Flow */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-2">100% Automated AI Workflow</h3>
              <p className="text-gray-600">Every step powered by intelligent AI agents - zero manual intervention</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "AI Registration", desc: "Auto-verify insurance & extract data", icon: Bot },
                { step: "02", title: "Smart Capture", desc: "AI identifies all billable services", icon: Brain },
                { step: "03", title: "Auto Coding", desc: "AI assigns correct ICD-10/CPT codes", icon: Zap },
                { step: "04", title: "Auto Posting", desc: "AI processes payments instantly", icon: CheckCircle2 },
                { step: "05", title: "AI Follow-up", desc: "Auto-handles denials & appeals", icon: TrendingUp }
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border-2 border-blue-200 h-full hover:border-purple-400 hover:shadow-xl transition-all group">
                      {/* AI Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
                        AI
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{phase.step}</div>
                      </div>
                      
                      <h4 className="font-semibold text-navy text-sm mb-2 flex items-center gap-1">
                        {phase.title}
                        <Sparkles size={12} className="text-purple-600" />
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">{phase.desc}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-green-600 font-medium mt-2">
                        <Shield size={12} />
                        <span>Error-Free</span>
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                          <ArrowRight className="text-white" size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600">
              Our services deliver quantifiable results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue to-purple-600 bg-clip-text text-transparent mb-3">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our services can solve your specific business challenges and drive growth
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
              href="/ai-solutions"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
