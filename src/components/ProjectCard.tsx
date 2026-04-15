
"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, IndianRupee, FileDown, CalendarDays, ArrowRight, Maximize } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    name: string;
    location: string;
    price: string;
    bhk: string;
    sqft?: string;
    status: string;
    image: string;
    amenities: string[];
    highlights: string[];
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleWhatsAppAction = (e: React.MouseEvent, type: 'price' | 'brochure' | 'visit') => {
    e.stopPropagation();
    openWhatsApp(type, project.name);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-border/40 cursor-pointer hover:-translate-y-2"
      suppressHydrationWarning
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[2s] group-hover:scale-110"
          data-ai-hint="luxury apartment"
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-2">
          <Badge className="green-gradient border-none rounded-lg px-3 py-1 md:px-4 md:py-1.5 font-bold shadow-lg text-[9px] md:text-[11px] tracking-wider uppercase">
            {project.status}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white space-y-1">
          <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight group-hover:text-accent transition-colors">{project.name}</h3>
          <p className="flex items-center text-xs md:text-sm font-medium text-white/80">
            <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1.5 md:mr-2 text-accent" />
            {project.location}, Pune
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 pt-2">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors shrink-0">
              <Home className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">BHK</p>
              <p className="font-bold text-primary text-xs md:text-base truncate">{project.bhk}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors shrink-0">
              <Maximize className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">Area</p>
              <p className="font-bold text-primary text-xs md:text-base truncate">{project.sqft || 'On Request'}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 border-t border-muted/50 pt-4">
          <div className="flex flex-col">
            <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Starting Price</p>
            <p className="font-headline font-bold text-primary text-lg md:text-xl flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5 text-accent" />
              {project.price}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-3 mt-auto">
          <Button 
            onClick={(e) => handleWhatsAppAction(e, 'price')}
            className="w-full green-gradient hover:opacity-90 text-xs md:text-sm font-bold h-10 md:h-12 rounded-xl active:scale-95 transition-all shadow-md px-1 md:px-2"
            suppressHydrationWarning
          >
            <IndianRupee className="mr-1 h-3 md:h-3.5 w-3 md:w-3.5" />
            Price Breakup
          </Button>
          <Button 
            onClick={(e) => handleWhatsAppAction(e, 'brochure')}
            variant="outline"
            className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white text-xs md:text-sm font-bold h-10 md:h-12 rounded-xl transition-all px-1 md:px-2"
            suppressHydrationWarning
          >
            <FileDown className="mr-1 h-3 md:h-3.5 w-3 md:w-3.5" />
            Brochure
          </Button>
          <Button 
            onClick={(e) => handleWhatsAppAction(e, 'visit')}
            variant="outline"
            className="w-full border-accent/50 text-accent hover:bg-accent hover:text-white text-xs md:text-sm font-bold h-10 md:h-12 rounded-xl transition-all px-1 md:px-2"
            suppressHydrationWarning
          >
            <CalendarDays className="mr-1 h-3 md:h-3.5 w-3 md:w-3.5" />
            Site Visit
          </Button>
          <Button 
            variant="secondary"
            className="w-full bg-muted/50 text-primary hover:bg-primary hover:text-white text-xs md:text-sm font-bold h-10 md:h-12 rounded-xl transition-all group/btn flex items-center justify-center gap-1 md:gap-2 px-1 md:px-2"
            onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
            suppressHydrationWarning
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
}
