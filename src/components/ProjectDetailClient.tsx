
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileBottomBar from '@/components/MobileBottomBar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, IndianRupee, Home, CalendarDays, FileDown, CheckCircle2, MessageSquare, Maximize, Video, Lock, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

interface ProjectDetailClientProps {
  project: any;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  const projectImages = project.images || [project.image];

  return (
    <div className="min-h-screen flex flex-col bg-background" suppressHydrationWarning>
      <Header />
      <FloatingWhatsApp />
      <MobileBottomBar />

      <main className="flex-grow pt-8 md:pt-12 pb-24 md:pb-32" suppressHydrationWarning>
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1440px]">
          <div className="flex items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8 md:mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2 md:mx-3 opacity-30">/</span>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <span className="mx-2 md:mx-3 opacity-30">/</span>
            <span className="text-primary">{project.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-8 space-y-16 md:space-y-24">
              <section className="space-y-8 md:space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                  <div className="space-y-3">
                    <Badge className="green-gradient text-white px-4 py-1.5 rounded-lg text-[10px] md:text-xs font-bold shadow-lg mb-2 uppercase tracking-widest" suppressHydrationWarning>
                      {project.status}
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary leading-tight">{project.name}</h1>
                    <p className="flex items-center text-muted-foreground text-base md:text-lg font-medium">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 text-accent" />
                      {project.location}, Pune
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-5 md:p-6 rounded-3xl border border-border/40 shadow-sm inline-block md:block">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mb-1">Starting Investment</p>
                    <p className="text-2xl md:text-4xl font-headline font-bold text-primary flex items-center">
                      <IndianRupee className="h-6 w-6 md:h-8 md:w-8 mr-1 text-accent" />
                      {project.price}
                    </p>
                  </div>
                </div>

                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-muted">
                  <Carousel setApi={setApi} opts={{ loop: true }} className="w-full group">
                    <CarouselContent>
                      {projectImages.map((img: string, index: number) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
                            <Image
                              src={img}
                              alt={`${project.name} - Image ${index + 1}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 80vw"
                              className="object-cover"
                              data-ai-hint="luxury property exterior interior"
                              suppressHydrationWarning
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="left-4 md:left-6 h-10 w-10 md:h-12 md:w-12 bg-white/50 backdrop-blur-md border-none text-primary transition-all duration-300 opacity-100 hover:scale-110 active:scale-95 hidden md:flex"
                      suppressHydrationWarning
                    />
                    <CarouselNext
                      className="right-4 md:right-6 h-10 w-10 md:h-12 md:w-12 bg-white/50 backdrop-blur-md border-none text-primary transition-all duration-300 opacity-100 hover:scale-110 active:scale-95 hidden md:flex"
                      suppressHydrationWarning
                    />
                  </Carousel>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: Home, label: 'BHK Config', value: project.bhk },
                  { icon: Maximize, label: 'Carpet Area', value: project.sqft || 'On Request' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/40 text-center space-y-2 md:space-y-3 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                    </div>
                    <p className="text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
                    <p className="text-sm md:text-base font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full bg-muted/30 h-14 md:h-16 p-1.5 md:p-2 rounded-xl md:rounded-2xl mb-8 md:mb-12" suppressHydrationWarning>
                  <TabsTrigger value="overview" className="flex-1 h-full rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg" suppressHydrationWarning>Overview</TabsTrigger>
                  <TabsTrigger value="pricing" className="flex-1 h-full rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg" suppressHydrationWarning>Configurations</TabsTrigger>
                  <TabsTrigger value="amenities" className="flex-1 h-full rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg" suppressHydrationWarning>Amenities</TabsTrigger>
                  <TabsTrigger value="location" className="flex-1 h-full rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg" suppressHydrationWarning>Location</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8 md:space-y-10">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">About {project.name}</h3>
                    <p className="text-muted-foreground leading-[1.8] text-base md:text-lg font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {project.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl border border-border/40 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent shrink-0" />
                        <span className="text-primary font-bold text-sm md:text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-8 md:space-y-10">
                  <div className="bg-white rounded-[2rem] border border-border/40 overflow-hidden shadow-sm">
                    <div className="green-gradient p-6 text-white">
                      <h4 className="font-headline font-bold text-xl">Pricing & Configuration</h4>
                      <p className="text-white/70 text-xs">Detailed BHK typologies and carpet area breakdown.</p>
                    </div>
                    <div className="p-2 md:p-6 overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent border-primary/10">
                            <TableHead className="font-bold text-primary uppercase text-[10px] tracking-widest">Typology</TableHead>
                            <TableHead className="font-bold text-primary uppercase text-[10px] tracking-widest">Carpet Area</TableHead>
                            <TableHead className="font-bold text-primary uppercase text-[10px] tracking-widest text-right">Starting Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {project.typologies?.map((typo: any, idx: number) => (
                            <TableRow key={idx} className="border-primary/5 hover:bg-muted/30">
                              <TableCell className="font-bold text-primary">{typo.type}</TableCell>
                              <TableCell className="text-muted-foreground font-medium">{typo.area}</TableCell>
                              <TableCell className="text-right font-bold text-primary">{typo.price}</TableCell>
                            </TableRow>
                          )) || (
                              <TableRow>
                                <TableCell colSpan={3} className="text-center py-10 text-muted-foreground italic">
                                  Detailed pricing available on request.
                                </TableCell>
                              </TableRow>
                            )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => openWhatsApp('price', project.name)} className="flex-1 green-gradient h-14 rounded-xl font-bold" suppressHydrationWarning>
                      Request Complete Cost Sheet
                    </Button>
                    <Button onClick={() => openWhatsApp('brochure', project.name)} variant="outline" className="flex-1 border-primary text-primary h-14 rounded-xl font-bold" suppressHydrationWarning>
                      Download Detailed Plans
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pt-6">
                  {project.amenities.map((amenity: string, idx: number) => (
                    <div key={idx} className="group relative">
                      <div className="absolute inset-0 bg-accent/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-black/5 flex flex-col items-center text-center space-y-5 md:space-y-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shrink-0">
                          <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-accent group-hover:text-white transition-colors duration-500" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.12em] leading-relaxed">
                          {amenity}
                        </span>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="location" className="space-y-8 md:space-y-10">
                  <div className="aspect-[16/9] md:aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src={project.iframeLocation || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04712154425!2d73.7805139!3d18.5247613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f357!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707914321654!5m2!1sen!2sin"}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      suppressHydrationWarning
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <section className="space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">Request Access</h3>
                    <p className="text-muted-foreground font-light">Get a closer look at your future home with specialized assets.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group shadow-xl">
                    <Image 
                      src="https://picsum.photos/seed/virtualtour/800/600" 
                      alt="Virtual Tour Blur" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover blur-[12px] scale-110 group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint="luxury interior"
                      suppressHydrationWarning
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[4px] flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 border border-white/30 animate-pulse">
                        <Video className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <h4 className="text-white text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">360° Virtual Site Tour</h4>
                      <p className="text-white/80 text-xs sm:text-sm mb-6 sm:mb-8 max-w-xs leading-relaxed">
                        Unlock a complete 3D walk-through of the sample flat and site development progress.
                      </p>
                      <Button 
                        onClick={() => openWhatsApp('tour', project.name)}
                        className="gold-gradient text-white px-8 sm:px-10 py-5 sm:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all text-xs sm:text-base"
                        suppressHydrationWarning
                      >
                        Request Access
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group shadow-xl">
                    <Image 
                      src="https://picsum.photos/seed/floorplan/800/600" 
                      alt="Floor Plan Blur" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover blur-[18px] scale-110 group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint="architectural drawing"
                      suppressHydrationWarning
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[6px] flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 border border-white/30">
                        <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <h4 className="text-white text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">Plan Layouts</h4>
                      <p className="text-white/80 text-xs sm:text-sm mb-6 sm:mb-8 max-w-xs leading-relaxed">
                         Get Master and Floor Plan layout with precise dimensions for all BHK configurations.
                      </p>
                      <Button 
                        onClick={() => openWhatsApp('layout', project.name)}
                        className="gold-gradient text-white px-8 sm:px-10 py-5 sm:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all text-xs sm:text-base"
                        suppressHydrationWarning
                      >
                        Request Access
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pt-16 md:pt-24 border-t border-border/40">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-border/40 shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-3 flex flex-col items-center justify-center space-y-4">
                      <div className="bg-white p-4 rounded-3xl shadow-lg border border-border/50 hover:scale-105 transition-transform duration-500">
                        <Image
                          src={project.reraQr || "https://picsum.photos/seed/rera/300/300"}
                          alt="RERA QR Code"
                          width={200}
                          height={200}
                          className="w-[200px] h-auto rounded-xl object-contain mx-auto"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">Scan for MahaRERA Details</span>
                    </div>
                    <div className="md:col-span-9 space-y-6 md:space-y-8 text-center md:text-left">
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex flex-col md:flex-row items-center gap-3 text-accent">
                          <ShieldCheck className="h-6 w-6 md:h-8 md:w-8" />
                          <h3 className="text-2xl md:text-4xl font-headline font-bold text-primary">RERA Compliance</h3>
                        </div>
                        <div className="h-1.5 w-24 gold-gradient rounded-full mx-auto md:mx-0" />
                      </div>
                      <div className="p-6 md:p-8 bg-primary/5 rounded-2xl md:rounded-3xl border border-primary/10 hover:bg-primary/10 transition-colors">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-2">Project RERA Number</p>
                        <p className="text-primary font-bold text-base md:text-xl font-headline">{project.projectReraNumber}</p>
                      </div>
                      <div className="p-6 md:p-8 bg-muted/30 rounded-2xl md:rounded-3xl border border-border/40">
                        <p className="text-xs md:text-base text-muted-foreground leading-relaxed italic font-light">
                          {project.reraInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-32 space-y-6 md:space-y-8">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-border/40">
                  <div className="green-gradient p-8 md:p-10 text-center space-y-2 md:space-y-3">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">Project Interest</h3>
                    <p className="text-white/70 text-xs font-light">Download brochure & price details instantly on WhatsApp.</p>
                  </div>
                  <div className="p-8 md:p-10 space-y-4 md:space-y-5">
                    <Button
                      onClick={() => openWhatsApp('price', project.name)}
                      className="w-full green-gradient text-white h-14 md:h-16 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
                      suppressHydrationWarning
                    >
                      <IndianRupee className="mr-3 h-4 w-4 md:h-5 md:w-5" />
                      Get Price Breakup
                    </Button>

                    <Button
                      onClick={() => openWhatsApp('brochure', project.name)}
                      variant="outline"
                      className="w-full border-primary/30 text-primary h-14 md:h-16 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-primary/5 hover:text-primary hover:scale-[1.02] active:scale-95 transition-all duration-300 hover:shadow-md"
                      suppressHydrationWarning
                    >
                      <FileDown className="mr-3 h-4 w-4 md:h-5 md:w-5" />
                      Download Brochure
                    </Button>

                    <Button
                      onClick={() => openWhatsApp('visit', project.name)}
                      variant="outline"
                      className="w-full border-accent/30 text-accent h-14 md:h-16 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-accent/5 hover:text-accent hover:scale-[1.02] active:scale-95 transition-all duration-300 hover:shadow-md"
                      suppressHydrationWarning
                    >
                      <CalendarDays className="mr-3 h-4 w-4 md:h-5 md:w-5" />
                      Book Free Site Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
