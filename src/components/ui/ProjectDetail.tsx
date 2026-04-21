'use client';

import React from 'react';
import styles from './ProjectDetail.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 20, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

interface ProjectDetailProps {
  title: string;
  category: string[];
  client: string;
  year: string;
  service: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  mainImg: string;
}

export default function ProjectDetail({
  title, category, client, year, service, industry, challenge, solution, results, mainImg
}: ProjectDetailProps) {
  return (
    <div className={styles.page}>
      {/* Project Meta Bar */}
      <section className={styles.metaBar}>
        <div className={styles.container}>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span>Client</span>
              <strong>{client}</strong>
            </div>
            <div className={styles.metaItem}>
              <span>Service</span>
              <strong>{service}</strong>
            </div>
            <div className={styles.metaItem}>
              <span>Industry</span>
              <strong>{industry}</strong>
            </div>
            <div className={styles.metaItem}>
              <span>Year</span>
              <strong>{year}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase */}
      <section className={styles.showcase}>
        <div className={styles.container}>
          <motion.div 
            className={styles.imgWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={mainImg} alt={title} width={1200} height={700} className={styles.mainImg} priority />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainInfo}>
              <div className={styles.block}>
                <h3>The Challenge</h3>
                <p>{challenge}</p>
              </div>
              <div className={styles.block}>
                <h3>The Solution</h3>
                <p>{solution}</p>
              </div>
            </div>
            
            <div className={styles.resultsBox}>
              <h3>Key Outcomes</h3>
              <div className={styles.resultsGrid}>
                {results.map((res, i) => (
                  <div key={i} className={styles.resCard}>
                    <span className={styles.resVal}>{res.value}</span>
                    <span className={styles.resLab}>{res.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.ctaCard}>
                <p>Have a similar project?</p>
                <Link href="/contact" className={styles.talkBtn}>
                  Let's Discuss <SafeIcon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Visuals */}
      <section className={styles.visuals}>
        <div className={styles.grid}>
          <div className={styles.visItem}>
            <Image src="/assets/about1.png" alt="Detail 1" width={800} height={600} />
          </div>
          <div className={styles.visItem}>
            <Image src="/assets/about2.png" alt="Detail 2" width={800} height={600} />
          </div>
        </div>
      </section>
    </div>
  );
}
