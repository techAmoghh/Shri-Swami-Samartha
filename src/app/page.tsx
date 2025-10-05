"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import components with dynamic imports for better performance
const Header = dynamic(() => import('./components/Header/Header'));
const Hero = dynamic(() => import('./components/Hero/Hero'));
const Features = dynamic(() => import('./components/Features/Features'));
const Services = dynamic(() => import('./components/Services/Services'));
const Doctors = dynamic(() => import('./components/Doctors/Doctors'));
const Gallery = dynamic(() => import('./components/Gallery/Gallery'));
const Blog = dynamic(() => import('./components/Blog/Blog'));
const Contact = dynamic(() => import('./components/Contact/Contact'));
const Footer = dynamic(() => import('./components/Footer/Footer'));

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Services Section */}
        <Services />

        {/* Doctors Section */}
        <Doctors />

        {/* Gallery Section */}
        <Gallery />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
