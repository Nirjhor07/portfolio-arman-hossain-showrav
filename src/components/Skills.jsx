"use client";

import Section from "./Section";
import SpotlightCard from "./ui/SpotlightCard";
import { techStack } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Clinical Skills",
      skills: techStack.clinical,
      accent: "rgba(14, 165, 233, 0.08)",
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
      dotColor: "bg-sky-400",
    },
    {
      title: "Patient Care",
      skills: techStack.patientCare,
      accent: "rgba(13, 148, 136, 0.08)",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      dotColor: "bg-teal-400",
    },
    {
      title: "Mobility Assistance",
      skills: techStack.mobility,
      accent: "rgba(6, 182, 212, 0.08)",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      dotColor: "bg-cyan-400",
    },
    {
      title: "Professional Skills",
      skills: techStack.professional,
      accent: "rgba(59, 130, 246, 0.08)",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      dotColor: "bg-blue-400",
    },
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Intermediate";
  };

  // Flatten all skills with their category info
  const allSkills = [];
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      allSkills.push({
        ...skill,
        categoryTitle: category.title,
        categoryColor: category.color,
        bgColor: category.bgColor,
        borderColor: category.borderColor,
        dotColor: category.dotColor,
        accent: category.accent,
      });
    });
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95, rotate: -5 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const titleVariants = {
    initial: { x: 0 },
    hover: {
      x: 4,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dotVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0.7 },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Section
      id="skills"
      title="Skills &amp; Expertise"
      subtitle="Healthcare Professional Competencies"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allSkills.map((skill, index) => (
          <motion.div
            key={`${skill.categoryTitle}-${skill.name}`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{
                boxShadow: `0 20px 40px ${skill.accent.replace("0.08", "0.15")}`,
              }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard
                className={`border ${skill.borderColor} p-5 flex flex-col justify-between text-left h-full hover:${skill.borderColor.replace("20", "40")} transition-all duration-300 hover:shadow-lg group cursor-pointer relative overflow-hidden`}
                spotlightColor={skill.accent}
              >
                {/* Animated Background Glow on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${skill.accent}, transparent)`,
                  }}
                />

                {/* Top Section - Title & Category Badge */}
                <div className="mb-4 relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <motion.h4
                      className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex-1 leading-tight"
                      variants={titleVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill.name}
                    </motion.h4>
                    <motion.div
                      className={`w-2 h-2 rounded-full ${skill.dotColor} shrink-0 mt-1 animate-pulse`}
                      variants={dotVariants}
                      initial="initial"
                      whileHover="hover"
                    />
                  </div>
                  <motion.div
                    className={`inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded ${skill.bgColor} ${skill.borderColor} border text-on-surface-variant`}
                    variants={badgeVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {skill.categoryTitle}
                  </motion.div>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
