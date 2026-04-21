import PageHeader from '@/components/ui/PageHeader';
import ServiceDetail from '@/components/ui/ServiceDetail';

export default function MobileDevelopmentPage() {
  return (
    <main>
      <PageHeader
        title="Mobile Apps That Users Open Every Day"
        subtitle="Native iOS, Android, and cross-platform apps — built for performance, optimized for engagement, designed to retain."
        breadcrumb="Mobile App Development"
      />
      <ServiceDetail
        title="Mobile App Development"
        tagline="Mobile App Development"
        description="We build mobile experiences that feel native, perform beautifully, and scale effortlessly. Whether you need a consumer app for millions or an enterprise tool for your team, we cover every platform — iOS, Android, and cross-platform — with best-in-class tooling."
        highlights={[
          'iOS & Android',
          'React Native & Flutter',
          'Cross-Platform Codebase',
          'App Store Submission',
          'Offline-First Support',
        ]}
        offerings={[
          { icon: 'Apple', title: 'iOS Development (Swift)', desc: 'SwiftUI and UIKit applications built for the latest iPhone and iPad, leveraging ARKit, Face ID, Apple Pay, and HealthKit integrations.' },
          { icon: 'Smartphone', title: 'Android Development (Kotlin)', desc: 'Jetpack Compose and XML-based Android apps optimized for the full ecosystem — from flagship Pixels to entry-level devices.' },
          { icon: 'Layers', title: 'React Native', desc: 'One codebase, two platforms. High-performance JavaScript apps with native modules where needed for 95%+ code sharing between iOS and Android.' },
          { icon: 'Zap', title: 'Flutter', desc: 'Dart-based cross-platform apps with pixel-perfect custom UIs, smooth 60fps animations, and even web/desktop deployment from the same codebase.' },
          { icon: 'Wifi', title: 'Offline-First & PWA', desc: 'Apps that work seamlessly without connectivity using IndexedDB, Service Workers, and smart sync strategies for field and low-bandwidth use cases.' },
          { icon: 'Bell', title: 'Push Notifications & Analytics', desc: 'Firebase, Mixpanel, and Segment integrations with smart notification workflows to drive re-engagement and track retention metrics.' },
        ]}
        process={[
          { step: '01', title: 'Platform Strategy', desc: 'We choose the right framework based on your budget, timeline, and technical requirements.' },
          { step: '02', title: 'UX & Prototype', desc: 'Mobile-first wireframes validated with real users before development begins.' },
          { step: '03', title: 'Development & QA', desc: 'Built and tested on real devices, not just simulators.' },
          { step: '04', title: 'App Store Launch', desc: 'We handle the full Apple App Store and Google Play submission process.' },
        ]}
        industries={['Consumer Apps & D2C', 'HealthTech & Wellness', 'FinTech & Banking', 'Logistics & Field Service', 'EdTech & E-Learning', 'Real Estate & PropTech', 'Travel & Hospitality', 'On-Demand & Marketplace']}
        tech={['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'React Native', 'Flutter', 'Dart', 'Expo', 'Firebase', 'Xcode', 'Android Studio', 'TestFlight', 'App Center', 'Fastlane']}
        ctaText="Discuss Your App"
      />
    </main>
  );
}
