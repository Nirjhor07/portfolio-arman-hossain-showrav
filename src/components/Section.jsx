'use client';

import { motion } from 'framer-motion';

export default function Section({ id, className = '', children, title, subtitle }) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-28 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {(title || subtitle) && (
          <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              {subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className="text-xs uppercase tracking-[0.2em] text-tertiary font-display font-semibold block mb-3"
                >
                  {subtitle}
                </motion.span>
              )}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-display font-bold tracking-tight text-display"
                >
                  {title}
                </motion.h2>
              )}
            </div>
            
            {/* Grid accent line decor for a futuristic HUD look */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-outline-variant to-transparent ml-8 mb-4 origin-left"
            />
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
