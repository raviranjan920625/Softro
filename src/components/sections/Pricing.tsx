'use client';

import React, { useState } from 'react';
import styles from './Pricing.module.css';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Discovery & Design',
    desc: 'Perfect for validating new product ideas and defining technical architecture.',
    monthly: 'From $4,500',
    annual: 'Fixed Price',
    features: [
      { name: 'Market & Tech Analysis', included: true },
      { name: 'Interactive Prototypes', included: true },
      { name: 'Technical Roadmap', included: true },
      { name: 'System Architecture', included: true },
      { name: 'Ongoing Support', included: false },
      { name: 'Full Development', included: false },
    ],
    buttonText: 'Start Discovery',
    featured: false
  },
  {
    name: 'Dedicated Squad',
    desc: 'A full-managed engineering team focused on building and scaling your core product.',
    monthly: 'Custom Quote',
    annual: 'Monthly Retainer',
    features: [
      { name: 'Senior Led Team', included: true },
      { name: 'Web & Mobile Apps', included: true },
      { name: 'Daily Standups', included: true },
      { name: 'Unlimited Maintenance', included: true },
      { name: 'Cloud & DevOps', included: true },
      { name: 'Security Audits', included: true },
    ],
    buttonText: 'Scale Your Team',
    featured: true
  },
  {
    name: 'Maintenance & QA',
    desc: 'Long-term support and quality assurance for stable production environments.',
    monthly: 'From $2,800',
    annual: 'Annual Support',
    features: [
      { name: '24/7 Monitoring', included: true },
      { name: 'Performance Tuning', included: true },
      { name: 'Security Patching', included: true },
      { name: 'SLA Driven Response', included: true },
      { name: 'Feature Development', included: true },
      { name: 'Infrastructure Management', included: true },
    ],
    buttonText: 'Secure Your Product',
    featured: false
  }
];

const Pricing = () => {
  return (
    <section className={cn('section', styles.pricing)} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionTag}>
            <span className={styles.line}></span>
            Pricing & Engagement
          </div>
          <h2 className={styles.title}>Transparent <span className={styles.highlight}>Engagement Models</span></h2>
          <p className={styles.desc}>We offer flexible partnership models designed to fit your project stage and growth objectives.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              className={cn(styles.card, plan.featured && styles.featured)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.featured && <div className={styles.featuredBadge}>Recommended</div>}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.desc}</p>
              </div>
              
              <div className={styles.price}>
                <span className={styles.amount}>{plan.monthly}</span>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={cn(styles.featureItem, !feature.included && styles.notIncluded)}>
                    {feature.included ? <Check size={16} className={styles.check} /> : <X size={16} className={styles.x} />}
                    {feature.name}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? 'primary' : 'outline'} 
                fullWidth
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
