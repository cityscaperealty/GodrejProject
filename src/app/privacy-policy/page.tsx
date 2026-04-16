import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 font-sans text-slate-700">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
      <p className="mb-4">Last Updated: April 2026</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We collect information you provide directly to us through our lead forms, including your name, email address, and phone number.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>The data collected is used strictly to provide information regarding Godrej Pune Projects, schedule site visits, and share pricing details via Call, Email, or WhatsApp.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Data Security & IP Tracking</h2>
          <p>We implement industry-standard security measures to protect your data. We may collect your IP address and device information solely for security and lead verification purposes to prevent spam.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
        </div>
      </section>
      
      <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm">For any privacy-related queries, please contact our support team at your professional email.</p>
      </div>
    </main>
  );
}