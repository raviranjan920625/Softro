import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BlogContent from '@/components/sections/BlogContent';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function InsightsPage() {
  return (
    <main>
      <PageHeader 
        title="Knowledge, Narratives, and Tech Perspectives" 
        subtitle="Exploring the latest trends in Cloud engineering, UI/UX design, and product strategy. Your hub for actionable IT insights." 
        breadcrumb="Insights Hub"
      />
      
      {/* Primary Blog Grid */}
      <BlogContent />

      {/* FAQ for quick answers */}
      <FAQ />

      {/* Global CTA */}
      <CTA />
    </main>
  );
}
