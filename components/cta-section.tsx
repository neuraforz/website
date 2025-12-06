"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue via-cyan to-blue relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Build Something
            <br />
            <span className="bg-white/20 px-4 py-2 rounded-2xl inline-block mt-2">
              Extraordinary?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join 50+ companies that trust Neuraforz to deliver production-ready
            software in weeks, not months.
          </p>

          {/* Single Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => {
                const formElement = document.getElementById("booking-form");
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }}
              className="group inline-flex items-center gap-3 px-10 py-6 bg-white text-blue rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all"
            >
              <Calendar className="w-7 h-7" />
              Book My Free 15-Min Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>24-48h response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Free consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
