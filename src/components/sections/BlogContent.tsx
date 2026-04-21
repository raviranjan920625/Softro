'use client';

import React from 'react';
import styles from './BlogContent.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedLink from '../ui/AnimatedLink';
import * as Lucide from 'lucide-react';
import posts from '@/data/blog.json';

const SafeIcon = ({ name, size = 16, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

export default function BlogContent() {
  const [featured, ...rest] = posts;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Featured Post */}
        <motion.div
          className={styles.featured}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.featuredMeta}>
            <span className={styles.tag} style={{ background: `${featured.color}20`, color: featured.color }}>
              {featured.tag}
            </span>
            <span className={styles.category}>{featured.category}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{featured.date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{featured.readTime}</span>
          </div>
          <Link href={`/blog/${featured.slug}`}>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
          </Link>
          <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
          <AnimatedLink href={`/blog/${featured.slug}`} className={styles.readBtn}>
            Read Article
          </AnimatedLink>
        </motion.div>

        {/* Grid Posts */}
        <div className={styles.grid}>
          {rest.map((post, idx) => (
            <motion.article
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.tag} style={{ background: `${post.color}20`, color: post.color }}>
                  {post.tag}
                </span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <span className={styles.cardCategory}>{post.category}</span>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </Link>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <span className={styles.date}>{post.date}</span>
                <AnimatedLink href={`/blog/${post.slug}`} className={styles.cardLink}>
                  Read More
                </AnimatedLink>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
