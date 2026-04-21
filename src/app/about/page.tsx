import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="Innovating the Digital Frontier Together" 
        subtitle="A dedicated team of experts pushing the boundaries of technology. Learn about our journey and our vision." 
        breadcrumb="About Company"
      />
      <About />
      <Team />
    </main>
  );
}
