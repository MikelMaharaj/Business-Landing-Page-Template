import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            Prime<span className="text-primary">Customs</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => onNavigate('resources')}
            className="cursor-pointer transition-colors text-gray-300 hover:text-white"
          >
            Resources
          </button>
          <button
            onClick={() => onNavigate('pricing')}
            className="cursor-pointer transition-colors text-gray-300 hover:text-white"
          >
            Pricing
          </button>
          <button
            onClick={() => onNavigate('blog')}
            className="cursor-pointer transition-colors text-gray-300 hover:text-white"
          >
            Blog
          </button>
        </nav>

        <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
          Get Started
        </Button>
      </div>
    </motion.header>
  );
}