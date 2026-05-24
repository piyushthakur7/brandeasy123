"use client";
import Link from "next/link";

export default function Footer() {
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+917741961239";
  const gstNumber = process.env.NEXT_PUBLIC_GST_NUMBER || "PENDING";

  return (
    <footer className="bg-background text-text py-24 border-t border-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-black mb-8 text-white">Brand Easy</h3>
            <p className="text-text-muted text-lg max-w-md leading-relaxed mb-8">
              Premium industrial branding, signage manufacturing, and corporate printing solutions.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-text-muted text-sm font-bold">
                <span className="text-accent">GST:</span> {gstNumber}
              </p>
              <p className="text-text-muted text-sm">
                <span className="text-accent font-bold">Coverage:</span> Pan-India Installation & Shipping
              </p>
              <p className="text-text-muted text-sm">
                <span className="text-accent font-bold">Experience:</span> 10+ Years in Manufacturing
              </p>
            </div>
            <div className="space-y-2 mb-8 mt-4">
              <p className="text-text-muted text-xs">Ground Floor Darshan Apartment, Katargam Main Rd, Surat</p>
              <p className="text-text-muted text-xs font-bold">{companyPhone}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 text-white">B2B Catalog</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-text-muted hover:text-accent transition-colors">All Products</Link></li>
              <li><Link href="/products" className="text-text-muted hover:text-accent transition-colors">Sign Boards</Link></li>
              <li><Link href="/products" className="text-text-muted hover:text-accent transition-colors">Flex Printing</Link></li>
              <li><Link href="/products" className="text-text-muted hover:text-accent transition-colors">LED Signage</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 text-white">Company</h4>
             <ul className="space-y-4">
               <li><Link href="/about" className="text-text-muted hover:text-accent transition-colors">About Us</Link></li>
               <li><Link href="/portfolio" className="text-text-muted hover:text-accent transition-colors">Installation Portfolio</Link></li>
               <li><Link href="/contact" className="text-text-muted hover:text-accent transition-colors">Contact Support</Link></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface flex flex-col md:flex-row justify-between gap-6 text-[10px] font-black tracking-widest uppercase text-text-muted">
           <p>© 2026 Brand Easy. All Rights Reserved.</p>
           <div className="flex gap-8">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
