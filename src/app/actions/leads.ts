"use server";

import { headers } from "next/headers";
import { createClient } from '@supabase/supabase-js';

// Use SERVICE_ROLE_KEY here for secure server-side bypass if needed
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function submitLeadToServer(fullData: any) {
  try {
    const headerList = await headers();
    
    // Capture Technical data securely on the server
    const ip = headerList.get("x-forwarded-for")?.split(',')[0] || 
               headerList.get("x-real-ip") || 
               "0.0.0.0";
    const ua = headerList.get("user-agent") || "unknown";

    const finalPayload = {
      ...fullData,
      ip_address: ip,
      user_agent: ua,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('leads').insert([finalPayload]);
    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Server Submission Error:", error);
    return { success: false };
  }
}