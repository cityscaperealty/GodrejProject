import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  onTriggerForm: () => void;
}

export default function CtaSection({ onTriggerForm }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1440px]">
        <div className="green-gradient rounded-[2rem] md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 space-y-8 md:space-y-12">
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-headline font-bold text-white max-w-5xl mx-auto leading-tight">
              Ready to experience the <span className="text-accent">Godrej Lifestyle?</span>
            </h2>
            <p className="text-white/80 text-base md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Join hundreds of families who have chosen excellence. Schedule a complimentary site visit with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 pt-6 md:pt-8">
              <Button 
                onClick={onTriggerForm}
                className="gold-gradient text-white px-10 md:px-16 py-6 md:py-12 text-base md:text-2xl rounded-xl md:rounded-[2rem] font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl w-full sm:w-auto"
                suppressHydrationWarning
              >
                Book Free Site Visit
              </Button>
              <Button
                onClick={onTriggerForm}
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white hover:text-primary px-10 md:px-16 py-6 md:py-12 text-base md:text-2xl rounded-xl md:rounded-[2rem] font-bold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl"
                suppressHydrationWarning
              >
                Check Offers on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}