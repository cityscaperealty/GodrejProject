import { supabase } from "@/lib/supabaseClient";
import { openWhatsApp } from "@/lib/whatsapp";

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

// Add a type definition for the global helper we added in layout.tsx
declare global {
  interface Window {
    reportGoogleConversion?: (email: string, phone: string) => void;
  }
}

export const submitLead = async (formData: LeadData, type: 'email' | 'whatsapp') => {
  const WEB3FORMS_KEY = "1a612fd4-40a6-4643-858e-eca71e63150e";
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx5scvOCUfePnM8wbgANrJQU3u1OtMrsVnw0JgPi0bR9gRcyJiSM422QKMpFTbdB3ri/exec";

  try {
    const isBrowser = typeof window !== 'undefined';
    const ua = isBrowser ? navigator.userAgent : '';
    const urlParams = new URLSearchParams(isBrowser ? window.location.search : '');

    // 1. Session & Precise Time Tracking
    let timeOnPage = 0;
    let sessionId = "unknown";
    
    if (isBrowser) {
      if (!sessionStorage.getItem('session_id')) {
        sessionStorage.setItem('session_id', `sess_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`);
      }
      sessionId = sessionStorage.getItem('session_id') || "unknown";

      const arrival = sessionStorage.getItem('arrival_time');
      if (arrival) {
        timeOnPage = Math.floor((Date.now() - parseInt(arrival)) / 1000);
      } else {
        timeOnPage = 1; 
        sessionStorage.setItem('arrival_time', Date.now().toString());
      }
    }

    // 2. Technical Data (IP & Location)
    let techData = {};
    try {
      const ipRes = await fetch("https://ipapi.co/json/");
      const ipJson = await ipRes.json();
      techData = {
        ip_address: ipJson.ip,
        city: ipJson.city,
        region: ipJson.region,
        country: ipJson.country_name,
        isp: ipJson.org,
      };
    } catch (e) {
      console.error("Technical data fetch failed", e);
    }

    // 3. Deep Device & Browser Intelligence
    const getDeviceIntel = () => {
      if (!isBrowser) return { os: 'unknown', brand: 'unknown', browser: 'unknown' };
      
      let os = "Other";
      if (ua.includes("Win")) os = "Windows";
      else if (ua.includes("Android")) os = "Android";
      else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";
      else if (ua.includes("Mac")) os = "MacOS";

      let brand = "PC/Generic";
      if (ua.includes("iPhone")) brand = "Apple iPhone";
      else if (ua.includes("iPad")) brand = "Apple iPad";
      else if (ua.includes("Samsung") || ua.includes("SM-")) brand = "Samsung";
      else if (ua.includes("Pixel")) brand = "Google Pixel";

      let browser = "Other";
      if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
      else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
      else if (ua.includes("Edg")) browser = "Edge";
      else if (ua.includes("Firefox")) browser = "Firefox";

      return { os, brand, browser };
    };

    const intel = getDeviceIntel();

    // 4. Marketing Attribution Payload
    const attribution = {
      utm_source: urlParams.get('utm_source') || 'direct',
      utm_medium: urlParams.get('utm_medium') || 'none',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
      utm_content: urlParams.get('utm_content') || 'none',
      referrer_url: typeof document !== 'undefined' ? document.referrer : 'direct',
      page_url: isBrowser ? window.location.href : '',
      device_type: isBrowser && window.innerWidth < 768 ? 'mobile' : 'desktop',
      browser_name: intel.browser,
      os_name: intel.os,
      device_brand: intel.brand,
      time_on_page_seconds: timeOnPage,
      session_id: sessionId,
    };

    const fullSupabaseData = {
      ...formData,
      ...techData,
      ...attribution,
      project_name: "Godrej Pune Projects",
      is_whatsapp_lead: type === 'whatsapp',
      form_type: 'popup_lead',
      interested_config: isBrowser && window.location.href.includes('3bhk') ? '3BHK' : 
                         window.location.href.includes('2bhk') ? '2BHK' : null,
    };

    // 5. Parallel Submissions
    const results = await Promise.allSettled([
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead: ${formData.name}`,
          ...formData,
        }),
      }),
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }),
      (async () => {
        const { error } = await supabase.from('leads').insert([fullSupabaseData]);
        if (error) throw error;
        return true;
      })(),
    ]);

    // 6. Final Success Handlers (WhatsApp + Google Ads)
    const isSuccess = results.some(r => r.status === 'fulfilled');

    if (isSuccess) {
      // Trigger Google Ads Conversion if on browser
      if (isBrowser && window.reportGoogleConversion) {
        window.reportGoogleConversion(formData.email, formData.phone);
      }

      if (type === 'whatsapp') {
        openWhatsApp('lead', undefined, formData);
      }
    }

    return { success: isSuccess };

  } catch (error) {
    console.error("Lead Submission Error:", error);
    return { success: false, error };
  }
};