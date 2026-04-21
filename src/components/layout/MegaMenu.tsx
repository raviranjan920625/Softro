'use client';

import React from 'react';
import styles from './MegaMenu.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SafeIcon = ({ name, size = 20, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const companyServices = [
  { icon: 'Code2', title: 'Product Development', href: '/services/product-development' },
  { icon: 'Palette', title: 'UI/UX Design', href: '/services/ui-ux-design' },
  { icon: 'ShoppingCart', title: 'eCommerce Solutions', href: '/services/ecommerce-solutions' },
  { icon: 'Smartphone', title: 'Mobile Development', href: '/services/mobile-development' },
  { icon: 'Cloud', title: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { icon: 'ShieldCheck', title: 'Technical Support & QA', href: '/services/technical-support-qa' },
];

const industries = [
  'FinTech & Banking',
  'HealthTech & MedTech',
  'EdTech & E-Learning',
  'SaaS & B2B Software',
  'eCommerce & Retail',
  'Logistics & Supply Chain',
];

const MegaMenu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.megaMenu}>
      <div className={styles.inner}>
        <div className={styles.servicesCol}>
          <h3>Company Services</h3>
          <div className={styles.servicesGrid}>
            {companyServices.map((s, idx) => (
              <Link href={s.href} key={idx} className={styles.serviceCard}>
                <div className={styles.iconBox}>
                  <SafeIcon name={s.icon as any} />
                </div>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
          <div className={styles.colFooter}>
            <p>Don't Hesitate to Collaborate with Us</p>
            <Link href="/contact">Contact us →</Link>
          </div>
        </div>

        <div className={styles.industriesCol}>
          <h3>Industries</h3>
          <ul className={styles.industryList}>
            {industries.map((ind, idx) => (
              <li key={idx} className={styles.industryItem}>
                <span className={styles.dot}></span>
                {ind}
              </li>
            ))}
          </ul>
          <Link href="/services" className={styles.viewMore}>View All Solutions →</Link>
        </div>

        <div className={styles.supportCol}>
          <div className={styles.supportCard}>
            <div className={styles.faces}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={styles.face}>
                  <Image src="/assets/about1.png" alt="Face" width={50} height={50} />
                </div>
              ))}
            </div>
            <h3>Always Here to Support You</h3>
            <Link href="/contact" className={styles.talkBtn}>
              Let's Talk <SafeIcon name="ArrowUpRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
