"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, Target, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    icon: Database,
    title: "Data Collection",
    description: "Gather and organize your data",
    color: "from-blue-500 to-cyan-500",
    details: ["Data ingestion", "Quality checks", "Preprocessing"],
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Training",
    description: "Train models on your data",
    color: "from-purple-500 to-pink-500",
    details: ["Model selection", "Training", "Validation"],
  },
  {
    id: 3,
    icon: Zap,
    title: "Automation",
    description: "Deploy intelligent automation",
    color: "from-orange-500 to-red-500",
    details: ["Workflow setup", "Integration", "Monitoring"],
  },
  {
    id: 4,
    icon: Target,
    title: "Results",
    description: "Achieve measurable outcomes",
    color: "from-green-500 to-emerald-500",
    details: ["Metrics", "Optimization", "Scaling"],
  },
];

export function AIWorkflowInfographic() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy via-blue-dark to-navy relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How AI Transforms Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From raw data to intelligent automation in four strategic steps
          </p>
        </motion.div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-8">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-cyan rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Horizontal Flow with SVG Connections */}
        <div className="hidden md:block">
          <div className="relative">
            {/* SVG Connection Lines */}
            <svg className="absolute top-24 left-0 w-full h-32 pointer-events-none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="33%" stopColor="#8B5CF6" />
                  <stop offset="66%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#06B6D4" />
                </marker>
              </defs>
              
              <motion.path
                d="M 12.5% 50 Q 25% 20, 37.5% 50 T 62.5% 50 T 87.5% 50"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                markerEnd="url(#arrowhead)"
              />
              
              {/* Animated particles along the path */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="4"
                  fill="#06B6D4"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: "100%",
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath: "path('M 12.5% 50 Q 25% 20, 37.5% 50 T 62.5% 50 T 87.5% 50')",
                  }}
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${i * 0.6}s`}
                  >
                    <mpath href="#flowPath" />
                  </animateMotion>
                </motion.circle>
              ))}
            </svg>

            {/* Workflow Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-cyan to-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                      {step.id}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan/50 transition-all duration-300 h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 text-center">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.1 }}
                            className="text-xs text-gray-400 flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Faster Implementation", value: "3x", icon: "⚡" },
            { label: "Cost Reduction", value: "60%", icon: "💰" },
            { label: "Accuracy Improvement", value: "99%", icon: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
