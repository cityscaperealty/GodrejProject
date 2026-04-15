"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Added for redirect
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";
import LeadPopupHeader from "./LeadPopupHeader";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener("trigger-lead-popup", handleTrigger);
    return () => window.removeEventListener("trigger-lead-popup", handleTrigger);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenLeadPopup", "true");
  };

  // New handler to close popup AND redirect
  const handleSuccess = () => {
    handleClose();
    router.push("/thank-you"); // Redirects to the thank you page
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full h-full max-h-screen sm:h-auto sm:max-h-[90vh] sm:w-[95%] sm:max-w-[450px] rounded-none sm:rounded-2xl border-none p-0 overflow-hidden bg-background shadow-2xl flex flex-col">
        
        <LeadPopupHeader />

        <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-10">
          {/* Changed handleClose to handleSuccess */}
          <LeadForm onSuccess={handleSuccess} />

          <p className="text-[9px] md:text-[10px] text-center mt-6 text-muted-foreground uppercase tracking-widest opacity-60">
            By submitting, you agree to receive updates via Email and WhatsApp.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}