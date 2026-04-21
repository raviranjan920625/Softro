'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>SOFTRO.</span>
            </Link>
            <p className={styles.tagline}>
              Empowering businesses with modern IT solutions. We bridge the gap between complex technology and business success.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><SafeIcon name="Facebook" /></a>
              <a href="#" aria-label="Twitter"><SafeIcon name="Twitter" /></a>
              <a href="#" aria-label="Linkedin"><SafeIcon name="Linkedin" /></a>
              <a href="#" aria-label="Instagram"><SafeIcon name="Instagram" /></a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/product-development">Product Development</Link></li>
              <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link href="/services/cloud-devops">Cloud & DevOps</Link></li>
              <li><Link href="/services/mobile-development">Mobile App Dev</Link></li>
              <li><Link href="/services/ecommerce-solutions">eCommerce Solutions</Link></li>
              <li><Link href="/services/technical-support-qa">Support & QA</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Insights</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Support</h4>
            <ul>
              <li><Link href="/faq">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/services">Our Industries</Link></li>
              <li><Link href="/faq">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>Join 2,000+ others receiving our weekly tech insights.</p>
            <form className={styles.form} onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                {subscribed ? <SafeIcon name="Check" /> : <SafeIcon name="ArrowRight" />}
              </button>
            </form>
            {subscribed && <span className={styles.success}>Subscribed!</span>}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 SOFTRO IT Solutions. All Rights Reserved.</p>
          <div className={styles.legal}>
            <Link href="/faq">Privacy Policy</Link>
            <Link href="/faq">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
