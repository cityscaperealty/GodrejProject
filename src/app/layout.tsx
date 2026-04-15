import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import LeadPopup from "@/components/LeadPopup";

export const metadata: Metadata = {
  title: "Godrej Pune Projects | Premium Luxury Residential Properties",
  description: "Explore the finest Godrej residential projects across Pune in Hinjewadi, Kharadi, Mamurdi, Pimpri, Manjari, Mahalunge and more. Premium amenities, exclusive pricing, and trusted development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
        
        {/* Google Ads Gtag Configuration */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Config with Enhanced Conversions enabled
            gtag('config', 'AW-CONVERSION_ID', {
              'allow_enhanced_conversions': true
            });

            // Global Helper for triggering conversions from our submitLead function
            window.reportGoogleConversion = function(email, phone) {
              gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                'user_data': {
                  'email': email,
                  'phone_number': phone
                }
              });
            };
          `}
        </Script>
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        
        {/* Arrival Timer Script */}
        <Script id="page-timer" strategy="afterInteractive">
          {`
            if (!sessionStorage.getItem('arrival_time')) {
              sessionStorage.setItem('arrival_time', Date.now().toString());
            }
          `}
        </Script>

        <LeadPopup />
        <Toaster />
      </body>
    </html>
  );
}