"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-primary text-white pt-24 pb-12" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* LOGO + ABOUT */}
          <div className="space-y-8">
            <Image
              src="https://res.cloudinary.com/dti8eerce/image/upload/v1775682822/godrej_properties_logo_ijlr97.png"
              alt="Godrej Properties Logo"
              width={200}
              height={80}
              className="h-10 w-auto object-contain"
            />

            <p className="text-white/60 text-sm leading-relaxed font-light">
              Godrej Properties brings innovation, sustainability, and excellence to real estate with a 126-year legacy of trust. Explore the latest <strong>Pre-launch Godrej Hinjewadi</strong> opportunities.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center space-x-3">
              <Link
                href="https://www.instagram.com/cityscaperealtyofficial"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent transition-all"
              >
                <FaInstagram className="text-white/70 hover:text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent transition-all"
              >
                <FaFacebook className="text-white/70 hover:text-white" />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-accent uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-5 text-sm text-white/60">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#projects">Featured Projects</Link></li>
              <li><Link href="#">Godrej Hinjewadi Price List</Link></li>
              <li><Link href="#">Godrej Hinjewadi Offers</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* LOCATIONS & KEYWORDS */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-accent uppercase tracking-widest">
              Our Locations
            </h4>
            <ul className="space-y-5 text-sm text-white/60">
              <li>Hinjewadi Phase 1 & 3</li>
              <li>Kharadi IT Park</li>
              <li>Investment in Hinjewadi Pune</li>
              <li>Mahalunge Hills</li>
              <li>Mundhwa Riverside</li>
              <li>All Over Pune</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-8">
            <h4 className="font-bold text-lg mb-8 text-accent uppercase tracking-widest">
              Contact Us
            </h4>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent" />
              <p className="text-sm text-white/60">Pune, Maharashtra, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent" />
              <a href="tel:919156421125" className="text-white/60 hover:text-white">
                +91 9156421125
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-accent" />
              <a href="mailto:cityscaperealty27@gmail.com" className="text-white/60 hover:text-white">
                cityscaperealty27@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RERA SECTION */}
        <div className="border-t border-white/10 pt-12 flex justify-center">
          <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
            <Image
              src="/images/rera-qr.png"
              alt="RERA QR"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <div className="flex items-center gap-2 text-accent">
                <FaShieldAlt />
                <span className="text-xs font-bold uppercase">
                  MahaRERA Certified Agent
                </span>
              </div>
              <p className="text-white font-bold text-lg">A52100029799</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & TAGS */}
        <div className="pt-8 text-center space-y-2">
          <p className="text-xs text-white/30">
            © {mounted ? new Date().getFullYear() : 2026} Godrej Pune Projects | Premium Real Estate Investment in Hinjewadi Pune
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-white/10">
            <span>Godrej Hinjewadi Price List</span>
            <span>Godrej Hinjewadi Offers</span>
            <span>Pre-launch Godrej Hinjewadi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}