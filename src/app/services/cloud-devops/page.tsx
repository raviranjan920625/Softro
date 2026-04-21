import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function CloudDevOpsPage() {
  return (
    <main>
      <PageHeader
        title="Infrastructure That Never Sleeps"
        subtitle="Cloud-native architecture, automated deployments, and operational excellence so your team ships faster and your users experience zero downtime."
        breadcrumb="Cloud & DevOps"
      />
      <ServiceDetail
        title="Cloud & DevOps Engineering"
        tagline="Cloud & DevOps"
        description="We build the infrastructure backbone that lets your engineering team move fast and confidently. From cloud migrations and Kubernetes cluster design to automated CI/CD pipelines and security hardening — our DevOps engineers embed with your team to create an operations culture that scales."
        highlights={[
          'AWS, GCP & Azure Certified',
          'Zero-Downtime Deployments',
          'SOC 2 & HIPAA Compliant Setups',
          '99.99% SLA Uptime',
          '24/7 Monitoring & Alerting',
        ]}
        offerings={[
          { icon: 'Cloud', title: 'Cloud Migration & Setup', desc: 'Lift-and-shift, re-architecture, or greenfield cloud setups on AWS, GCP, or Azure — with full VPC, IAM, and networking configuration.' },
          { icon: 'Container', title: 'Containerization & Kubernetes', desc: 'Docker containerization, Helm chart management, and production-grade Kubernetes clusters with auto-scaling, resource limits, and pod security.' },
          { icon: 'GitBranch', title: 'CI/CD Pipeline Automation', desc: 'GitHub Actions, GitLab CI, or Jenkins pipelines with automated testing, vulnerability scanning, and blue-green deployment strategies.' },
          { icon: 'ShieldCheck', title: 'Security & Compliance', desc: 'Infrastructure hardening, secrets management with Vault, WAF configuration, vulnerability scanning, and compliance frameworks (SOC 2, HIPAA, GDPR).' },
          { icon: 'Activity', title: 'Monitoring & Observability', desc: 'Full-stack observability with Datadog, Grafana, Prometheus, and PagerDuty — with custom dashboards, SLO tracking, and on-call runbooks.' },
          { icon: 'Database', title: 'Database Management & Optimization', desc: 'RDS, Aurora, and MongoDB Atlas setup with automated backups, read replicas, query optimization, and disaster recovery planning.' },
        ]}
        process={[
          { step: '01', title: 'Infrastructure Audit', desc: 'We map your current setup and identify bottlenecks, security gaps, and cost inefficiencies.' },
          { step: '02', title: 'Architecture Design', desc: 'A detailed cloud architecture diagram reviewed and signed off before implementation.' },
          { step: '03', title: 'IaC Implementation', desc: 'Terraform and Pulumi scripts for fully reproducible, version-controlled infrastructure.' },
          { step: '04', title: 'Handover & Training', desc: 'Full documentation and training sessions so your team owns and understands the infrastructure.' },
        ]}
        industries={['SaaS & B2B Software', 'FinTech & Banking', 'HealthTech & MedTech', 'Media & Streaming', 'Gaming & Interactive', 'Government & Defense', 'E-Commerce & Retail', 'Logistics & IoT']}
        tech={['AWS', 'GCP', 'Azure', 'Terraform', 'Pulumi', 'Kubernetes', 'Docker', 'Helm', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'Datadog', 'Vault', 'Nginx', 'Cloudflare']}
        ctaText="Audit My Infrastructure"
      />
    </main>
  );
}
