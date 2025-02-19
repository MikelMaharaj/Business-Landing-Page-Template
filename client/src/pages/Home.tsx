
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductShowcase from "@/components/home/ProductShowcase";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import { useRef } from "react";

export default function Home() {
  const resourcesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen">
      <Header onNavigate={(section: string) => {
        switch(section) {
          case 'resources': scrollToSection(resourcesRef); break;
          case 'pricing': scrollToSection(pricingRef); break;
          case 'blog': scrollToSection(blogRef); break;
        }
      }} />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <Features />
        </div>
        <div className="snap-start">
          <ProductShowcase />
        </div>
        <div ref={resourcesRef} className="snap-start">
          <Resources />
        </div>
        <div ref={pricingRef} className="snap-start">
          <Pricing />
        </div>
        <div ref={blogRef} className="snap-start">
          <Blog />
        </div>
      </main>
    </div>
  );
}
