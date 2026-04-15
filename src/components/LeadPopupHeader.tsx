import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function LeadPopupHeader() {
  return (
    <>
      <div className="relative shrink-0">
        <div className="h-1.5 md:h-2 w-full gold-gradient" />
        <DialogClose className="absolute right-4 top-3 z-50 rounded-full bg-muted p-1.5 hover:bg-muted/80 transition-colors">
          <X className="h-4 w-4 text-foreground" />
        </DialogClose>
      </div>

      <DialogHeader className="mb-4 md:mb-6 text-center sm:text-left">
        <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-primary mb-2 leading-tight">
          Unlock <span className="text-accent italic"> Exclusive </span> Deals
        </DialogTitle>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
          Register to receive priority pricing, floor plans, and latest offers for Godrej projects in Pune.
        </p>
      </DialogHeader>
    </>
  );
}