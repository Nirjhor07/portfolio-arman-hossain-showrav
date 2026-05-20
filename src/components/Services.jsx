'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { services } from '@/data/portfolioData';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <Section id="services" title="Services Offered" subtitle="What I Do">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {services.map((service, idx) => {
          // Resolve Lucide icon dynamically from the text string
          const IconComponent = Icons[service.icon] || Icons.Sparkles;
          
          return (
            <SpotlightCard
              key={service.title}
              className="border border-foreground/5 p-6 flex flex-col justify-between text-left min-h-[280px] hover:border-tertiary/20"
              spotlightColor={idx % 2 === 0 ? 'rgba(14, 165, 233, 0.05)' : 'rgba(13, 148, 136, 0.05)'}
            >
              {/* Icon Accent Header */}
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-primary group-hover:text-tertiary transition-colors duration-300 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>

              {/* Title & description */}
              <div className="flex flex-col gap-3 flex-1 justify-end">
                <h3 className="text-xl font-display font-bold text-display tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>

            </SpotlightCard>
          );
        })}

      </div>
    </Section>
  );
}
