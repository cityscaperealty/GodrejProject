import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import LeadPopup from "@/components/LeadPopup";

// ✅ UPDATED: IDs from your Google tag (AW-18009954819)
const GA_CONVERSION_ID = "AW-18009954819"; 
// ⚠️ IMPORTANT: Replace this label with the one found in "Tag Setup" > "Use Google Tag Manager"
const GA_CONVERSION_LABEL = "CxdnCJqU8pwcEI6c2rND"; 

export const metadata: Metadata = {
  title: "Godrej Pune Projects | Premium Luxury Residential Properties",
  description: "Explore the finest Godrej residential projects across Pune in Hinjewadi, Kharadi, Mamurdi, and more. Premium amenities and exclusive pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google for faster ad loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        
        {/* Global Site Tag */}
        <Script 
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_CONVERSION_ID}`} 
          strategy="afterInteractive" 
        />
        
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configuration for Enhanced Conversions
            gtag('config', '${GA_CONVERSION_ID}', {
              'allow_enhanced_conversions': true,
              'send_page_view': true
            });

            // Secure conversion helper triggered by your LeadForm
            window.reportGoogleConversion = function(email, phone) {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': '${GA_CONVERSION_ID}/${GA_CONVERSION_LABEL}',
                  'value': 1.0,
                  'currency': 'INR',
                  'user_data': {
                    'email_address': email,
                    'phone_number': phone
                  }
                });
                console.log("Godrej Conversion Tracked Successfully");
              }
            };
          `}
        </Script>
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        
        {/* Anti-Flagging Session Tracker */}
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