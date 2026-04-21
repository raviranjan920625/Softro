'use client';

import React from 'react';
import styles from './CareersContent.module.css';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import Button from '../ui/Button';

const SafeIcon = ({ name, size = 20, ...props }: { name: keyof typeof Lucide; size?: number; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} {...props} />;
};

const benefits = [
  { icon: 'Globe', title: 'Remote-First Culture', desc: 'Work from anywhere in the world. We focus on results, not desk time.' },
  { icon: 'LineChart', title: 'Career Growth', desc: 'Personalized development plans and $2,000 annual learning budget.' },
  { icon: 'Heart', title: 'Premium Health', desc: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { icon: 'Zap', title: 'Latest Tech', desc: 'Whatever hardware and software you need to do your best work.' },
];

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    team: 'Engineering',
    location: 'Remote / US Timezones',
    type: 'Full-time',
  },
  {
    title: 'Senior DevOps Architect',
    team: 'Infrastructure',
    location: 'Remote / Global',
    type: 'Full-time',
  },
  {
    title: 'Senior UI/UX Designer',
    team: 'Product Design',
    location: 'Remote / Europe Timezones',
    type: 'Full-time',
  },
  {
    title: 'Backend Engineer (Go/Node)',
    team: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
  },
];

const CareersContent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Culture & Values */}
        <div className={styles.culture}>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureText}>
              <div className={styles.sectionTag}><span className={styles.line}></span>Our Culture</div>
              <h2>Built on trust, driven by <span className={styles.highlight}>innovation</span>.</h2>
              <p>
                At Softro, we don't just build software. We solve the complex engineering problems that allow our clients to change their industries. 
                We are a distributed team of specialists who value deep work, transparent communication, and continuous learning.
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b, i) => (
                <div key={i} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}><SafeIcon name={b.icon as any} /></div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Roles */}
        <div className={styles.openRoles}>
          <div className={styles.rolesHeader}>
            <div className={styles.sectionTag}><span className={styles.line}></span>Open Positions</div>
            <h2>Current <span className={styles.highlight}>Opportunities</span></h2>
            <p>We are always looking for exceptional talent to join our remote-first team.</p>
          </div>

          <div className={styles.rolesList}>
            {jobs.map((job, i) => (
              <motion.div 
                key={i} 
                className={styles.jobRow}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.jobMain}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span><SafeIcon name="Briefcase" size={14} /> {job.team}</span>
                    <span><SafeIcon name="MapPin" size={14} /> {job.location}</span>
                    <span><SafeIcon name="Clock" size={14} /> {job.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">Apply Now →</Button>
              </motion.div>
            ))}
          </div>

          <div className={styles.noJob}>
            <p>Don't see a role that fits? We still want to hear from you.</p>
            <a href="mailto:careers@softro.io">Send your CV to careers@softro.io</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersContent;
