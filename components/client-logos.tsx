"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Microsoft", color: "from-blue-500 to-cyan-400", glow: "rgba(59, 130, 246, 0.5)" },
  { name: "Amazon", color: "from-orange-500 to-yellow-400", glow: "rgba(249, 115, 22, 0.5)" },
  { name: "Google", color: "from-blue-500 via-red-500 to-yellow-500", glow: "rgba(59, 130, 246, 0.5)" },
  { name: "Apple", color: "from-gray-700 to-gray-500", glow: "rgba(55, 65, 81, 0.5)" },
  { name: "Meta", color: "from-blue-600 to-purple-500", glow: "rgba(37, 99, 235, 0.5)" },
  { name: "Netflix", color: "from-red-600 to-red-500", glow: "rgba(220, 38, 38, 0.5)" },
  { name: "Tesla", color: "from-red-600 to-gray-700", glow: "rgba(220, 38, 38, 0.5)" },
  { name: "Walmart", color: "from-blue-600 to-yellow-400", glow: "rgba(37, 99, 235, 0.5)" },
  { name: "Target", color: "from-red-600 to-red-400", glow: "rgba(220, 38, 38, 0.5)" },
  { name: "CVS", color: "from-red-600 to-gray-700", glow: "rgba(220, 38, 38, 0.5)" }
];

export function ClientLogos() {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm font-semibold tracking-wider text-gray-500 mb-6"
        >
          TRUSTED BY LEADING COMPANIES
        </motion.p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 items-center justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ 
                      background: client.glow,
                      transform: 'scale(1.5)'
                    }}
                  />
                  
                  {/* Company name with gradient */}
                  <div className={`relative text-lg font-bold bg-gradient-to-r ${client.color} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                    {client.name}
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${client.color}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
