import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getAllServices, getServiceBySlug, getRelatedServices } from "@/lib/static-services";

export async function generateStaticParams() {
  const services = getAllServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Neuraforz`,
    description: service.excerpt,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Get related services
  const relatedServices = getRelatedServices(service.id, 3);

  // Enhanced markdown to HTML conversion for display
  const formatMarkdown = (text: string) => {
    return text
      .split('\n')
      .map(line => {
        // Headers
        if (line.startsWith('### ')) return `<h3 class="text-2xl font-bold text-navy mt-12 mb-6 flex items-center gap-2"><span class="w-1 h-8 bg-gradient-to-b from-blue to-purple-600 rounded-full"></span>${line.slice(4)}</h3>`;
        if (line.startsWith('## ')) return `<h2 class="text-3xl font-bold text-navy mt-16 mb-8 flex items-center gap-3"><span class="w-1.5 h-10 bg-gradient-to-b from-blue to-purple-600 rounded-full"></span>${line.slice(3)}</h2>`;
        if (line.startsWith('# ')) return `<h1 class="text-4xl font-bold text-navy mt-20 mb-10">${line.slice(2)}</h1>`;
        
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-blue">$1</strong>');
        
        // Lists
        if (line.startsWith('- ')) return `<li class="flex items-start gap-3 ml-6 mb-3"><span class="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-blue to-purple-600 rounded-full mt-2"></span><span class="text-gray-700 leading-relaxed">${line.slice(2)}</span></li>`;
        if (line.match(/^\d+\. /)) {
          const num = line.match(/^\d+/)?.[0] || '1';
          return `<li class="flex items-start gap-3 ml-6 mb-3"><span class="flex-shrink-0 font-semibold text-blue">${num}.</span><span class="text-gray-700 leading-relaxed">${line.replace(/^\d+\. /, '')}</span></li>`;
        }
        
        // Empty lines
        if (line.trim() === '') return '<div class="h-4"></div>';
        
        // Regular paragraphs
        return `<p class="text-gray-700 leading-relaxed mb-6 text-lg">${line}</p>`;
      })
      .join('\n');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy via-blue-dark to-navy text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-200 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {service.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-12">
            <div 
              className="prose prose-lg max-w-none [&>h2]:flex [&>h2]:items-center [&>h2]:gap-3 [&>h3]:flex [&>h3]:items-center [&>h3]:gap-2"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(service.bodyMd) }}
            />
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy">
                  Ready to Get Started?
                </h3>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Let's discuss how <span className="font-semibold text-blue">{service.name.toLowerCase()}</span> can help your business achieve its goals and drive measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue hover:shadow-lg transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Other Services You May Need
              </h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive range of IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all"></div>
                  
                  <div className="relative z-10">
                    {/* Icon placeholder */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-blue transition-colors">
                      {relatedService.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {relatedService.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center text-blue font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
