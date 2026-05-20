'use client';

import Section from './Section';
import { experience } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My Journey">
      <div className="relative max-w-3xl mx-auto py-8">
        
        {/* Glowing Vertical Timeline Central Line Accent */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1px] bg-gradient-to-b from-primary via-tertiary to-foreground/5 pointer-events-none transform -translate-x-1/2" />
        
        {/* Timeline Items */}
        <div className="flex flex-col gap-12">
          {experience.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={`${item.company}-${idx}`} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Pulsing Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-tertiary flex items-center justify-center transform -translate-x-1/2 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                
                {/* Date Panel */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left md:text-right font-mono text-xs uppercase tracking-widest text-tertiary font-semibold mb-2 md:mb-0">
                  <span className={`${isEven ? 'md:text-left md:block' : ''}`}>
                    {item.period}
                  </span>
                </div>
                
                {/* Card Info Box */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                >
                  <div className="glass-card hover:border-tertiary/20 p-6 rounded-2xl border border-foreground/5 shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-display font-bold text-display mb-1">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-primary font-display mb-3">
                      {item.company}
                    </h4>
                    {item.responsibilities && item.responsibilities.length > 0 ? (
                      <ul className="flex flex-col gap-2 mt-3">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs font-light text-on-surface-variant leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs font-light text-on-surface-variant leading-relaxed">
                        {item.details}
                      </p>
                    )}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
