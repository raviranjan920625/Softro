import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import FAQ from '@/components/sections/FAQ';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "FAQ | Softro",
  description: "Find transparent answers about Softro's development process, timelines, pricing, and technology stack. We believe clarity builds trust.",
});

export default function FaqPage() {
  return (
    <main>
      <PageHeader 
        title="Questions We Hear Most Often" 
        subtitle="Transparent answers about our process, timelines, pricing, and technology. We believe clarity builds trust." 
        breadcrumb="FAQ"
      />
      <FAQ />
    </main>
  );
}
