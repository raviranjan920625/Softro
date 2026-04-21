'use client';

import React from 'react';
import styles from './PageHeader.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.sep}>↔</span>
          <span>{breadcrumb || title}</span>
        </div>

        <div className={styles.mainContent}>
          <motion.div 
            className={styles.titleWrapper}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{title}</h1>
          </motion.div>
          
          <motion.div 
            className={styles.subtitleWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.verticalLine}></div>
            <p>{subtitle}</p>
          </motion.div>
        </div>
      </div>
      <div className={styles.decoration}></div>
    </section>
  );
};

export default PageHeader;
