"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "B2B Catalog", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+917741961239";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917741961239";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-surface" 
          : "bg-background py-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 relative">
        
        {/* Left: Desktop Nav links */}
        <div className="flex items-center gap-6 md:w-1/3">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-accent hover:bg-surface-light rounded-full transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => {
              const linkClasses = `text-[11px] tracking-[0.1em] uppercase font-sans font-bold transition-all hover:text-accent whitespace-nowrap ${
                pathname === link.href ? "text-accent" : "text-text"
              }`;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center: Logo image + Brand name text */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 group shrink-0">
          <Image
            src="/nav_logo.png"
            alt="Brand Easy Logo"
            width={44}
            height={44}
            className="object-contain h-11 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold leading-none tracking-wide text-text group-hover:text-accent transition-colors">
              <span className="text-accent">Brand</span>
              <span className="text-text">Easy</span>
            </span>
            <span className="text-accent-dark text-[9px] tracking-[0.25em] uppercase mt-1">
              Industrial Signage
            </span>
          </div>
        </Link>

        {/* Right: Contact Button */}
        <div className="hidden md:flex items-center justify-end md:w-1/3 gap-4">
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-widest text-text hover:text-accent transition-colors"
          >
            WhatsApp
          </Link>
          <a
            href={`tel:${companyPhone}`}
            className="flex items-center gap-2 bg-accent text-background px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone size={14} />
            {companyPhone}
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-surface-light overflow-hidden"
          >
            <nav className="px-6 py-12 flex flex-col gap-8 text-center bg-background">
              {[...navLinks, { label: "Contact Us", href: "/contact" }].map((link) => {
                const linkClasses = `text-lg tracking-[0.1em] uppercase font-sans font-bold ${
                  pathname === link.href ? "text-accent" : "text-text"
                }`;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={linkClasses}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
