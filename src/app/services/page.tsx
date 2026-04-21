import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function ServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Solutions for a Digital-First World" 
        subtitle="End-to-end IT services designed to help businesses innovate, scale, and outperform the competition in an evolving digital landscape." 
        breadcrumb="All Services"
      />
      
      {/* Services Grid Section */}
      <Services />

      {/* Industries Component we just created */}
      <Industries />

      {/* FAQ for Services */}
      <FAQ />

      {/* Primary CTA */}
      <CTA />
    </main>
  );
}
