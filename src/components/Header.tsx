"use client";

import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from 'lucide-react';

export default function Header() {
  const triggerForm = () => {
    window.dispatchEvent(new CustomEvent('trigger-lead-popup'));
  };

  return (
    <header className="sticky top-0 z-40 w-full glass shadow-sm" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <Image
            src="/images/godrej-properties.png"
            alt="Godrej Properties Logo"
            width={200}
            height={80}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-bold text-primary uppercase tracking-widest">
          <Link href="/" className="hover:text-accent transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all">Home</Link>
          <Link href="/#projects" className="hover:text-accent transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all">Projects</Link>
          <Link href="/#contact" className="hover:text-accent transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all">Contact</Link>
        </nav>

        <div className="flex items-center space-x-3 md:space-x-6">
          <a
            href="tel:919156421125"
            className="hidden lg:flex items-center text-primary font-bold transition-all duration-300 text-base hover:scale-105 active:scale-95"
            suppressHydrationWarning
          >
            <Phone className="mr-2 h-5 w-5 text-accent" />
            +91 9156421125
          </a>
          <Button 
            onClick={triggerForm}
            className="green-gradient hover:opacity-90 rounded-full px-4 md:px-8 h-10 md:h-12 text-xs md:text-sm font-bold shadow-md active:scale-95 hover:scale-105 transition-all duration-300"
            suppressHydrationWarning
          >
            <MessageSquare className="mr-1.5 md:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Chat Now</span>
            <span className="sm:hidden">Enquire Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
