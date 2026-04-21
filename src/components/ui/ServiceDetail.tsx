'use client';

import React from 'react';
import styles from './ServiceDetail.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 20, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

interface Offering {
  icon: string;
  title: string;
  desc: string;
}

interface Process {
  step: string;
  title: string;
  desc: string;
}

interface ServiceDetailProps {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  offerings: Offering[];
  process: Process[];
  industries: string[];
  tech: string[];
  ctaText?: string;
}

export default function ServiceDetail({
  title, tagline, description, highlights, offerings, process, industries, tech, ctaText
}: ServiceDetailProps) {
  return (
    <div className={styles.page}>

      {/* Highlights Strip */}
      <section className={styles.highlights}>
        <div className={styles.container}>
          <div className={styles.highlightsGrid}>
            {highlights.map((h, i) => (
              <div key={i} className={styles.highlightItem}>
                <div className={styles.checkCircle}><SafeIcon name="Check" size={14} /></div>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.sectionTag}>
                <span className={styles.tagLine}></span>
                Service Overview
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
              <Link href="/contact" className={styles.ctaBtn}>
                {ctaText || 'Start Your Project'} <SafeIcon name="ArrowUpRight" size={16} />
              </Link>
            </motion.div>
            <div className={styles.approachBox}>
              <h3>Our Approach</h3>
              <ul>
                {process.slice(0, 4).map((p, i) => (
                  <li key={i}>
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}><span className={styles.tagLine}></span>What We Deliver</div>
            <h2>Our {title} Offerings</h2>
          </div>
          <div className={styles.offeringsGrid}>
            {offerings.map((o, i) => (
              <motion.div
                key={i}
                className={styles.offeringCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className={styles.offeringIcon}>
                  <SafeIcon name={o.icon as any} />
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.techInner}>
            <div>
              <div className={styles.sectionTag}><span className={styles.tagLine}></span>Technology</div>
              <h2>Tools & Technologies</h2>
              <p>We choose the right stack for your needs — not our convenience.</p>
            </div>
            <div className={styles.techGrid}>
              {tech.map((t, i) => (
                <div key={i} className={styles.techBadge}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionTag}><span className={styles.tagLine}></span>Industries We Serve</div>
          <h2>Built for Every Sector</h2>
          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <div key={i} className={styles.industryCard}>
                <SafeIcon name="BuildingIcon" size={20} />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <h2>Ready to Get Started?</h2>
            <p>Tell us about your {tagline.toLowerCase()} project and we will respond within 24 hours.</p>
            <Link href="/contact" className={styles.ctaBannerBtn}>
              Book a Free Consultation <SafeIcon name="ArrowUpRight" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
