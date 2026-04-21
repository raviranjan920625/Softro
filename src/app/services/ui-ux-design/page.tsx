import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function UiUxDesignPage() {
  return (
    <main>
      <PageHeader
        title="Design That Converts, Not Just Impresses"
        subtitle="User research, interaction design, and polished interfaces that bridge the gap between your product and your users."
        breadcrumb="UI/UX Design"
      />
      <ServiceDetail
        title="UI/UX Design Services"
        tagline="UI/UX Design"
        description="Great design is invisible — it simply works. Our design team combines deep user research with world-class visual craft to create interfaces that reduce friction, increase retention, and make your product the one users recommend. From complex enterprise dashboards to consumer-facing apps, we design for outcomes."
        highlights={[
          'User Research Included',
          'Figma Design System',
          'Accessibility (WCAG 2.1)',
          'Prototype Testing',
          'Dev-Ready Handoff',
        ]}
        offerings={[
          { icon: 'Users', title: 'User Research & Discovery', desc: 'Interviews, surveys, competitive analysis, and persona mapping to understand exactly who you are designing for and what they need.' },
          { icon: 'LayoutDashboard', title: 'UX Architecture & Wireframes', desc: 'Information architecture, user flows, and low-fidelity wireframes that validate structure before any visual design begins.' },
          { icon: 'Figma', title: 'High-Fidelity UI Design', desc: 'Pixel-perfect visual designs in Figma with a full component library, design tokens, and dark/light mode variants.' },
          { icon: 'MousePointerClick', title: 'Interactive Prototyping', desc: 'Clickable Figma prototypes or coded prototypes for user testing — so you validate before you build.' },
          { icon: 'Accessibility', title: 'Accessibility & Inclusive Design', desc: 'WCAG 2.1 AA compliance, screen-reader optimization, color contrast checks, and keyboard navigation support baked in from day one.' },
          { icon: 'FileCode', title: 'Design System & Handoff', desc: 'A scalable design system with documented components, spacing tokens, and Figma Dev Mode handoff so engineers build exactly what was designed.' },
        ]}
        process={[
          { step: '01', title: 'Research & Empathize', desc: 'We interview your users and analyze competitors to uncover real pain points.' },
          { step: '02', title: 'Define & Ideate', desc: 'Personas, journey maps, and ideation workshops align your team on the solution.' },
          { step: '03', title: 'Design & Prototype', desc: 'Wireframes to polished UI, tested with real users at every stage.' },
          { step: '04', title: 'Handoff & Support', desc: 'Development-ready specs and ongoing design support during engineering.' },
        ]}
        industries={['Consumer Apps & D2C', 'SaaS & Enterprise Software', 'FinTech & Banking', 'HealthTech & Wellness', 'EdTech & E-Learning', 'Media & Publishing', 'Government & Public Sector', 'Non-Profit & NGO']}
        tech={['Figma', 'FigJam', 'Protopie', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Mixpanel', 'Zeroheight', 'Storybook', 'Lottie', 'Adobe XD']}
        ctaText="Get a Design Audit"
      />
    </main>
  );
}
