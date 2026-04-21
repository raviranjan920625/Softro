'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={cn('container', styles.inner)}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.tagline}>
            <span className={styles.line}></span>
            Leading IT Solutions Agency
          </div>
          <h1 className={styles.title}>
            Where Creativity<br />
            Meets Cutting-Edge<br />
            <span className={styles.highlight}>Engineering</span>
          </h1>
          <p className={styles.desc}>
            We build high-performance digital products that scale. From Cloud-Native architectures to human-centric UX design, we help visionaries solve complex business challenges with world-class technology.
          </p>
          <div className={styles.actions}>
            <Link href="/services">
              <Button size="lg" variant="primary" hasArrow>Explore Solutions</Button>
            </Link>
            <Link href="/about">
              <button className={styles.textBtn}>Discover Our Story</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
