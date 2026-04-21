import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Let's Build Something Great Together" 
        subtitle="Have a project in mind? We would love to hear about it. Drop us a message and our team will reach out within 24 hours." 
        breadcrumb="Contact Us"
      />
      <Contact />
    </main>
  );
}
