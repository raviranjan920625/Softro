'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Button from '../ui/Button';

const stats = [
  { value: 12, label: 'Years Experience', suffix: '+' },
  { value: 450, label: 'Projects Delivered', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
];

const About = () => {
  return (
    <section className={cn('section', styles.about)} id="about">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.visual}>
            <div className={styles.collage}>
              <div className={styles.mainImg}>
                <Image 
                  src="/assets/about1.png" 
                  alt="Engineering Team" 
                  width={400} 
                  height={400} 
                  priority
                />
              </div>
              <div className={styles.subImg1}>
                <Image 
                  src="/assets/about2.png" 
                  alt="Strategy Session" 
                  width={200} 
                  height={200} 
                />
              </div>
              <div className={styles.subImg2}>
                <Image 
                  src="/assets/about3.png" 
                  alt="Design Studio" 
                  width={200} 
                  height={200} 
                />
              </div>
              <motion.div 
                className={styles.circleBadge}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className={styles.badgeInner}>
                  <span>A Decade of Engineering Excellence • </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              Discover Softro
            </div>
            <h2 className={styles.title}>
              Engineering <span className={styles.highlight}>Excellence</span><br />
              Since 2011
            </h2>
            <p className={styles.desc}>
              Softro is a premier IT solutions agency dedicated to bridging the gap between complex engineering challenges and high-growth business goals. We specialize in building cloud-native products that don't just work — they scale.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.statVal}>{stat.value}{stat.suffix}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.footerCol}>
              <div className={styles.signature}>
                <strong>Alex Morrison</strong>
                <span>Alex Morrison • Founder & CEO</span>
              </div>
              <Link href="/about">
                <Button variant="outline" hasArrow>Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
