"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  slug: string;
  name: string;
  excerpt: string;
}

interface PremiumServicesProps {
  services: Service[];
}

export function PremiumServices({ services }: PremiumServicesProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end technology solutions designed for rapid deployment and measurable ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue transition-all duration-300 hover:shadow-xl overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue to-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.excerpt}
                    </p>

                    <span className="inline-flex items-center text-blue font-medium group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-semibold hover:bg-navy/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
