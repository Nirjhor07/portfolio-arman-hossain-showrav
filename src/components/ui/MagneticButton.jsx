'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', ...props }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // quickTo creates highly optimized GSAP interpolations for fast updates
    const xTo = gsap.quickTo(el, "x", { duration: 1.0, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1.0, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      // Calculate distance between mouse cursor and button center
      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.hypot(distanceX, distanceY);

      // Define magnetic field trigger radius
      const magneticRadius = 70;

      if (distance < magneticRadius) {
        // Attract the button towards the cursor (scaling down the movement to be subtle)
        xTo(distanceX * 0.35);
        yTo(distanceY * 0.35);
      } else {
        // Snap back to base position
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`magnetic-wrapper inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
