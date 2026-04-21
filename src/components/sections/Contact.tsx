'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { motion } from 'framer-motion';

const SafeIcon = ({ name, size = 18, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Select Services',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'Select Services', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.item}>
                <SafeIcon name="MapPin" className={styles.icon} />
                <div>
                  <h4>San Francisco HQ</h4>
                  <p>101 Montgomery St, Suite 500, San Francisco, CA 94104</p>
                </div>
              </div>
              <div className={styles.item}>
                <SafeIcon name="Mail" className={styles.icon} />
                <div>
                  <h4>Contact Us</h4>
                  <p>Phone: +1 (800) 555-0199</p>
                  <p>Email: hello@softro.io</p>
                </div>
              </div>
              <div className={styles.item}>
                <SafeIcon name="Clock" className={styles.icon} />
                <div>
                  <h4>Global Hours</h4>
                  <p>Mon - Fri: 09:00 - 18:00 (PST)</p>
                  <p>24/7 Support for Enterprise</p>
                </div>
              </div>
              <div className={styles.socials}>
                <h4>Stay Connected</h4>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Twitter"><SafeIcon name="Twitter" size={18} /></a>
                  <a href="#" aria-label="LinkedIn"><SafeIcon name="Linkedin" size={18} /></a>
                  <a href="#" aria-label="GitHub"><SafeIcon name="Github" size={18} /></a>
                  <a href="#" aria-label="Instagram"><SafeIcon name="Instagram" size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formArea}>
            <div className={styles.sectionTag}>
              <span className={styles.line}></span>
              Get In Touch
            </div>
            <h2 className={styles.title}>Let's Build the <span className={styles.highlight}>Future Together</span></h2>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex. John Doe" 
                    required 
                  />
                </div>
                <div className={styles.field}>
                  <label>Work Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@company.com" 
                    required 
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000" 
                  />
                </div>
                <div className={styles.field}>
                  <label>Interested Service *</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    title="Select Services"
                  >
                    <option disabled>Select Service</option>
                    <option>Product Development</option>
                    <option>Cloud & DevOps</option>
                    <option>UI/UX Design</option>
                    <option>eCommerce Solutions</option>
                    <option>Support & QA</option>
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <label>Tell Us About Your Goals *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and expectations..."
                  required
                ></textarea>
              </div>

              <div className={styles.actions}>
                <button 
                  type="submit" 
                  className={styles.submitBtn} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : <>Send Message <SafeIcon name="ArrowRight" size={16} className={styles.arrowIcon} /></>}
                </button>
                {showSuccess && (
                  <motion.span 
                    className={styles.successMsg}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    Request sent! Our team will reach out within 24h.
                  </motion.span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
