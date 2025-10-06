import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="mb-4">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when you fill out a contact form or schedule an appointment.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties except as described in this Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          For more information about our privacy practices, please contact us at [Your Contact Information].
        </p>
      </div>
      
      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
