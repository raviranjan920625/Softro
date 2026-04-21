'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Team.module.css';
import * as Lucide from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const team = [
  {
    name: 'Alex Morrison',
    role: 'Chief Executive Officer',
    bio: 'Ex-Google. 12+ years leading digital transformation for Fortune 500 companies.',
    img: '/assets/about1.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'MIT graduate. Architect of cloud-native systems handling 10M+ daily active users.',
    img: '/assets/about2.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Design',
    bio: 'Former Lead Designer at Figma. Crafts interfaces that win awards and convert users.',
    img: '/assets/about1.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Nair',
    role: 'VP of Engineering',
    bio: '10 years in backend engineering. Passionate about clean code and test-driven development.',
    img: '/assets/about2.png',
    linkedin: '#',
    twitter: '#',
  },
];

const Team = () => {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              Our Team
            </div>
            <h2 className={styles.title}>Meet Our <span className={styles.highlight}>Expert Team</span></h2>
            <p className={styles.desc}>Seasoned engineers, creative designers, and strategic thinkers — all under one roof.</p>
          </div>
          <Link href="/team">
            <Button variant="primary" hasArrow>View Full Team</Button>
          </Link>
        </div>

        <div className={styles.grid}>
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.imgWrap}>
                <Image src={member.img} alt={member.name} width={400} height={450} className={styles.img} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className={styles.socials}>
                  <a href={member.linkedin} aria-label="LinkedIn"><SafeIcon name="Linkedin" size={16} /></a>
                  <a href={member.twitter} aria-label="Twitter"><SafeIcon name="Twitter" size={16} /></a>
                </div>
              </div>
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
