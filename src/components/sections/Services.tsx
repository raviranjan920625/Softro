'use client';

import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedLink from '../ui/AnimatedLink';
import * as Lucide from 'lucide-react';
import serviceData from '@/data/services.json';

const SafeIcon = ({ name, size = 28, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

const Services = () => {
  return (
    <section className="section bg-light" id="services">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.header}>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              What We Do
            </div>
            <h2 className={styles.title}>
              Services We Provide to<br />
              <span className={styles.highlight}>Elevate Your Business</span>
            </h2>
          </div>
          <p className={styles.topDesc}>
            End-to-end digital solutions built by specialists. We align technology with your business goals to deliver measurable results.
          </p>
        </div>

        <div className={styles.grid}>
          {serviceData.map((service, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconBox} style={{ background: `${service.color}15`, color: service.color }}>
                <SafeIcon name={service.icon as any} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <AnimatedLink href={service.href} className={styles.cardLink} style={{ color: service.color }}>
                Learn More
              </AnimatedLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
