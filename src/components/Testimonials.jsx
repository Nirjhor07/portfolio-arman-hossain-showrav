'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { testimonials } from '@/data/portfolioData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <Section id="testimonials" title="Client Testimonials" subtitle="Kind Words">
      <div 
        className="max-w-3xl mx-auto w-full relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="min-h-[300px] flex items-center justify-center relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-left"
            >
              <SpotlightCard
                className="border border-foreground/5 p-8 sm:p-12 flex flex-col justify-between min-h-[280px] bg-surface-dim/40 rounded-3xl hover:border-primary/20 relative overflow-hidden"
                spotlightColor="rgba(14, 165, 233, 0.05)"
              >
                {/* Top quote icon decor */}
                <div className="mb-6 flex justify-between items-center text-primary/30">
                  <Quote className="w-12 h-12 transform rotate-180 text-primary" />
                  <div className="w-16 h-[1px] bg-foreground/10" />
                </div>

                {/* Quote text */}
                <blockquote className="text-base sm:text-lg font-light text-on-surface-variant italic leading-relaxed mb-8 flex-1">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col gap-1 border-t border-foreground/5 pt-4">
                  <cite className="text-base font-display font-bold text-display not-italic tracking-wide">
                    {testimonials[currentIndex].name}
                  </cite>
                  <span className="text-xs font-mono uppercase tracking-wider text-tertiary">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-foreground/5 hover:border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-foreground/5 hover:border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-primary' : 'w-2.5 bg-foreground/15 hover:bg-foreground/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
