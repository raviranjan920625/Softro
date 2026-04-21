'use client';

import React from 'react';
import styles from './CTA.module.css';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div 
          className={styles.banner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.glow}></div>
          <div className={styles.tag}>Get Started Today</div>
          <h2 className={styles.title}>Have a Big Idea?<br />Let's Build It Together.</h2>
          <p className={styles.desc}>
            Our engineers and designers are ready to turn your vision into a scalable, production-ready reality. Book a free discovery call to discuss your roadmap.
          </p>
          <div className={styles.actions}>
            <Button variant="white" size="lg">Start for Free</Button>
            <Button variant="outline-white" size="lg">Talk to Sales</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
