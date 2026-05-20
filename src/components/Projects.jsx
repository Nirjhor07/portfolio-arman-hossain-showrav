'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';
import { projects } from '@/data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Masterpieces">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {projects.map((project, idx) => (
          <SpotlightCard
            key={project.title}
            className="border border-foreground/5 flex flex-col h-full hover:border-primary/20 overflow-hidden"
            spotlightColor={idx % 2 === 0 ? 'rgba(208, 188, 255, 0.08)' : 'rgba(0, 219, 231, 0.08)'}
          >
            {/* Project Preview Image Grid Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-black border border-foreground/5 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
              
              {/* corner ticks */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-foreground/20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-foreground/20 pointer-events-none" />
            </div>

            {/* Title & Description */}
            <div className="flex flex-col text-left flex-1">
              <h3 className="text-xl font-display font-bold text-display mb-3 tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-sm font-light text-on-surface-variant leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Tech Badges List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-foreground/5 border border-foreground/5 text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-foreground/5">
              <MagneticButton>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant hover:text-display transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Codebase
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-tertiary hover:text-display transition-colors duration-300 ml-auto"
                >
                  Live Demo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            </div>

          </SpotlightCard>
        ))}

      </div>
    </Section>
  );
}
