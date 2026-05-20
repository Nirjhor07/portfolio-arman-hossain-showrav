'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { personalInfo, stats } from '@/data/portfolioData';
import { GraduationCap, Languages } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="My Origin & Mission">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Bio & Qualifications Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <h3 className="text-xl md:text-2xl font-display font-bold text-display leading-snug">
            Providing compassionate, high-quality care backed by structure and dedication.
          </h3>
          
          {Array.isArray(personalInfo.about) ? (
            personalInfo.about.map((para, i) => (
              <p key={i} className="text-on-surface-variant font-light leading-relaxed">
                {para}
              </p>
            ))
          ) : (
            <p className="text-on-surface-variant font-light leading-relaxed">
              {personalInfo.about}
            </p>
          )}

          {/* Education & Language Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Education Card */}
            <div className="p-5 rounded-2xl border border-foreground/5 bg-surface-dim/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Education</span>
              </div>
              <div className="flex flex-col gap-3 mt-1">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col border-l border-foreground/10 pl-3">
                    <span className="text-xs font-semibold text-display">{edu.degree}</span>
                    <span className="text-[11px] text-on-surface-variant">{edu.institution} ({edu.year})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Card */}
            <div className="p-5 rounded-2xl border border-foreground/5 bg-surface-dim/30 flex flex-col gap-3 h-full">
              <div className="flex items-center gap-2 text-tertiary">
                <Languages className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Languages</span>
              </div>
              <div className="flex flex-col gap-3 mt-1 h-full justify-between">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="flex flex-col border-l border-foreground/10 pl-3">
                    <span className="text-xs font-semibold text-display">{lang.language}</span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, idx) => (
            <SpotlightCard
              key={stat.label}
              className="text-left flex flex-col justify-between min-h-[140px] p-5 border border-white/5 bg-[#0a0a0c]/40 hover:border-primary/25"
              spotlightColor="rgba(56, 189, 248, 0.08)"
            >
              <span className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-4 block">
                {stat.label}
              </span>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </Section>
  );
}
