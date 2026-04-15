import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

interface HeroSectionProps {
  onTriggerForm: () => void;
}

export default function HeroSection({ onTriggerForm }: HeroSectionProps) {
  // Direct WhatsApp trigger with hardcoded township name
  const handleWhatsAppAction = (e: React.MouseEvent, type: 'price' | 'brochure' | 'visit') => {
    e.stopPropagation();
    openWhatsApp(type, "Godrej Township Hinjewadi");
  };

  return (
    <section className="relative min-h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay muted loop playsInline
          className="w-full h-full object-cover brightness-[0.4]"
          poster="https://delf2iyv2crlj.cloudfront.net/Images/e6ff9d0e-7768-47ff-8bfa-e39ab64cfecb.webp"
        >
          <source src="https://res.cloudinary.com/dti8eerce/video/upload/v1775646418/godrej-properties-video1_m2zkkr.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-[1440px]">
        <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6 pt-10 pb-16 md:pt-20 md:pb-28">
          
          {/* Badge: New Launch Keywords */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1 md:px-5 md:py-2 backdrop-blur-sm">
            <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-accent" />
            <span className="text-white text-[8px] md:text-xs font-bold uppercase tracking-[0.15em]">
              New Launch Godrej Hinjewadi Pune
            </span>
          </div>

          {/* H1: Primary Keywords */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-tight px-2">
            Luxury living at <br className="hidden md:block" />
            <span className="text-accent italic">Godrej Properties Hinjewadi</span>
          </h1>

          <div className="space-y-2 md:space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-[10px] md:text-sm font-bold text-accent uppercase tracking-widest opacity-90">
                Premium 2, 3 & 4 BHK Flats in Hinjewadi
              </p>
              <p className="text-[9px] md:text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                Godrej Township Hinjewadi • Exclusive Pre-launch Offers
              </p>
            </div>

            <p className="text-xs md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-light leading-snug md:leading-relaxed px-4 md:px-0">
              Experience the best of Godrej Pune with unmatched connectivity. 
              Secure your home in the most awaited Godrej Hinjewadi project today.
            </p>
          </div>

          {/* CTA Buttons: Corrected Handlers */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-6 px-8 md:px-0">
            <Button 
              onClick={(e) => handleWhatsAppAction(e, 'brochure')}
              variant="outline"
              className="border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:text-white px-6 md:px-10 py-4 md:py-7 text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
              suppressHydrationWarning
            >
              Get Brochure
            </Button>
            <Button 
              onClick={onTriggerForm}
              className="green-gradient text-white px-6 md:px-10 py-4 md:py-7 text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl cursor-pointer"
              suppressHydrationWarning
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}