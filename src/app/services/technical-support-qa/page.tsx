import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function TechnicalSupportQaPage() {
  return (
    <main>
      <PageHeader
        title="Stability, Security, and Seamless Performance"
        subtitle="Ongoing maintenance, automated testing, and proactive monitoring to ensure your digital ecosystem stays ahead of the curve."
        breadcrumb="Support & QA"
      />
      <ServiceDetail
        title="Technical Support & Quality Assurance"
        tagline="Support & QA"
        description="We don't just launch and leave. Our dedicated support team ensures that your software remains secure, performant, and up-to-date. By combining automated QA suites with 24/7 proactive monitoring, we solve technical issues before they affect your users."
        highlights={[
          '24/7 Monitoring',
          'SLA-Backed Response',
          'Automated Regression Testing',
          'Security Patch Management',
          'Cloud Cost Optimization',
        ]}
        offerings={[
          { icon: 'ShieldCheck', title: 'Security Audits & Hardening', desc: 'Continuous vulnerability scanning, penetration testing, and security updates to protect your data and user privacy.' },
          { icon: 'Activity', title: 'Proactive Monitoring', desc: 'Real-time alerting for uptime, performance bottlenecks, and error rates using tools like Datadog, Sentry, and New Relic.' },
          { icon: 'FlaskConical', title: 'Automated QA Testing', desc: 'Maintenance of end-to-end test suites (Playwright/Cypress) to ensure new features never break existing functionality.' },
          { icon: 'Wrench', title: 'Legacy Code Maintenance', desc: 'Strategic refactoring and maintenance of existing codebases to reduce technical debt and ensure long-term stability.' },
          { icon: 'HardDrive', title: 'Backup & Recovery', desc: 'Automated off-site backup strategies and disaster recovery drills to ensure you never lose critical business data.' },
          { icon: 'FileText', title: 'Performance Audits', desc: 'Regular reviews of Core Web Vitals, database query performance, and server resource usage to keep your app lightning-fast.' },
        ]}
        process={[
          { step: '01', title: 'System Audit', desc: 'We perform a deep dive into your existing tech stack to map risks and optimization areas.' },
          { step: '02', title: 'Monitoring Setup', desc: 'Deployment of full-stack observability tools to get 360-degree visibility into your system.' },
          { step: '03', title: 'Monthly Maintenance', desc: 'Regular patch cycles, security updates, and performance tuning sessions.' },
          { step: '04', title: 'Incident Response', desc: 'Rapid resolution of any issues according to strictly defined SLA windows.' },
        ]}
        industries={['Mission-Critical Systems', 'Financial Services', 'Healthcare Portals', 'Government Platforms', 'Enterprise SaaS', 'High-Traffic eCommerce', 'Legacy Software Systems', 'Education Portals']}
        tech={['Datadog', 'Sentry', 'New Relic', 'Playwright', 'Cypress', 'Selenium', 'Terraform', 'Jira', 'PagerDuty', 'Statuspage', 'Ansible', 'SonarQube', 'Postman', 'Charles Proxy']}
        ctaText="Get a System Audit"
      />
    </main>
  );
}
