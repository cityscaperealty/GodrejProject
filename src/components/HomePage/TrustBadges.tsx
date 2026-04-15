import { ShieldCheck, Trophy, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: "RERA Approved",
    description: "Certified transparency and secure investments for your peace of mind."
  },
  {
    icon: Trophy,
    title: "Godrej Properties",
    description: "A legacy of 126 years built on trust, innovation, and excellence."
  },
  {
    icon: Heart,
    title: "1000+ Families",
    description: "Join a thriving community of happy homeowners across Pune."
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-border/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group ${idx === 2 ? 'sm:col-span-2 lg:col-span-1 mx-auto sm:max-w-md lg:max-w-none' : ''}`}
            >
              <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-7 w-7 md:h-10 md:w-10 text-primary" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-headline font-bold text-primary mb-1 md:mb-2">{item.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}