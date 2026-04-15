"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/submitLead";

export default function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const { toast } = useToast();

  const handleAction = async (type: 'email' | 'whatsapp') => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ 
        variant: "destructive", 
        title: "Missing Fields", 
        description: "Please fill all required fields." 
      });
      return;
    }

    setIsSubmitting(true);
    const { success } = await submitLead(formData, type);

    if (success) {
      toast({ title: "Enquiry Sent!", description: "We will contact you shortly." });
      onSuccess();
    } else {
      toast({ 
        variant: "destructive", 
        title: "Error", 
        description: "Something went wrong. Please try again." 
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Full Name*</Label>
        <Input 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          placeholder="Enter your name" 
          disabled={isSubmitting}
          className="h-12 rounded-xl"
        />
      </div>
      
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Phone Number*</Label>
        <Input 
          type="tel"
          value={formData.phone} 
          onChange={(e) => setFormData({...formData, phone: e.target.value})} 
          placeholder="Enter mobile number" 
          disabled={isSubmitting}
          className="h-12 rounded-xl"
        />
      </div>
      
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Email Address*</Label>
        <Input 
          type="email"
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          placeholder="Enter email address" 
          disabled={isSubmitting}
          className="h-12 rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <Button 
          onClick={() => handleAction('email')} 
          disabled={isSubmitting} 
          className="h-14 bg-primary text-white font-bold rounded-xl"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Mail className="mr-2 h-5 w-5" />}
          Submit Enquiry
        </Button>
        
        <Button 
          onClick={() => handleAction('whatsapp')} 
          disabled={isSubmitting} 
          className="h-14 green-gradient text-white font-bold rounded-xl"
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Get Price on WhatsApp
        </Button>
      </div>
    </div>
  );
}