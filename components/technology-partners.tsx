"use client";

import { motion } from "framer-motion";

/**
 * Technology Partners Component
 * Displays enterprise technology platforms and partners we work with
 */

interface TechPartner {
  name: string;
  category: string;
  color: string;
  gradient: string;
}

const techPartners: TechPartner[] = [
  // ERP/CRM Platforms
  { name: "SAP", category: "ERP", color: "text-blue-600", gradient: "from-blue-500 to-blue-700" },
  { name: "Salesforce", category: "CRM", color: "text-blue-500", gradient: "from-blue-400 to-cyan-500" },
  { name: "Oracle", category: "ERP/Database", color: "text-red-600", gradient: "from-red-500 to-red-700" },
  { name: "Microsoft Dynamics", category: "ERP/CRM", color: "text-blue-600", gradient: "from-blue-500 to-purple-600" },
  { name: "NetSuite", category: "Cloud ERP", color: "text-orange-600", gradient: "from-orange-500 to-red-600" },
  { name: "HubSpot", category: "Marketing/CRM", color: "text-orange-500", gradient: "from-orange-400 to-red-500" },
  { name: "Zoho", category: "CRM", color: "text-red-500", gradient: "from-red-400 to-orange-500" },
  { name: "Odoo", category: "Open Source ERP", color: "text-purple-600", gradient: "from-purple-500 to-pink-600" },

  // Cloud Platforms
  { name: "AWS", category: "Cloud", color: "text-orange-500", gradient: "from-yellow-500 to-orange-600" },
  { name: "Azure", category: "Cloud", color: "text-blue-600", gradient: "from-blue-500 to-cyan-600" },
  { name: "Google Cloud", category: "Cloud", color: "text-blue-500", gradient: "from-blue-400 to-green-500" },

  // Data & Analytics
  { name: "Tableau", category: "BI", color: "text-blue-600", gradient: "from-blue-500 to-blue-700" },
  { name: "Power BI", category: "BI", color: "text-yellow-600", gradient: "from-yellow-500 to-orange-500" },
  { name: "Snowflake", category: "Data Warehouse", color: "text-cyan-600", gradient: "from-cyan-400 to-blue-600" },
  { name: "Looker", category: "BI", color: "text-purple-600", gradient: "from-purple-500 to-pink-600" },

  // Development & DevOps
  { name: "GitHub", category: "DevOps", color: "text-gray-800", gradient: "from-gray-700 to-gray-900" },
  { name: "Docker", category: "DevOps", color: "text-blue-500", gradient: "from-blue-400 to-cyan-500" },
  { name: "Kubernetes", category: "DevOps", color: "text-blue-600", gradient: "from-blue-500 to-purple-600" },

  // AI/ML Platforms
  { name: "OpenAI", category: "AI", color: "text-green-600", gradient: "from-green-400 to-teal-600" },
  { name: "TensorFlow", category: "ML", color: "text-orange-600", gradient: "from-orange-500 to-red-600" },
  { name: "PyTorch", category: "ML", color: "text-red-600", gradient: "from-red-500 to-orange-600" },
];

export function TechnologyPartners() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Technology Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're certified experts in the world's leading enterprise platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue/30 cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                {/* Brand Name */}
                <div className={`text-xl md:text-2xl font-bold ${partner.color} mb-2 text-center group-hover:scale-110 transition-transform duration-300`}>
                  {partner.name}
                </div>

                {/* Category Badge */}
                <div className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors">
                  {partner.category}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Certifications Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 items-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue to-cyan rounded-full text-white font-semibold shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified Partners
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-navy font-semibold">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100+ Implementations
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-navy font-semibold">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Expert Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
