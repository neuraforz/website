"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

export function InlineBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual booking logic
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      // Here you would redirect to Calendly or your booking system
      // window.location.href = `https://calendly.com/your-link?name=${formData.name}&email=${formData.email}`;
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-accent/20"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-3xl font-bold text-navy mb-4">You're All Set!</h3>
          <p className="text-lg text-gray-600 mb-6">
            Check your email for calendar invite. We'll call you soon!
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-blue hover:text-blue-dark font-semibold"
          >
            Book Another Call
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue/10"
    >
      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="w-5 h-5 text-accent" />
          <span>No credit card needed</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-5 h-5 text-accent" />
          <span>Just 15 minutes</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-5 h-5 text-accent" />
          <span>Pick your time</span>
        </div>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
        Book Your Free Strategy Call
      </h3>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Get a custom plan for your project in 15 minutes
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            autoComplete="name"
            placeholder="John Smith"
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            autoComplete="email"
            placeholder="john@company.com"
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
            autoComplete="organization"
            placeholder="Acme Inc"
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-all"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue via-cyan to-blue bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Scheduling..."
          ) : (
            <>
              <Calendar className="w-6 h-6" />
              Book My Free Call Now
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>

        <p className="text-sm text-gray-500 text-center">
          We'll never spam you. Your info is 100% secure.
        </p>
      </form>
    </motion.div>
  );
}
