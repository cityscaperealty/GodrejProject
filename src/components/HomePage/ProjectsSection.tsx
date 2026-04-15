import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface ProjectsSectionProps {
  projects: any[];
  onViewAll: () => void;
  onClearFilters: () => void;
}

export default function ProjectsSection({ projects, onViewAll, onClearFilters }: ProjectsSectionProps) {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-muted/10" id="projects">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
          <div className="space-y-4 md:space-y-5">
            {/* Integrated "Godrej Project Hinjewadi" into the heading naturally */}
            <h2 className="text-3xl md:text-6xl font-headline font-bold text-primary leading-tight">
              Featured <span className="text-accent italic">Godrej Project Hinjewadi</span>
            </h2>
            <div className="h-1.5 md:h-2 w-24 md:w-32 gold-gradient rounded-full" />
            
            {/* Smoothly merged 2BHK, 3BHK, 4BHK, and Society keywords into the prose */}
            <p className="text-muted-foreground text-base md:text-xl max-w-2xl font-light leading-relaxed">
              Explore a curated selection of premium 2BHK flats in Hinjewadi and spacious 3BHK flats in Hinjewadi. 
              From expansive 4BHK apartments in Hinjewadi to the elite lifestyle offered at this 
              exclusive Godrej Society Hinjewadi, find your perfect home in Pune's most sought-after corridor.
            </p>
          </div>
          <Button
            onClick={onViewAll}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 md:px-10 rounded-full h-14 md:h-16 font-bold transition-all text-sm md:text-base shadow-sm group cursor-pointer"
            suppressHydrationWarning
          >
            View All Projects
            <Search className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 md:py-40 bg-white rounded-2xl md:rounded-[3rem] border-2 border-dashed border-muted shadow-sm">
            <Search className="h-12 w-12 md:h-20 md:w-20 text-muted-foreground mx-auto mb-6 md:mb-8 opacity-20" />
            <h3 className="text-xl md:text-3xl font-bold text-primary">No matching projects found</h3>
            <p className="text-sm md:text-lg text-muted-foreground mt-3 md:mt-4 max-w-md mx-auto">
              Try refining your search terms to see more luxury residences in this Godrej Project Hinjewadi.
            </p>
            <Button 
              variant="link" 
              className="text-primary mt-6 md:mt-8 underline font-bold text-base md:text-lg hover:text-accent transition-colors cursor-pointer"
              onClick={onClearFilters}
              suppressHydrationWarning
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}