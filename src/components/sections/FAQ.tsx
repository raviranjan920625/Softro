'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import Link from 'next/link';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const faqs = [
  { 
    q: 'What services does Softro provide?', 
    a: 'We offer end-to-end digital services including Product Development, UI/UX Design, Cloud & DevOps, Mobile App Development, eCommerce Solutions, and Technical Support & QA. Each service is delivered by specialists with deep domain expertise.' 
  },
  { 
    q: 'Which industries do you specialize in?', 
    a: 'We serve 8 core verticals: FinTech & Banking, HealthTech, EdTech, SaaS, eCommerce, Logistics, PropTech, and Media. Our engineers bring deep domain expertise to help you navigate industry-specific regulatory and technical challenges.' 
  },
  { 
    q: 'Do you provide headless commerce development?', 
    a: 'Yes. We specialize in high-performance headless architecture using Shopify Hydrogen/Oxygen, Commercetools, and BigCommerce. By decoupling the frontend (using Next.js), we achieve sub-second load times and higher conversion rates for global D2C brands.' 
  },
  { 
    q: 'How long does a typical project take?', 
    a: 'Project timelines vary by scope. A typical MVP takes 8–12 weeks, while enterprise-grade applications can take 4–9 months. We always begin with a discovery sprint to give you an accurate, detailed timeline before committing to development.' 
  },
  { 
    q: 'What tech stack do you use?', 
    a: 'We are stack-agnostic but favor modern, scalable tech. Commonly: Next.js, Node.js, and TypeScript for web; React Native or Flutter for mobile; AWS/GCP with Kubernetes and Terraform for infrastructure.' 
  },
  { 
    q: 'Where is Softro located and how do you work?', 
    a: 'Our HQ is in San Francisco, CA, but we operate as a remote-first, distributed agency. Our specialists are located across US, European, and Asian timezones, allowing us to provide rapid development cycles and 24/7 support availability.' 
  },
  { 
    q: 'Are you currently hiring new talent?', 
    a: 'Yes! We are always looking for senior engineers, designers, and product strategists. You can view all our current openings and learn about our remote-first culture on our dedicated Careers page.' 
  },
  { 
    q: 'Do you offer post-launch support and maintenance?', 
    a: 'Yes. We offer retainer-based support plans ranging from basic (bug fixes and monitoring) to premium (feature development, performance optimization, and 24/7 incident response). Our SLA guarantees response times of under 2 hours for critical issues.' 
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section bg-light" id="faq">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.questions}>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              FAQs
            </div>
            <h2 className={styles.title}>Questions? <span className={styles.highlight}>Look Here.</span></h2>
            
            <div className={styles.accordion}>
              {faqs.map((faq, idx) => (
                <div key={idx} className={cn(styles.item, openIdx === idx && styles.open)}>
                  <button className={styles.trigger} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    {openIdx === idx ? <SafeIcon name="Minus" /> : <SafeIcon name="Plus" />}
                  </button>
                  {openIdx === idx && <div className={styles.answer}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <SafeIcon name="MessageSquare" size={32} />
              </div>
              <h3>Have a different question?</h3>
              <p>Our team responds to every inquiry within 24 hours. We focus on real answers, not templated responses.</p>
              <Link href="/contact" className={styles.contactBtn}>Contact Us →</Link>
            </div>

            <div className={styles.callCard}>
              <div className={styles.callIcon}>
                <SafeIcon name="Phone" />
              </div>
              <div>
                <span>Your Comfort, Our Priority</span>
                <strong>24/7 Support Available</strong>
                <p>+1 (800) 555-0199</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
