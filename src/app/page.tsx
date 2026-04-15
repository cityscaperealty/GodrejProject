"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileBottomBar from '@/components/MobileBottomBar';
import projectsData from '@/app/lib/projects.json';

// Import from your new Homepage folder
import HeroSection from '@/components/HomePage/HeroSection';
import SearchFilters from '@/components/HomePage/SearchFilters';
import TrustBadges from '@/components/HomePage/TrustBadges';
import ProjectsSection from '@/components/HomePage/ProjectsSection';
import CtaSection from '@/components/HomePage/CtaSection';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBHK, setSelectedBHK] = useState("All");

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBHK = selectedBHK === "All" || project.bhk.includes(selectedBHK);
    return matchesSearch && matchesBHK;
  });

  const triggerForm = () => {
    window.dispatchEvent(new CustomEvent('trigger-lead-popup'));
  };

  const handleViewAllProjects = () => {
    setSearchQuery("");
    setSelectedBHK("All");
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Header />
      <FloatingWhatsApp />
      <MobileBottomBar />

      <main className="flex-grow">
        <HeroSection onTriggerForm={triggerForm} />
        
        <SearchFilters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedBHK={selectedBHK}
          setSelectedBHK={setSelectedBHK}
          onTriggerForm={triggerForm}
        />

        <TrustBadges />

        <ProjectsSection 
          projects={filteredProjects}
          onViewAll={handleViewAllProjects}
          onClearFilters={() => { setSearchQuery(""); setSelectedBHK("All"); }}
        />

        <CtaSection onTriggerForm={triggerForm} />
      </main>

      <Footer />
    </div>
  );
}