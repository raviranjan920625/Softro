import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProjectDetail from '@/components/ui/ProjectDetail';

export default function CareConnectPage() {
  return (
    <main>
      <PageHeader
        title="Revolutionizing Patient-Doctor Connections"
        subtitle="How we built a comprehensive doctor appointment system that reduced wait times by 40% and improved patient satisfaction scores across the board."
        breadcrumb="Project: Care Connect"
      />
      <ProjectDetail
        title="Care Connect - Healthcare Platform"
        category={['UI/UX Design', 'App Design', 'HealthTech']}
        client="CareConnect Health Systems"
        year="2025"
        service="Product Development & UI/UX"
        industry="HealthTech"
        challenge="CareConnect faced significant challenges with their legacy booking system. Patients were frustrated by complex appointment workflows, leading to a high drop-off rate of 35% during the booking process. Doctors also struggled with real-time schedule management, causing frequent overbookings and long waiting room times."
        solution="We engineered a modern, real-time appointment management ecosystem. This included a high-performance cross-platform mobile app for patients and a robust web dashboard for clinic administrators. We implemented an AI-driven scheduling algorithm that optimizes doctor availability while providing patients with instant, three-click booking journeys."
        results={[
          { label: 'Booking Drop-off Reduction', value: '85%' },
          { label: 'Increase in Monthly Appointments', value: '120%' },
          { label: 'Patient Satisfaction Score', value: '4.9/5' },
          { label: 'Reduced Admin Workload', value: '60%' }
        ]}
        mainImg="/assets/hero_office.png"
      />
    </main>
  );
}
