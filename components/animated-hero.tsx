"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AnimatedHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: shouldReduceMotion
      ? {}
      : {
          y: [-10, 10, -10],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  };

  return (
    <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-navy via-blue-dark to-navy text-white overflow-hidden">
      {/* Animated Background Elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute -top-10 left-10 w-48 h-48 rounded-full bg-blue/20 blur-3xl"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-cyan/20 blur-3xl"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1.5s" }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Build AI-Powered Software That Ships
          </motion.h1>

          <motion.p className="text-xl text-gray-200" variants={itemVariants}>
            From staff augmentation to AI automation, we deliver technology
            solutions that drive measurable business outcomes for mid-sized
            companies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
