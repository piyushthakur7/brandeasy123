"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "B2B Catalog", href: "/products" },
  { label: "Signage", href: "/products#3d-acrylic-letters" },
  { label: "Print & Branding", href: "/products#flex-&-vinyl-banners" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+917741961239";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918320282847";

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
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        
        {/* Left: Mobile Toggle & Logo */}
        <div className="flex items-center gap-4 md:w-1/4">
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-accent hover:bg-surface-light rounded-full transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ThemeToggle />
          </div>
          
          <Link href="/" className="hidden md:flex items-center group shrink-0">
            <Image
              src="/nav_logo.jpg"
              alt="Brand Easy Logo"
              width={120}
              height={48}
              className="object-contain h-12 w-auto rounded-sm"
              priority
            />
          </Link>
        </div>

        {/* Center: Mobile Logo OR Desktop Nav links */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="md:hidden flex items-center group shrink-0">
            <Image
              src="/nav_logo.jpg"
              alt="Brand Easy Logo"
              width={100}
              height={40}
              className="object-contain h-10 w-auto rounded-sm"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Right: Contact Button & Theme Toggle */}
        <div className="hidden md:flex items-center justify-end md:w-1/4 gap-3 lg:gap-4">
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-3 lg:px-4 py-2.5 rounded-sm text-[10px] lg:text-[11px] font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors shadow-sm whitespace-nowrap"
          >
            WhatsApp
          </Link>
          <a
            href={`tel:${companyPhone}`}
            className="flex items-center gap-2 bg-accent text-background px-3 lg:px-5 py-2.5 rounded-sm text-[10px] lg:text-[11px] font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Phone size={14} />
            <span className="hidden xl:inline">{companyPhone}</span>
            <span className="xl:hidden">Call</span>
          </a>
          <ThemeToggle />
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
