
"use client";

import { Phone, MessageSquare, IndianRupee } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 h-16 flex items-center px-2 py-1">
      <a 
        href="tel:9156421125" 
        className="flex-1 flex flex-col items-center justify-center gap-1 text-primary"
      >
        <Phone className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase">Call Now</span>
      </a>
      <div className="w-px h-8 bg-border" />
      <button 
        onClick={() => openWhatsApp('general')}
        className="flex-1 flex flex-col items-center justify-center gap-1 text-[#25D366]"
        suppressHydrationWarning
      >
        <MessageSquare className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase">WhatsApp</span>
      </button>
      <div className="w-px h-8 bg-border" />
      <button 
        onClick={() => openWhatsApp('general')}
        className="flex-[1.5] flex items-center justify-center gap-2 green-gradient text-white rounded-lg h-12 mx-2 px-2"
        suppressHydrationWarning
      >
        <IndianRupee className="h-4 w-4" />
        <span className="text-[11px] font-bold uppercase">Price Breakup</span>
      </button>
    </div>
  );
}
