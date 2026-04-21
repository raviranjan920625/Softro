'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { motion } from 'framer-motion';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'CTO, Fintech Solutions',
    text: 'Softro delivered our cloud-native migration in record time. Their technical depth and commitment to engineering excellence helped us scale without a single second of downtime.',
    img: '/assets/about1.png',
    rating: 5,
    metric: '300% Speed',
    color: '#2d5bff'
  },
  {
    name: 'Sarah Drasner',
    role: 'Product Lead, D2C Brands',
    text: 'The UI/UX design team at Softro is world-class. They re-engineered our user journey which led to a 22% increase in checkout conversions. Truly a game-changing partner.',
    img: '/assets/about2.png',
    rating: 5,
    metric: '22% Conv.',
    color: '#7c3aed'
  },
  {
    name: 'Alex Rivera',
    role: 'Founder, CloudScale',
    text: 'Partnering with Softro was the best decision for our infra. Their DevOps team provided a security-first environment and SOC 2 compliance readiness in weeks, not months.',
    img: '/assets/about3.png',
    rating: 5,
    metric: 'SOC 2 Ready',
    color: '#059669'
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(1);

  return (
    <section className={cn('section', styles.testimonials)} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionTag}>
            <span className={styles.line}></span>
            Client Stories
          </div>
          <h2 className={styles.title}>
            What Global Leaders <br />
            <span className={styles.highlight}>Saying About Softro</span>
          </h2>
        </div>

        <div className={styles.mainArea}>
          <div className={styles.grid}>
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                className={cn(styles.card, active === idx && styles.activeCard)}
                onClick={() => setActive(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.metricLabel} style={{ color: t.color }}>
                    {t.metric}
                  </div>
                  <div className={styles.stars}>
                    {[...Array(t.rating)].map((_, i) => (
                      <SafeIcon key={i} name="Star" size={14} fill="#FFB800" color="#FFB800" />
                    ))}
                  </div>
                </div>

                <p className={styles.text}>"{t.text}"</p>

                <div className={styles.author}>
                  <div className={styles.authorImg}>
                    <Image src={t.img} alt={t.name} width={60} height={60} className={styles.avatar} />
                  </div>
                  <div className={styles.info}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>


              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
