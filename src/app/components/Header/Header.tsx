import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className=" flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
         <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-2 rounded-full" />
          <span>Shri Swami Samartha</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
          <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition">Our Doctors</a>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition whitespace-nowrap"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
