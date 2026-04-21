'use client';

import React from 'react';
import styles from './SectionHeader.module.css';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: 'center' | 'left';
}

const SectionHeader = ({ tag, title, description, className, align = 'center' }: SectionHeaderProps) => {
  return (
    <motion.div 
      className={cn(styles.header, styles[align], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {tag && <div className={styles.tag}>{tag}</div>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
