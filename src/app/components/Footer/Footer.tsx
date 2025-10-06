import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

type FooterLink = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: Array<{
    title: string;
    links: FooterLink[];
  }> = [
    {
      title: "For Patients",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "Blog", href: "#blog" },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "Contact Us", href: "#contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
      ]
    },
    {
      title: "Contact Us",
      links: [
        { 
          name: "Maharshi Nagar, Near Sant Namdev Highschool, Opp. Pujari Garden, Pune 411037",
          icon: <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />,
          href: "#"
        },
        { 
          name: "8983338450 / 8275576265",
          icon: <Phone className="w-4 h-4 flex-shrink-0 mt-1" />,
          href: "tel:8983338450"
        },
        { 
          name: "info@homeocare.com",
          icon: <Mail className="w-4 h-4 flex-shrink-0 mt-1" />,
          href: "mailto:info@homeocare.com"
        },
        { 
          name: "Mon - Sat: 6:00 PM - 10:00 PM",
          icon: <Clock className="w-4 h-4 flex-shrink-0 mt-1" />,
          href: "#"
        },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HomeoCare</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner in natural healing and holistic healthcare. We provide personalized homeopathic treatments for better health and wellness.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start"
                    >
                      {link.icon && <span className="mr-2">{link.icon}</span>}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HomeoCare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
