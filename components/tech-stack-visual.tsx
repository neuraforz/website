"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
      { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-600" },
      { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-blue-500" },
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
      { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-400" },
      { name: "Java", icon: "☕", color: "from-red-500 to-orange-500" },
      { name: ".NET", icon: "#", color: "from-purple-500 to-purple-600" },
    ]
  },
  {
    name: "AI & ML",
    technologies: [
      { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-orange-600" },
      { name: "PyTorch", icon: "🔥", color: "from-red-500 to-orange-500" },
      { name: "OpenAI", icon: "🤖", color: "from-green-400 to-cyan-500" },
      { name: "LangChain", icon: "🦜", color: "from-green-500 to-blue-500" },
    ]
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
      { name: "Azure", icon: "☁️", color: "from-blue-500 to-cyan-400" },
      { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
      { name: "Kubernetes", icon: "⎈", color: "from-blue-500 to-purple-500" },
    ]
  },
  {
    name: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-700" },
      { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
      { name: "Redis", icon: "⚡", color: "from-red-500 to-red-700" },
      { name: "MySQL", icon: "🐬", color: "from-blue-400 to-orange-400" },
    ]
  },
  {
    name: "ERP & CRM",
    technologies: [
      { name: "SAP", icon: "💼", color: "from-blue-600 to-blue-800" },
      { name: "Salesforce", icon: "☁️", color: "from-blue-400 to-cyan-400" },
      { name: "Oracle", icon: "🔴", color: "from-red-600 to-red-800" },
      { name: "Dynamics", icon: "💎", color: "from-purple-500 to-purple-700" },
    ]
  }
];

export function TechStackVisual() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools and frameworks powering your solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan to-purple-600 rounded-full"></div>
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.05
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      z: 50
                    }}
                    className="relative group cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    <div className={`
                      relative overflow-hidden
                      bg-gradient-to-br ${tech.color}
                      rounded-xl p-4
                      flex flex-col items-center justify-center
                      text-white font-semibold text-sm
                      transition-all duration-300
                      group-hover:shadow-lg
                      border border-white/20
                    `}>
                      {/* Icon */}
                      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      
                      {/* Name */}
                      <div className="text-center text-xs font-medium">
                        {tech.name}
                      </div>

                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-xl"></div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 rounded-xl border-2 border-white/50 animate-pulse"></div>
                      </div>
                    </div>

                    {/* 3D Shadow Effect */}
                    <div className={`
                      absolute inset-0 -z-10
                      bg-gradient-to-br ${tech.color}
                      rounded-xl blur-md
                      opacity-0 group-hover:opacity-50
                      transition-all duration-300
                      translate-y-1 group-hover:translate-y-2
                    `}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Don't see your technology stack? We adapt to your needs.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan to-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discuss Your Tech Stack
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
