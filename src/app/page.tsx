import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import StickyShowcase from "@/components/StickyShowcase";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicePillars />
      <StickyShowcase />
      <CTA />
    </main>
  );
}
