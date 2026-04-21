import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BlogContent from '@/components/sections/BlogContent';

export default function BlogPage() {
  return (
    <main>
      <PageHeader 
        title="Insights, Ideas & Industry Trends" 
        subtitle="Expert opinions on software development, cloud architecture, and digital strategy to help your business stay ahead." 
        breadcrumb="Blog & Insights"
      />
      <BlogContent />
    </main>
  );
}
