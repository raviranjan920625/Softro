'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
}

export default function SectionReveal({ children }: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoothing out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for a "Perspective Reveal"
  // As the section enters (start end), it scales up from 0.8 to 1
  // As it stays in view (middle), it stays at 1
  // As it leaves (end start), it stays at 1 or slightly fades
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const blur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 5]);

  return (
    <div ref={containerRef} style={{ position: 'relative', overflow: 'visible' }}>
      <motion.div
        style={{
          scale,
          opacity,
          filter: `blur(${blur}px)`,
          perspective: '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
