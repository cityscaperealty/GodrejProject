import { openWhatsApp } from "@/lib/whatsapp";
import { submitLeadToServer } from "@/app/actions/leads"; 

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

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
    const urlParams = new URLSearchParams(isBrowser ? window.location.search : '');

    // 1. Marketing Attribution (High-Accuracy for Google Ads)
    let timeOnPage = 0;
    if (isBrowser) {
      const arrival = sessionStorage.getItem('arrival_time');
      if (arrival) {
        timeOnPage = Math.floor((Date.now() - parseInt(arrival)) / 1000);
      }
    }

    const attribution = {
      utm_source: urlParams.get('utm_source') || 'google',
      utm_medium: urlParams.get('utm_medium') || 'cpc',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
      utm_term: urlParams.get('utm_term') || 'none', // The actual Keyword
      utm_content: urlParams.get('utm_content') || 'none',
      gclid: urlParams.get('gclid') || '', // The critical Click ID for conversion
      referrer_url: isBrowser ? document.referrer : 'direct',
      page_url: isBrowser ? window.location.href : '',
      device_type: isBrowser && window.innerWidth < 768 ? 'mobile' : 'desktop',
      time_on_page_seconds: timeOnPage,
    };

    const payload = {
      ...formData,
      ...attribution,
      project_name: "Godrej Pune Projects",
      is_whatsapp_lead: type === 'whatsapp',
      form_type: 'popup_lead',
    };

    // 2. Parallel Submission (Supabase + Web3 + Sheets)
    const results = await Promise.allSettled([
      // Primary DB Submission (Server Action)
      submitLeadToServer(payload),
      // Email Notification
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Godrej Pune Lead: ${formData.name}`,
          ...formData,
        }),
      }),
      // Backup Google Sheet
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }),
    ]);

    // Check if at least one submission was successful
    const isSuccess = results.some(r => r.status === 'fulfilled');

    if (isSuccess) {
      // 3. Trigger Google Ads Enhanced Conversion
      // Fires only after lead is safely in your database
      if (isBrowser && window.reportGoogleConversion) {
        try {
          window.reportGoogleConversion(formData.email, formData.phone);
        } catch (err) {
          console.error("GTag Error:", err);
        }
      }

      // 4. Handle Post-Submission (WhatsApp/Success)
      if (type === 'whatsapp') {
        openWhatsApp('lead', undefined, formData);
      }
      
      return { success: true };
    }

    return { success: false };

  } catch (error) {
    console.error("Critical Submission Error:", error);
    return { success: false, error };
  }
};