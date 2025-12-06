"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Product Demo Section - Shows actual workflow/product in action
 * Replaces decorative animation with real value demonstration
 */
export function ProductDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: "1. Book Your Call",
      description: "Pick a time that works for you. Takes 30 seconds.",
      time: "30 sec",
    },
    {
      title: "2. We Assess Your Needs",
      description: "15-minute strategy call. We listen, ask questions, understand your goals.",
      time: "15 min",
    },
    {
      title: "3. Get Your Custom Plan",
      description: "Detailed roadmap with timeline, team, and exact costs. No surprises.",
      time: "24 hours",
    },
    {
      title: "4. Start Building",
      description: "Developer-ready team starts work. You see progress daily.",
      time: "Week 1",
    },
    {
      title: "5. Launch Your Product",
      description: "Your software goes live. We support you every step of the way.",
      time: "Week 6-8",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first call to launch in weeks. No complex process. No hidden steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Interactive Walkthrough */}
          <div className="space-y-4">
            {demoSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? "bg-blue text-white border-blue shadow-xl scale-105"
                    : "bg-white border-gray-200 hover:border-blue/50 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      activeStep === index ? "bg-white text-blue" : "bg-blue/10 text-blue"
                    }`}
                  >
                    {activeStep === index ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p
                      className={`text-sm ${
                        activeStep === index ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                    <div
                      className={`mt-2 text-xs font-semibold ${
                        activeStep === index ? "text-cyan" : "text-blue"
                      }`}
                    >
                      ⏱ {step.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Demo/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-navy via-blue-dark to-navy rounded-3xl shadow-2xl overflow-hidden border-4 border-blue/20">
              {/* Placeholder for actual demo video */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <Play className="w-10 h-10 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {demoSteps[activeStep].title}
                </h3>
                <p className="text-gray-200 text-lg mb-6">
                  {demoSteps[activeStep].description}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-semibold">Timeline: {demoSteps[activeStep].time}</span>
                </div>
              </div>
            </div>

            {/* Add your actual demo video here */}
            {/*
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
            */}

            {/* Progress Indicator */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {demoSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? "w-8 bg-blue" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Below Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const formElement = document.getElementById("booking-form");
              if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-dark transition-all"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
