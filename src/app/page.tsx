import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SectionReveal from "@/components/ui/SectionReveal";

// Dynamically import below-the-fold sections
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Team = dynamic(() => import("@/components/sections/Team"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      
      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Services />
      </SectionReveal>

      <SectionReveal>
        <HowItWorks />
      </SectionReveal>

      <SectionReveal>
        <WhyChooseUs />
      </SectionReveal>

      <SectionReveal>
        <Portfolio />
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      
      <SectionReveal>
        <Team />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>
    </main>
  );
}
