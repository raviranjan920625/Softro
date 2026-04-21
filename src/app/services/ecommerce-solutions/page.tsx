import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function EcommerceSolutionsPage() {
  return (
    <main>
      <PageHeader
        title="Scale Your Online Business with Global Reach"
        subtitle="From high-converting Shopify themes to custom headless commerce architectures — we build online storefronts that maximize your ROI."
        breadcrumb="eCommerce Solutions"
      />
      <ServiceDetail
        title="High-End eCommerce Solutions"
        tagline="eCommerce Solutions"
        description="We don't just build online stores; we build high-performance retail engines. Whether you are a high-growth D2C brand or a complex B2B enterprise, our ecommerce specialists design and develop storefronts that combine beautiful design with robust back-office integration."
        highlights={[
          'Shopify Plus Experts',
          'Headless Commerce setups',
          'Custom Payment Gateways',
          'ERP/CRM Integrations',
          'Conversion Rate Optimized',
        ]}
        offerings={[
          { icon: 'ShoppingBag', title: 'Shopify & Shopify Plus', desc: 'Custom theme development, app integration, script customization, and full migration from legacy platforms specifically for scale.' },
          { icon: 'Zap', title: 'Headless Commerce', desc: 'Decoupled architectures using Shopify Oxygen, Commercetools, or BigCommerce with Next.js frontends for lightning-fast site speed.' },
          { icon: 'CreditCard', title: 'Payment & Checkout', desc: 'Integration with Stripe, Adyen, PayPal, and local payment providers with optimized one-page checkouts for higher conversion.' },
          { icon: 'Database', title: 'Inventory & ERP Sync', desc: 'Real-time synchronization between your storefront and ERP systems like NetSuite, SAP, or Microsoft Dynamics.' },
          { icon: 'Search', title: 'Search & Personalization', desc: 'Advanced search integration with Algolia or ElasticSearch, plus personalized product recommendations based on user behavior.' },
          { icon: 'LineChart', title: 'Analytics & CRO', desc: 'Deep GA4/GTM implementation, A/B testing frameworks, and continuous UX improvements to increase your average order value (AOV).' },
        ]}
        process={[
          { step: '01', title: 'Market Analysis', desc: 'We analyze your product niche and competitor landscape to define a winning strategy.' },
          { step: '02', title: 'Store Architecture', desc: 'Choosing between traditional SaaS, headless, or custom builds based on your growth needs.' },
          { step: '03', title: 'Development & Testing', desc: 'Mobile-first development followed by rigorous peak-load and security testing.' },
          { step: '04', title: 'Continuous Scaling', desc: 'Monthly performance audits and conversion rate optimization as you grow.' },
        ]}
        industries={['Fashion & Apparel', 'Health & Beauty', 'Consumer Electronics', 'B2B Wholesale', 'Subscription Services', 'Marketplace Platforms', 'Direct-to-Consumer (D2C)', 'Luxury Goods']}
        tech={['Shopify', 'Shopify Plus', 'Hydrogen/Oxygen', 'Mageto', 'WooCommerce', 'BigCommerce', 'Stripe', 'Algolia', 'Next.js', 'Sanity.io', 'Contentful', 'Klaviyo', 'Gorgias', 'Segment']}
        ctaText="Build My Store"
      />
    </main>
  );
}
