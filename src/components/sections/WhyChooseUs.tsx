'use client';

import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { motion } from 'framer-motion';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const benefits = [
  {
    icon: 'ShieldCheck',
    title: 'Secure & Scalable',
    desc: 'We build enterprise-grade architectures that grow with your user base without compromising security.'
  },
  {
    icon: 'Users',
    title: 'Expert Engineers',
    desc: 'Our distributed team consists of senior specialists with over a decade of experience in modern tech stacks.'
  },
  {
    icon: 'Zap',
    title: 'Rapid Deployment',
    desc: 'Using CI/CD and automated QA, we ensure your features reach the market faster and more reliably.'
  },
  {
    icon: 'Headphones',
    title: '24/7 Support',
    desc: 'Dedicated maintenance teams ensure your systems are monitored and supported around the clock.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className={cn('section', styles.whyChooseUs)}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.visual}>
            <motion.div 
              className={styles.imgWrap}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image src="/assets/about1.png" alt="Our Team" width={600} height={400} className={styles.img} sizes="(max-width: 768px) 100vw, 50vw" />
              <button className={styles.playBtn} aria-label="Play Video">
                <SafeIcon name="Play" fill="currentColor" size={32} />
              </button>
            </motion.div>
          </div>

          <div className={styles.content}>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              Why Choose Us
            </div>
            <h2 className={styles.title}>Why Trust Softro for<br /><span className={styles.highlight}>Your IT Success?</span></h2>
            
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.iconBox}>
                    <SafeIcon name={benefit.icon as any} size={32} />
                  </div>
                  <div className={styles.text}>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className={styles.getQuoteBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Expert Advice <SafeIcon name="ArrowRight" size={16} className={styles.arrowIcon} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
