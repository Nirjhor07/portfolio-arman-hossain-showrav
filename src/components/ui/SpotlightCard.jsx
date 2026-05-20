'use client';

import { useState } from 'react';

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(208, 188, 255, 0.09)', ...props }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card glass-card-hover relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col ${className}`}
      {...props}
    >
      {/* Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      
      {/* Decorative Grid Line Accents inside card */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

      {/* Content wrapper */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {children}
      </div>
    </div>
  );
}
