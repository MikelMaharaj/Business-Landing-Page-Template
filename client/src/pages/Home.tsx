
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
      <main className="h-screen overflow-y-auto scroll-smooth">
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <ProductShowcase />
        </div>
        <div ref={resourcesRef}>
          <Resources />
        </div>
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
      </main>
    </div>
  );
}
