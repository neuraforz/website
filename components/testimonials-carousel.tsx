"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, FinTech Innovations",
    company: "FinTech Innovations",
    content: "Neuraforz delivered our AI-powered fraud detection system in just 6 weeks. The results were immediate - we saw a 78% reduction in false positives and saved $2.3M annually.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Engineering, HealthTech Solutions",
    company: "HealthTech Solutions",
    content: "The QA automation framework they built reduced our testing time from 3 weeks to 2 days. Their team integrated seamlessly with ours and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of IT, Manufacturing Corp",
    company: "Manufacturing Corp",
    content: "Our ERP implementation was completed on time and under budget. The staff augmentation model worked perfectly - we scaled our team by 60% in just 3 weeks.",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 bg-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Real results from real companies
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-cyan/30" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-100">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-blue rounded-full flex items-center justify-center text-2xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonials[current].name}</div>
                    <div className="text-gray-300">{testimonials[current].role}</div>
                    <div className="text-cyan text-sm">{testimonials[current].company}</div>
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-cyan" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
