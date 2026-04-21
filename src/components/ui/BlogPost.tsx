'use client';

import React from 'react';
import styles from './BlogPost.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; img: string };
  content: React.ReactNode;
  tags: string[];
  bannerImg: string;
}

export default function BlogPost({
  title, category, date, readTime, author, content, tags, bannerImg
}: BlogPostProps) {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.dot}>·</span>
            <span>{date}</span>
            <span className={styles.dot}>·</span>
            <span>{readTime}</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.authorBar}>
            <div className={styles.authorImg}>
              <Image src={author.img} alt={author.name} width={50} height={50} />
            </div>
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerImgWrap}>
            <Image src={bannerImg} alt={title} width={1200} height={600} className={styles.mainImg} priority />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.body}>
              {content}
            </div>
            
            <aside className={styles.sidebar}>
              <div className={styles.widget}>
                <h3>Tags</h3>
                <div className={styles.tags}>
                  {tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.shareBox}>
                <h3>Share this post</h3>
                <div className={styles.shareLinks}>
                  <button><SafeIcon name="Twitter" /></button>
                  <button><SafeIcon name="Linkedin" /></button>
                  <button><SafeIcon name="Facebook" /></button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Stay updated with our latest insights</h2>
            <p>Subscribe to our newsletter for weekly deep dives into technology and design.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
