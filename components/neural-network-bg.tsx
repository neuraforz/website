"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 80;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }
    particlesRef.current = particles;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(10, 22, 40, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const maxDistance = 150;
      const mouseRadius = 200;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouseRadius) {
          const force = (mouseRadius - distToMouse) / mouseRadius;
          particle.vx += (dx / distToMouse) * force * 0.02;
          particle.vy += (dy / distToMouse) * force * 0.02;
        }

        // Limit velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2;
          particle.vy = (particle.vy / speed) * 2;
        }

        // Draw connections
        particle.connections = [];
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            particle.connections.push(j);

            // Calculate opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.5;

            // Create gradient for connection line
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y
            );
            gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity})`); // cyan
            gradient.addColorStop(0.5, `rgba(14, 165, 233, ${opacity})`); // blue
            gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`); // purple

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Add pulse effect for close connections
            if (distance < maxDistance * 0.6) {
              const pulseOpacity = opacity * 0.3 * Math.sin(Date.now() * 0.003 + i);
              ctx.strokeStyle = `rgba(6, 182, 212, ${pulseOpacity})`;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        }

        // Draw particle with mouse proximity enhancement
        const mouseProximity = distToMouse < mouseRadius ? 1 - (distToMouse / mouseRadius) : 0;
        const particleSize = 2 + mouseProximity * 2; // Particles grow when near mouse
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        
        // Particle glow based on connections and mouse proximity
        const connectionCount = particle.connections.length;
        const glowIntensity = Math.min(connectionCount / 5, 1);
        const mouseGlow = mouseProximity * 0.5; // Extra glow near mouse
        
        const glowRadius = 8 + mouseProximity * 8; // Larger glow near mouse
        const particleGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );
        
        // Enhanced colors when near mouse
        const baseOpacity = 0.8 + glowIntensity * 0.2 + mouseGlow;
        particleGradient.addColorStop(0, `rgba(6, 182, 212, ${baseOpacity})`);
        particleGradient.addColorStop(0.5, `rgba(14, 165, 233, ${0.4 + glowIntensity * 0.2 + mouseGlow * 0.3})`);
        particleGradient.addColorStop(1, "rgba(6, 182, 212, 0)");
        
        ctx.fillStyle = particleGradient;
        ctx.fill();

        // Extra glow for highly connected nodes or nodes near mouse
        if (connectionCount > 3 || mouseProximity > 0.3) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 6 + mouseProximity * 4, 0, Math.PI * 2);
          const extraGlowOpacity = (glowIntensity * 0.2) + (mouseProximity * 0.4);
          ctx.fillStyle = `rgba(139, 92, 246, ${extraGlowOpacity})`;
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
