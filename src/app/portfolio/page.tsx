import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Portfolio from '@/components/sections/Portfolio';

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader 
        title="Extraordinary Work for Extraordinary Clients" 
        subtitle="Explore our successful projects and digital transformations. We deliver excellence through innovation." 
        breadcrumb="Our Portfolio"
      />
      <Portfolio />
    </main>
  );
}
