"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedTechBg() {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    // Generate random code snippets
    const snippets = [
      "const ai = new NeuralNetwork();",
      "model.train(data);",
      "async function predict() {",
      "import tensorflow as tf",
      "class Transformer:",
      "return predictions",
      "optimizer.step()",
      "loss.backward()",
      "def forward(self, x):",
      "npm install --save ai-sdk",
      "docker build -t ai-model .",
      "kubectl apply -f deploy.yaml",
      "SELECT * FROM predictions",
      "git commit -m 'Add AI model'",
      "pipeline.fit_transform(X)",
    ];

    setCodeLines(snippets);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-navy via-blue-dark to-navy overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan font-mono text-sm opacity-30"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Animated Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            borderColor: `rgba(6, 182, 212, ${0.1 - i * 0.01})`,
            left: "50%",
            top: "50%",
            marginLeft: -(50 + i * 25),
            marginTop: -(50 + i * 25),
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Binary Rain Effect */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-green-400 font-mono text-xs opacity-20"
          style={{
            left: `${(i * 100) / 15}%`,
          }}
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
          <br />
          {Math.random() > 0.5 ? "1" : "0"}
          <br />
          {Math.random() > 0.5 ? "1" : "0"}
          <br />
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-64 h-64 bg-cyan/20 rounded-full blur-3xl"
        animate={{
          x: ["10%", "80%", "10%"],
          y: ["20%", "70%", "20%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: ["70%", "20%", "70%"],
          y: ["60%", "30%", "60%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl mb-4"
        >
          🤖
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-2"
        >
          AI-Powered Solutions
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-center max-w-md px-4"
        >
          Transforming businesses with intelligent automation and machine learning
        </motion.p>

        {/* Animated Stats */}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {[
            { value: "50+", label: "Projects" },
            { value: "95%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-4 text-2xl"
        >
          {["⚛️", "🐍", "☁️", "🐳", "🔥", "⚡"].map((icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(transparent 50%, rgba(6, 182, 212, 0.05) 50%)",
          backgroundSize: "100% 4px",
        }}
        animate={{
          y: [0, 1000],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
