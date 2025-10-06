import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="mb-4">
          Please read these Terms of Service carefully before using our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Use of Our Website</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Medical Disclaimer</h2>
        <p className="mb-4">
          The information provided on this website is for informational purposes only and is not intended as medical advice.
          Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, and images, is the property of our clinic and is protected by copyright laws.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us.
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
