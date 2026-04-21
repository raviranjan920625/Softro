'use client';

import React from 'react';
import styles from './Brands.module.css';
import { cn } from '@/lib/utils';
import { Sparkles, Zap, ShieldCheck, Code2, Globe, Cpu } from 'lucide-react';

const coreServices = [
  { label: 'Product Engineering', icon: Code2 },
  { label: 'Cloud & DevOps', icon: Zap },
  { label: 'UI/UX Design', icon: Globe },
  { label: 'Mobile App Dev', icon: Sparkles },
  { label: 'eCommerce Solutions', icon: Cpu },
  { label: 'Technical Support & QA', icon: ShieldCheck },
  { label: 'FinTech & Banking', icon: Code2 },
  { label: 'HealthTech Systems', icon: Zap },
];

const Brands = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {[...coreServices, ...coreServices].map((service, idx) => (
          <div key={idx} className={styles.item}>
            <service.icon size={18} className={styles.icon} />
            <span className={styles.label}>{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
