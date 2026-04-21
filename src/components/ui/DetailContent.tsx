'use client';

import React from 'react';
import styles from './DetailContent.module.css';
import Image from 'next/image';
import * as Lucide from 'lucide-react';
import { motion } from 'framer-motion';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <Lucide.Check size={size} {...props} />;
  return <IconComponent size={size} {...props} />;
};

const DetailContent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Main Banner */}
        <div className={styles.banner}>
          <Image 
            src="/assets/hero_office.png" 
            alt="Service Detail" 
            width={1200} 
            height={600} 
            className={styles.bannerImg}
          />
        </div>

        {/* Overview & Approach */}
        <div className={styles.infoGrid}>
          <div className={styles.overview}>
            <h2>Product Development Services</h2>
            <h3>Service Overview:</h3>
            <p>
              We help businesses turn ideas into successful products by combining design, technology, and strategy. 
              From concept to launch, our product development services cover the entire lifecycle, ensuring 
              innovative, scalable, and market-ready solutions tailored to your business goals.
            </p>
          </div>
          <div className={styles.approach}>
            <h3>Our Approach:</h3>
            <ul className={styles.approachList}>
              <li><span className={styles.dot}></span> Discover & Research</li>
              <li><span className={styles.dot}></span> Strategy & Planning</li>
              <li><span className={styles.dot}></span> Execution & Optimization</li>
              <li><span className={styles.dot}></span> Measure & Scale</li>
            </ul>
          </div>
        </div>

        {/* Secondary Visuals */}
        <div className={styles.visualGrid}>
          <div className={styles.visualCard}>
            <Image src="/assets/about1.png" alt="Process" width={600} height={400} />
            <p>Successful Product Launches.</p>
          </div>
          <div className={styles.visualCard}>
            <Image src="/assets/about2.png" alt="Innovation" width={600} height={400} />
            <p>Technology To Every Project.</p>
          </div>
        </div>

        {/* Checklist */}
        <div className={styles.checkGrid}>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon}><SafeIcon name="Check" /></div>
            <div className={styles.checkText}>
              <strong>Client-Centric Approach</strong>
              <p>Your Goals, Challenges, And Users Are Always Our Priority.</p>
            </div>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon}><SafeIcon name="Check" /></div>
            <div className={styles.checkText}>
              <strong>Transparent Process</strong>
              <p>Open Communication, Regular Updates, And Collaborative Workflow.</p>
            </div>
          </div>
        </div>

        {/* Abstract Gallery */}
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
             <Image src="/assets/about1.png" alt="3D" width={300} height={300} />
          </div>
          <div className={styles.galleryItem}>
             <Image src="/assets/about2.png" alt="3D" width={300} height={300} />
          </div>
          <div className={styles.galleryItem}>
             <Image src="/assets/about1.png" alt="3D" width={600} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
