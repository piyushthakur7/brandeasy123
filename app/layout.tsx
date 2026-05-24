import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brand Easy – Premium Industrial Printing & Signage Solutions",
  description: "High-quality industrial branding, 3D letters, flex printing, ACP signage, and corporate branding solutions for B2B enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#0F1115] text-[#E2E8F0]">
        <Preloader />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingActions />
        <SpeedInsights />
      </body>
    </html>
  );
}
