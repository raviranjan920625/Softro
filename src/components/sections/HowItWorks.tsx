'use client';

import React from 'react';
import styles from './HowItWorks.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { motion } from 'framer-motion';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const steps = [
  {
    num: '01',
    icon: 'MessageSquare',
    title: 'Consultation',
    desc: 'We begin by deeply understanding your business goals, technical constraints, and target audience needs.'
  },
  {
    num: '02',
    icon: 'Compass',
    title: 'Strategy',
    desc: 'Our architects design a comprehensive roadmap focusing on scalability, security, and user experience.'
  },
  {
    num: '03',
    icon: 'Terminal',
    title: 'Engineering',
    desc: 'Our senior developers build your product using modern tech stacks and rigorous QA automation.'
  },
  {
    num: '04',
    icon: 'Rocket',
    title: 'Final Launch',
    desc: 'We handle the deployment and provide 24/7 monitoring to ensure a flawless market entry.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionTag}>
            <span className={styles.line}></span>
            Our Work Process
          </div>
          <h2 className={styles.title}>4 Steps To <span className={styles.highlight}>Success</span></h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.progressLine}></div>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconCircle}>
                <SafeIcon name={step.icon as any} size={36} />
                <span className={styles.badge}>{step.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
