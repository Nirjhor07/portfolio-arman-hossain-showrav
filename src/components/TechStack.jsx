"use client";

import { techSlider } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Atom, Zap, Server, Database, Braces, Code2, Wind } from "lucide-react";

export default function TechStack() {
  // Triple the list to ensure seamless marquee loops
  const tripleList = [...techSlider, ...techSlider, ...techSlider];

  const getTechColor = (name) => {
    const colorMap = {
      React:
        "from-blue-500/20 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/40",
      "Next.js":
        "from-white/10 to-gray-500/10 hover:from-white/20 hover:to-gray-500/20",
      "Node.js":
        "from-green-500/20 to-emerald-500/20 hover:from-green-500/40 hover:to-emerald-500/40",
      MongoDB:
        "from-green-600/20 to-green-500/20 hover:from-green-600/40 hover:to-green-500/40",
      JavaScript:
        "from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/40 hover:to-amber-500/40",
      Python:
        "from-blue-600/20 to-blue-500/20 hover:from-blue-600/40 hover:to-blue-500/40",
      Tailwind:
        "from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40",
    };
    return (
      colorMap[name] ||
      "from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40"
    );
  };

  const getTechIcon = (name) => {
    const iconMap = {
      React: Atom,
      "Next.js": Zap,
      "Node.js": Server,
      MongoDB: Database,
      JavaScript: Braces,
      Python: Code2,
      Tailwind: Wind,
    };
    return iconMap[name] || Code2;
  };

  return (
    <section className="relative w-full py-20 bg-background overflow-hidden border-t border-b border-foreground/5">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Fade gradient masks */}
      <div className="absolute top-0 left-0 h-full w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10 w-full px-4 md:px-0">
        {/* Row 1: Moving Right */}
        <div className="flex overflow-hidden w-full select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 items-center py-2 whitespace-nowrap"
          >
            {tripleList.map((tech, idx) => (
              <motion.div
                key={`row1-${tech.name}-${idx}`}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${getTechColor(tech.name)} backdrop-blur-sm cursor-pointer group flex-shrink-0`}
              >
                <div className="relative w-7 h-7 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {(() => {
                    const Icon = getTechIcon(tech.name);
                    return (
                      <Icon className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors duration-300 stroke-[2.5]" />
                    );
                  })()}
                </div>
                <span className="text-sm font-semibold text-foreground tracking-wide whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left (reverse) */}
        <div className="flex overflow-hidden w-full select-none">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 items-center py-2 whitespace-nowrap"
          >
            {tripleList.map((tech, idx) => (
              <motion.div
                key={`row2-${tech.name}-${idx}`}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${getTechColor(tech.name)} backdrop-blur-sm cursor-pointer group flex-shrink-0`}
              >
                <div className="relative w-7 h-7 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {(() => {
                    const Icon = getTechIcon(tech.name);
                    return (
                      <Icon className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors duration-300 stroke-[2.5]" />
                    );
                  })()}
                </div>
                <span className="text-sm font-semibold text-foreground tracking-wide whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
