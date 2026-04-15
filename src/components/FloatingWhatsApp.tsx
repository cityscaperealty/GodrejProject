"use client";

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const triggerForm = () => {
    window.dispatchEvent(new CustomEvent('trigger-lead-popup'));
  };

  return (
    <div className="fixed bottom-24 right-4 md:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-border text-xs font-semibold text-primary animate-bounce pointer-events-auto">
        👋 Need help choosing the right property?
      </div>
      <button 
        onClick={triggerForm}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 pointer-events-auto"
        aria-label="Open Inquiry Form"
        suppressHydrationWarning
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
      </button>
    </div>
  );
}
