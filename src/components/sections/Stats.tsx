'use client';

import React from 'react';
import styles from './Stats.module.css';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 150, label: 'Projects Delivered', suffix: '+' },
  { value: 10, label: 'Years Expertise', suffix: '+' },
  { value: 85, label: 'Senior Engineers', suffix: '' },
  { value: 98, label: 'Client Retention', suffix: '%' },
];

const StatBox = ({ value, label, suffix, delay }: { value: number, label: string, suffix: string, delay: number }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const isInView = useInView(elementRef, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += (end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div className={styles.statBox} ref={elementRef}>
      <motion.div 
        className={styles.num}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        {value % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}
        {suffix}
      </motion.div>
      <motion.div 
        className={styles.label}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <StatBox 
              key={idx} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
