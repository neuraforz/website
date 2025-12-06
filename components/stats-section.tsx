"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: 50, suffix: "+" },
  { icon: Award, label: "Projects Delivered", value: 120, suffix: "+" },
  { icon: TrendingUp, label: "Client Satisfaction", value: 95, suffix: "%" },
  { icon: Zap, label: "Response Time", value: 24, suffix: "h" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-navy">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-blue" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
