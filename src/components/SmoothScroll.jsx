'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Update ScrollTrigger on scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Sync Lenis with GSAP's internal requestAnimationFrame ticker
    const tick = (time) => {
      lenis.raf(time * 1000); // Lenis expects milliseconds
    };
    gsap.ticker.add(tick);

    // Disable lag smoothing in GSAP ScrollTrigger
    gsap.ticker.lagSmoothing(0);

    // Return clean up function to avoid leaks on page transitions
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return <>{children}</>;
}
