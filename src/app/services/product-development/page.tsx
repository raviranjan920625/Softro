import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function ProductDevelopmentPage() {
  return (
    <main>
      <PageHeader
        title="Solutions That Drive Real Business Growth"
        subtitle="From napkin sketch to a scalable production system — we design, build, and ship software that solves real problems."
        breadcrumb="Product Development"
      />
      <ServiceDetail
        title="Full-Cycle Product Development"
        tagline="Product Development"
        description="We partner with startups, scale-ups, and enterprises to design and engineer digital products that users love. Our cross-functional teams cover every phase — discovery, UX, engineering, QA, deployment and beyond — so you get a finished product, not just code."
        highlights={[
          'MVP in 8 Weeks',
          'Agile Sprints',
          'Code Quality Guaranteed',
          'Post-Launch Support',
          'Dedicated Project Manager',
        ]}
        offerings={[
          { icon: 'Lightbulb', title: 'Discovery & Strategy', desc: 'Market research, user interviews, technical feasibility, and a detailed product roadmap before a single line of code is written.' },
          { icon: 'Layers', title: 'System Architecture', desc: 'Scalable, cloud-native architectures designed to handle your growth from 100 to 10 million users without rebuilding.' },
          { icon: 'Code2', title: 'Frontend Development', desc: 'High-fidelity, performant UIs built with React, Next.js, and Vue — pixel-perfect and accessible by default.' },
          { icon: 'Server', title: 'Backend Engineering', desc: 'Robust APIs, microservices, and data pipelines built with Node.js, Python, or Go, designed for scale and reliability.' },
          { icon: 'FlaskConical', title: 'QA & Testing', desc: 'Automated unit, integration, and end-to-end test suites. Zero regressions. Every release is production-confident.' },
          { icon: 'Rocket', title: 'Launch & Scaling', desc: 'DevOps setup, CI/CD pipelines, monitoring dashboards, and go-live support so your launch is smooth and uneventful.' },
        ]}
        process={[
          { step: '01', title: 'Discovery Sprint', desc: 'We define scope, timelines, and success metrics together.' },
          { step: '02', title: 'UX Prototyping', desc: 'Clickable prototypes validated with real users before development.' },
          { step: '03', title: 'Agile Development', desc: 'Two-week sprints with live demos and continuous feedback.' },
          { step: '04', title: 'Launch & Iterate', desc: 'Data-driven improvements post-launch to maximize product-market fit.' },
        ]}
        industries={['FinTech & Banking', 'HealthTech & MedTech', 'EdTech & E-Learning', 'SaaS & B2B Software', 'Logistics & Supply Chain', 'Real Estate & PropTech', 'Legal & RegTech', 'Media & Entertainment']}
        tech={['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Docker', 'AWS', 'Terraform']}
        ctaText="Start Discovery Call"
      />
    </main>
  );
}
