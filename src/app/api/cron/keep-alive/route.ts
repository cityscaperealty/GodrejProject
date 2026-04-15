import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 1. Verify the request is coming from Vercel (Security)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // 2. Perform a simple 'SELECT' to wake up the DB
    const { data, error } = await supabase
      .from('leads')
      .select('id')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Supabase is awake!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Ping failed" }, { status: 500 });
  }
}