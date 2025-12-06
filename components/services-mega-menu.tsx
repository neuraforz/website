"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  slug: string;
  name: string;
  excerpt: string;
}

interface ServicesMegaMenuProps {
  services: Service[];
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({ services, isOpen, onClose }: ServicesMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 top-full mt-2 bg-white shadow-2xl border-t border-gray-200 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Link
                href={`/services/${service.slug}`}
                onClick={onClose}
                className="group block p-4 rounded-lg hover:bg-blue/5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-navy group-hover:text-blue transition-colors mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {service.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm text-blue font-medium mt-2 group-hover:gap-1 transition-all">
                      Learn more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link
            href="/services"
            onClick={onClose}
            className="inline-flex items-center text-blue font-semibold hover:gap-2 transition-all"
          >
            View all services
            <ArrowRight className="ml-1" size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
