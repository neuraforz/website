"use client";

import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* AI Brain Logo */}
      <motion.div
        className="relative w-10 h-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Neural network nodes */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2B6CB0" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          {/* Outer circle - brain outline */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-lg"
          />

          {/* Neural network nodes */}
          <motion.circle
            cx="20"
            cy="10"
            r="2.5"
            fill="#2B6CB0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          />
          <motion.circle
            cx="10"
            cy="20"
            r="2.5"
            fill="#0EA5E9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.circle
            cx="30"
            cy="20"
            r="2.5"
            fill="#0EA5E9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.circle
            cx="15"
            cy="30"
            r="2.5"
            fill="#22C55E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.circle
            cx="25"
            cy="30"
            r="2.5"
            fill="#22C55E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Connecting lines - neural pathways */}
          <motion.line
            x1="20"
            y1="10"
            x2="10"
            y2="20"
            stroke="#2B6CB0"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          />
          <motion.line
            x1="20"
            y1="10"
            x2="30"
            y2="20"
            stroke="#2B6CB0"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          />
          <motion.line
            x1="10"
            y1="20"
            x2="15"
            y2="30"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          />
          <motion.line
            x1="30"
            y1="20"
            x2="25"
            y2="30"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          />
          <motion.line
            x1="15"
            y1="30"
            x2="25"
            y2="30"
            stroke="#22C55E"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          />

          {/* Center node - AI core */}
          <motion.circle
            cx="20"
            cy="20"
            r="3"
            fill="url(#brainGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1 }}
          />
        </svg>
      </motion.div>

      {/* Brand name */}
      <div className="text-2xl font-bold leading-tight">
        <span className="text-navy">Neura</span>
        <span className="bg-gradient-to-r from-blue via-cyan to-accent bg-clip-text text-transparent">forz</span>
      </div>
    </div>
  );
}
