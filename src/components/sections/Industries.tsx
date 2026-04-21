'use client';

import React from 'react';
import styles from './Industries.module.css';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const SafeIcon = ({ name, size = 32, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

const industryData = [
  {
    icon: 'Banknote',
    title: 'FinTech & Banking',
    desc: 'Wealth management, digital payments, and secure banking infrastructures.',
  },
  {
    icon: 'Stethoscope',
    title: 'HealthTech & MedTech',
    desc: 'Telemedicine, patient portals, and HIPAA-compliant data systems.',
  },
  {
    icon: 'GraduationCap',
    title: 'EdTech & Learning',
    desc: 'LMS platforms, virtual classrooms, and interactive learning tools.',
  },
  {
    icon: 'Briefcase',
    title: 'SaaS & Enterprise',
    desc: 'Scalable B2B platforms, CRM systems, and internal tools.',
  },
  {
    icon: 'ShoppingBag',
    title: 'eCommerce & Retail',
    desc: 'Omnichannel retail, global marketplaces, and D2C brands.',
  },
  {
    icon: 'Truck',
    title: 'Logistics & Supply Chain',
    desc: 'Fleet management, inventory tracking, and warehouse automation.',
  },
  {
    icon: 'Building2',
    title: 'PropTech & Real Estate',
    desc: 'Property listing portals, rental management, and smart building SaaS.',
  },
  {
    icon: 'Clapperboard',
    title: 'Media & Entertainment',
    desc: 'Streaming services, content platforms, and ad-tech solutions.',
  },
];

const Industries = () => {
  return (
    <section className="section" id="industries">
      <div className="container">
        <SectionHeader 
          tag="Industries"
          title="Built for Every Vertical"
          description="We bring deep domain expertise to help you navigate industry-specific challenges with modern technology."
        />

        <div className={styles.grid}>
          {industryData.map((ind, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconBox}>
                <SafeIcon name={ind.icon as any} />
              </div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
