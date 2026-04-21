import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProjectDetail from '@/components/ui/ProjectDetail';

export default function DentalPlusPage() {
  return (
    <main>
      <PageHeader
        title="Scaling Digital Presence for Modern Clinics"
        subtitle="How we transformed a traditional dental practice into a digital-first clinic with automated patient onboarding and 3D treatment visualizations."
        breadcrumb="Project: Dental Plus"
      />
      <ProjectDetail
        title="Dental Plus - Modern Clinic Website"
        category={['Web Design', 'Automated Systems', 'HealthTech']}
        client="Dental Plus Clinics Group"
        year="2024"
        service="Web Development & CRM Integration"
        industry="Healthcare"
        challenge="Dental Plus was struggling with a fragmented patient journey. New patients had to fill out physical forms upon arrival, leading to long wait times and data entry errors. Their website was essentially a static digital business card, failing to capture leads or offer meaningful interactions for existing patients."
        solution="We built a centralized digital hub for the clinic. This included a custom patient portal with digital onboarding, real-time insurance verification, and interactive 3D treatment modules. We integrated the website directly with their practice management software (PMS) to automate appointment syncing and follow-up communications."
        results={[
          { label: 'Patient Onboarding Speed', value: '4x faster' },
          { label: 'Increase in Online Inquiries', value: '250%' },
          { label: 'Lead Conversion Rate', value: '18%' },
          { label: 'Reduced Admin Overheads', value: '35%' }
        ]}
        mainImg="/assets/about2.png"
      />
    </main>
  );
}
