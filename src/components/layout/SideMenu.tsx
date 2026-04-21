'use client';

import React from 'react';
import styles from './SideMenu.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AnimatedLink from '../ui/AnimatedLink';

const SafeIcon = ({ name, size = 20, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div 
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close Menu">
              <SafeIcon name="X" size={24} />
            </button>

            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.logo}>
                  <div className={styles.logoIcon}>
                    <div className={styles.iconCircle}></div>
                  </div>
                  <span className={styles.logoText}>SOFTRO.</span>
                </div>
                <p className={styles.description}>
                  We develop innovative digital solutions that enhance business scalability through Cloud & DevOps, Product Engineering, and Human-Centric Design.
                </p>
              </div>

              <div className={styles.contactList}>
                <div className={styles.timeline}></div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <SafeIcon name="Mail" />
                  </div>
                  <div className={styles.contactInfo}>
                    <span>Send Us Mail</span>
                    <a href="mailto:hello@softro.io" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>hello@softro.io</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <SafeIcon name="Phone" />
                  </div>
                  <div className={styles.contactInfo}>
                    <span>Call 24/7 Hours</span>
                    <a href="tel:+18005550199" className={styles.contactLink}>+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <SafeIcon name="MapPin" />
                  </div>
                  <div className={styles.contactInfo}>
                    <span>San Francisco HQ</span>
                    <a href="https://maps.google.com/?q=101+Montgomery+St,+Suite+500,+San+Francisco,+CA+94104" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      101 Montgomery St, Suite 500, San Francisco, CA 94104
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <h4>Follow Our Journey</h4>
                <div className={styles.socials}>
                  <a href="#" aria-label="Facebook"><SafeIcon name="Facebook" /></a>
                  <a href="#" aria-label="Twitter"><SafeIcon name="Twitter" /></a>
                  <a href="#" aria-label="Linkedin"><SafeIcon name="Linkedin" /></a>
                  <a href="#" aria-label="Instagram"><SafeIcon name="Instagram" /></a>
                </div>
                <AnimatedLink href="/contact" onClick={onClose} className={styles.quoteBtn}>
                   Get a Free Quote
                </AnimatedLink>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
