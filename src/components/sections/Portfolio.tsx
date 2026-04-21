'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import Button from '../ui/Button';
import Link from 'next/link';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const projects = [
  {
    slug: 'care-connect',
    title: 'Care Connect - Doctor Appointment App',
    category: ['UI/UX Design', 'App Design', 'HealthTech'],
    img: '/assets/hero_office.png'
  },
  {
    slug: 'dental-plus',
    title: 'Dental Plus - Clinic Management Website',
    category: ['UI/UX Design', 'Web Design', 'Automated Systems'],
    img: '/assets/about2.png'
  },
  {
    slug: 'care-connect', // Reusing slug for demo
    title: 'Car Rental - Car Rental Booking Mobile App',
    category: ['UI/UX Design', 'App Design', 'Wireframe'],
    img: '/assets/hero_illustration.png'
  },
  {
    slug: 'dental-plus', // Reusing slug for demo
    title: 'Hotel Booking - Hotel Booking App Landing Page',
    category: ['UI/UX Design', 'Landing Page', 'Wireframe'],
    img: '/assets/hero_illustration.png'
  }
];

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionTag}>
            <span className={styles.line}></span>
            Our Latest Projects
          </div>
          <h2 className={styles.title}>Explore Our Showcase of<br /><span className={styles.highlight}>Featured Works</span></h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imgArea}>
                <Image src={project.img} alt={project.title} width={600} height={400} className={styles.img} sizes="(max-width: 768px) 100vw, 50vw" />
                <div className={styles.overlay}>
                  <Link href={`/portfolio/${project.slug}`} className={styles.actionBtn} aria-label="View Project">
                    <SafeIcon name="ArrowUpRight" size={24} />
                  </Link>
                </div>
              </div>
              <div className={styles.info}>
                <Link href={`/portfolio/${project.slug}`}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </Link>
                <div className={styles.categories}>
                  {project.category.map((cat, i) => (
                    <span key={i} className={styles.cat}>{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/portfolio">
            <Button variant="primary" hasArrow>View All Works</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
