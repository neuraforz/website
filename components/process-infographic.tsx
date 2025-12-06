"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Code, Rocket, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery",
    description: "Understand your goals, challenges, and requirements",
    details: [
      "Stakeholder interviews",
      "Requirements analysis",
      "Technical feasibility study",
      "Project roadmap creation"
    ],
    color: "from-cyan to-blue",
    position: { x: 0, y: 0 }
  },
  {
    id: 2,
    icon: Pencil,
    title: "Design",
    description: "Craft user-centric designs and architecture",
    details: [
      "UI/UX design",
      "System architecture",
      "Database design",
      "API specifications"
    ],
    color: "from-blue to-blue-dark",
    position: { x: 1, y: 0 }
  },
  {
    id: 3,
    icon: Code,
    title: "Development",
    description: "Build with cutting-edge technologies",
    details: [
      "Agile development",
      "Code reviews",
      "Continuous integration",
      "Quality assurance"
    ],
    color: "from-blue-dark to-purple-600",
    position: { x: 0, y: 1 }
  },
  {
    id: 4,
    icon: Rocket,
    title: "Deploy",
    description: "Launch and monitor your solution",
    details: [
      "Cloud deployment",
      "Performance optimization",
      "Security hardening",
      "Monitoring setup"
    ],
    color: "from-purple-600 to-purple-700",
    position: { x: 1, y: 1 }
  }
];

export function ProcessInfographic() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Horizontal line between 1 and 2 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="25%"
              y1="25%"
              x2="75%"
              y2="25%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Vertical line between 2 and 4 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              x1="75%"
              y1="25%"
              x2="75%"
              y2="75%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Horizontal line between 3 and 4 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              x1="25%"
              y1="75%"
              x2="75%"
              y2="75%"
              stroke="url(#gradient3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Vertical line between 1 and 3 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              x1="25%"
              y1="25%"
              x2="25%"
              y2="75%"
              stroke="url(#gradient4)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-105" : ""
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan to-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {/* Details - Expand on Hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{
                              x: isActive ? 0 : -10,
                              opacity: isActive ? 1 : 0
                            }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Pulse Animation */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-cyan"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.05, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            <span className="font-semibold text-navy">Hover over each step</span> to see detailed activities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
