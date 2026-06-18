"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "@/components/ThemeToggle";

import { categories, products } from "@/lib/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "B2B Catalog", href: "/products", hasDropdown: true },
  { label: "Signage", href: "/products#3d-acrylic-letters" },
  { label: "Print & Branding", href: "/products#flex-&-vinyl-banners" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+918320282847";
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
        <div className="flex items-center gap-4">
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
              width={160}
              height={64}
              className="object-contain h-16 w-auto rounded-md bg-white p-1 shadow-sm"
              priority
            />
          </Link>
        </div>

        {/* Center: Mobile Logo OR Desktop Nav links */}
        <div className="flex-1 flex justify-center px-4">
          <Link href="/" className="md:hidden flex items-center group shrink-0">
            <Image
              src="/nav_logo.jpg"
              alt="Brand Easy Logo"
              width={120}
              height={48}
              className="object-contain h-12 w-auto rounded-md bg-white p-1 shadow-sm"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => {
              const linkClasses = `text-[10px] lg:text-[11px] tracking-wider uppercase font-sans font-bold transition-all hover:text-accent whitespace-nowrap ${
                pathname === link.href ? "text-accent" : "text-text"
              }`;
              
              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`${linkClasses} flex items-center gap-1`}
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-surface border border-surface-light rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 z-50">
                      <div className="p-2 flex flex-col">
                        {categories.map((cat, idx) => {
                          const catProducts = products.filter(p => p.category === cat);
                          return (
                            <div key={idx} className="relative group/sub">
                              <Link 
                                href={`/products?category=${encodeURIComponent(cat)}`}
                                className="px-4 py-2.5 text-[11px] tracking-wider uppercase font-bold text-text-muted hover:text-accent hover:bg-background rounded-lg transition-colors flex justify-between items-center"
                              >
                                {cat}
                                {catProducts.length > 0 && (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-90"><path d="m6 9 6 6 6-6"/></svg>
                                )}
                              </Link>
                              
                              {catProducts.length > 0 && (
                                <div className="absolute top-0 left-full ml-2 w-72 bg-surface border border-surface-light rounded-xl shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 before:absolute before:top-0 before:-left-2 before:w-2 before:h-full z-50 max-h-[70vh] overflow-y-auto hidden-scrollbar">
                                  <div className="p-2 flex flex-col">
                                    {catProducts.map(product => (
                                      <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        className="px-4 py-2.5 text-[10px] tracking-wide uppercase font-bold text-text-muted hover:text-accent hover:bg-background rounded-lg transition-colors truncate block"
                                      >
                                        {product.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              
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
        <div className="hidden md:flex items-center justify-end gap-3 lg:gap-4 shrink-0">
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
