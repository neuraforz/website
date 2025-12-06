"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { NeuralNetworkBg } from "./neural-network-bg";
import CountUp from "react-countup";
import type { MessageVariant } from "@/lib/message-match";

export function PremiumHeroV2() {
  const containerRef = useRef(null);
  const [message, setMessage] = useState<MessageVariant>({
    headline: "Get Your Software Built in 6 Weeks",
    subheadline: "We build what you need. You launch faster. No delays. No excuses.",
    ctaText: "Book My Free 15-Min Call",
    badge: "AI-Powered Solutions",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Message matching based on URL parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const headlineParam = searchParams.get("headline") || searchParams.get("utm_campaign");

      // Import and use the message variants
      import("@/lib/message-match").then(({ getMessageVariant }) => {
        const variant = getMessageVariant(searchParams);
        setMessage(variant);
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-blue-dark to-navy pt-16"
    >
      {/* Neural Network Background */}
      <NeuralNetworkBg />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue/10 via-cyan/10 to-purple-600/10 animate-pulse-subtle" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan animate-pulse" />
          <span className="text-sm font-medium">{message.badge}</span>
        </motion.div>

        {/* Main Headline - Dynamic Message Match */}
        <motion.h1
          key={message.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-cyan to-accent bg-clip-text text-transparent">
            {message.headline}
          </span>
        </motion.h1>

        {/* Subheadline - Simple, Clear Copy */}
        <motion.p
          key={message.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {message.subheadline}
        </motion.p>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan mb-1">
              <CountUp end={50} duration={2.5} suffix="+" />
            </div>
            <div className="text-sm text-gray-300">Projects Delivered</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan mb-1">
              <CountUp end={95} duration={2.5} suffix="%" />
            </div>
            <div className="text-sm text-gray-300">Client Satisfaction</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan mb-1">
              <CountUp end={24} duration={2.5} suffix="h" />
            </div>
            <div className="text-sm text-gray-300">Response Time</div>
          </div>
        </motion.div>

        {/* Single Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => {
              const formElement = document.getElementById("booking-form");
              if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="group relative px-10 py-5 bg-white text-navy rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              {message.ctaText}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan via-accent/80 to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>

          {/* Trust Micro-Copy */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              ✓ Free strategy session
            </span>
            <span className="flex items-center gap-1">
              ✓ No credit card needed
            </span>
            <span className="flex items-center gap-1">
              ✓ Just 15 minutes
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
