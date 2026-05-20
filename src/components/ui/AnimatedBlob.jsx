'use client';

import { motion } from 'framer-motion';

export default function AnimatedBlob({ color = 'bg-primary', className = '', delay = 0, size = 'w-72 h-72' }) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{
        x: [0, 30, -50, 40, 0],
        y: [0, -40, 30, -20, 0],
        scale: [1, 1.15, 0.85, 1.08, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute rounded-full filter blur-[100px] opacity-15 pointer-events-none mix-blend-screen z-0 ${color} ${size} ${className}`}
    />
  );
}
