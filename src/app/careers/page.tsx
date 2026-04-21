import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import CareersContent from '@/components/sections/CareersContent';
import FAQ from '@/components/sections/FAQ';

export default function CareersPage() {
  return (
    <main>
      <PageHeader 
        title="Build the Future of IT Engineering" 
        subtitle="We are looking for passionate engineers, designers, and strategic thinkers to help us solve the world's most complex digital challenges." 
        breadcrumb="Careers"
      />
      <CareersContent />
      <FAQ />
    </main>
  );
}
