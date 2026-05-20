'use client';

import { Mail, ArrowUp, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import MagneticButton from './ui/MagneticButton';

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative w-full border-t border-foreground/5 bg-background py-12 md:py-16 overflow-hidden">
      {/* Decorative subtle background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Logo & Handle descriptor */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center font-display font-bold text-black text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
                {personalInfo.handle}
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-display transition-all duration-300 group-hover:text-tertiary">
                {personalInfo.nickname}
              </span>
            </a>
            
            <p className="text-xs font-light text-on-surface-variant max-w-sm leading-relaxed">
              Compassionate Senior Healthcare Assistant dedicated to providing high-quality, patient-centered care, clinical safety compliance, and emotional support in London, UK.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-start gap-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs text-on-surface-variant hover:text-display transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Action widget */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
              Connect
            </span>
            
            <div className="flex gap-3">
              <a href={`tel:${personalInfo.socials.phone}`} className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="Phone">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.socials.email}`} className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>

            {/* Scroll back up anchor wrapped in magnetic */}
            <div className="mt-4 md:mt-2">
              <MagneticButton>
                <button
                  onClick={handleScrollToTop}
                  className="p-3 rounded-full bg-foreground/5 border border-foreground/5 hover:bg-foreground/10 hover:border-tertiary/40 text-on-surface-variant hover:text-display transition-all duration-300 shadow-md cursor-pointer"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/5 text-[10px] font-mono uppercase tracking-wider text-on-surface-variant/40">
          <span>
            &copy; 2026 {personalInfo.name}. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <span>Next.js App</span>
            <span>//</span>
            <span>UK Healthcare Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
