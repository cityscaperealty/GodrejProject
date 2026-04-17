import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 font-sans text-slate-700 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">Privacy Policy</h1>
      <p className="mb-8 text-slate-500 italic">Last Updated: April 2026</p>
      
      <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm text-blue-800">
        This website is operated by <strong>Cityscape Realty</strong>, an Authorized Channel Partner for Godrej Properties. This Privacy Policy explains how we collect, use, and protect your personal data when you visit <strong>www.godrejpuneproject.com</strong>.
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express interest in obtaining information about our projects. This includes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Personal Identifiers:</strong> Name, Phone Number, and Email Address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and device information (collected automatically via cookies for security and analytics).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">2. How We Use Your Information</h2>
          <p>The data collected is used solely by <strong>Cityscape Realty</strong> to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Provide requested information regarding Godrej Pune Projects.</li>
            <li>Schedule site visits and share digital brochures.</li>
            <li>Send updates on pricing and offers via SMS, Email, Call, or WhatsApp.</li>
            <li>Verify leads to maintain the integrity of our marketing systems.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">3. Cookies and Tracking Technologies</h2>
          <p>We use cookies to enhance your experience and analyze website traffic. We also use <strong>Google Ads Conversion Tracking</strong> and <strong>Google Analytics</strong> to understand how users interact with our site. You can choose to disable cookies through your individual browser settings.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">4. Data Sharing & Third Parties</h2>
          <p>We do not sell or rent your personal data to third-party marketers. Your information is only shared with <strong>Godrej Properties</strong> (the developer) for the purpose of project inquiries and as required by <strong>MahaRERA</strong> regulations. We may also disclose info if required by law to comply with legal processes.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">5. Data Retention & User Rights</h2>
          <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy. You have the right to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request a "Do Not Call" status if you no longer wish to be contacted.</li>
            <li>Request the deletion of your personal information from our database.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-slate-800 border-b pb-2">6. Compliance with RERA</h2>
          <p>As a RERA-certified agent (MahaRERA: A52100029799), we adhere to all guidelines regarding fair marketing and data privacy as mandated by the Real Estate Regulatory Authority of Maharashtra.</p>
        </div>
      </section>
      
      <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-2">Contact Our Privacy Officer</h3>
        <p className="mb-1"><strong>Entity:</strong> Cityscape Realty</p>
        <p className="mb-1"><strong>Email:</strong> cityscaperealty27@gmail.com</p>
        <p className="mb-1"><strong>Address:</strong> Pune, Maharashtra, India</p>
        <p className="mt-4 text-xs text-slate-500">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </main>
  );
}