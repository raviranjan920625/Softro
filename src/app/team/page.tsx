import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Team from '@/components/sections/Team';

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        title="The Experts Behind Every Great Project"
        subtitle="Seasoned engineers, creative designers, and strategic thinkers united by a single mission: delivering technology that matters."
        breadcrumb="Our Team"
      />
      <Team />
    </main>
  );
}
