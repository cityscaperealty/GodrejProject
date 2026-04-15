import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedBHK: string;
  setSelectedBHK: (val: string) => void;
  onTriggerForm: () => void;
}

export default function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedBHK, 
  setSelectedBHK, 
  onTriggerForm 
}: SearchFiltersProps) {
  
  const popularLocations = ['Hinjewadi', 'Kharadi', 'Mamurdi', 'Pimpri', 'Mundhwa', 'Mahalunge', 'Manjari'];

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 lg:px-12 -mt-10 md:-mt-14 relative z-20 max-w-[1440px]">
      <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10 items-end">
          <div className="lg:col-span-2 space-y-4">
            <label className="text-xs font-bold text-primary uppercase tracking-widest flex items-center">
              <Search className="h-4 w-4 mr-2 text-accent" /> Search Projects
            </label>
            <div className="relative group">
              <Input 
                placeholder="Search project or location in Pune..."
                className="h-14 md:h-16 rounded-xl md:rounded-2xl border-muted bg-muted/20 focus:bg-white transition-all text-sm md:text-base pl-6 pr-24"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                suppressHydrationWarning
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="p-2 hover:bg-muted rounded-full transition-colors group/clear"
                    suppressHydrationWarning
                  >
                    <X className="h-4 w-4 text-muted-foreground group-hover/clear:text-destructive transition-colors" />
                  </button>
                )}
                <button
                  onClick={scrollToProjects}
                  className="p-2 bg-primary text-white rounded-lg md:rounded-xl hover:bg-primary/90 transition-all shadow-md active:scale-95 inline-flex items-center justify-center"
                  suppressHydrationWarning
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-primary uppercase tracking-widest flex items-center">
              <SlidersHorizontal className="h-4 w-4 mr-2 text-accent" /> BHK Config
            </label>
            <div className="relative">
              <select 
                className="w-full h-14 md:h-16 rounded-xl md:rounded-2xl border border-muted bg-muted/20 px-6 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                value={selectedBHK}
                onChange={(e) => setSelectedBHK(e.target.value)}
                suppressHydrationWarning
              >
                <option value="All">All Configurations</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <SlidersHorizontal className="h-4 w-4 text-primary/40" />
              </div>
            </div>
          </div>

          <Button 
            onClick={onTriggerForm}
            className="h-14 md:h-16 rounded-xl md:rounded-2xl gold-gradient text-white font-bold text-base md:text-lg hover:opacity-95 hover:scale-[1.01] transition-all shadow-xl active:scale-95"
            suppressHydrationWarning
          >
            Chat with Sales Expert
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-muted/50">
          <span className="text-[10px] font-bold text-muted-foreground uppercase py-2 mr-2 md:mr-4 flex items-center tracking-widest opacity-60">Popular:</span>
          {popularLocations.map(loc => (
            <button 
              key={loc}
              onClick={() => setSearchQuery(loc)}
              className="text-[9px] md:text-xs bg-muted/30 hover:bg-primary hover:text-white px-4 md:px-6 py-2 rounded-full transition-all text-primary font-bold border border-transparent hover:border-primary shadow-sm"
              suppressHydrationWarning
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}