'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { personalInfo } from '@/data/portfolioData';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Monitor scroll for glass navbar background transition and active link tracking
  useEffect(() => {
    setMounted(true);
    // Load theme setting
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const handleScroll = () => {
      // Set background opacity on scroll
      setScrolled(window.scrollY > 20);

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Floating Header Wrapper */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 ${
          scrolled ? 'backdrop-blur-md bg-background/60 border-b border-foreground/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo and Name handle */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center font-display font-bold text-black text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
              {personalInfo.handle}
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-display transition-all duration-300 group-hover:text-tertiary">
              {personalInfo.nickname}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border-foreground/5">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-foreground/10 text-display font-semibold'
                      : 'text-on-surface-variant hover:text-display'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Controls Panel (Theme Switcher + Let's Talk CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <MagneticButton>
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full border border-foreground/10 bg-foreground/5 text-display hover:text-tertiary transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFB300] fill-[#FFB300]" /> : <Moon className="w-4 h-4 text-primary fill-primary" />}
                </button>
              </MagneticButton>
            )}

            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-tertiary hover:text-black px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-foreground/5 hover:shadow-tertiary/20"
              >
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Hamburguer & Theme Toggle Actions */}
          <div className="flex items-center gap-3 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-foreground/10 bg-foreground/5 text-display flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFB300] fill-[#FFB300]" /> : <Moon className="w-4 h-4 text-primary fill-primary" />}
              </button>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-display hover:text-tertiary p-1 transition-colors z-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Glass Overlay Menu */}
      <div
        className={`fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-xl z-30 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Subtle grid background decor */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
        
        <nav className="flex flex-col gap-6 items-center text-center relative z-10">
          {navItems.map((item, idx) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl font-display uppercase tracking-widest font-semibold transition-all duration-300 ${
                  isActive ? 'text-tertiary text-shadow-glow' : 'text-on-surface-variant hover:text-display'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 75}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            );
          })}
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest bg-foreground text-background px-6 py-3 rounded-full hover:bg-tertiary hover:text-black transition-all duration-300"
            style={{
              transitionDelay: mobileMenuOpen ? `${navItems.length * 75}ms` : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </>
  );
}
