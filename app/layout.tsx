import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";



const arista = localFont({
  src: [
    {
      path: '../public/fonts/Arista-Pro-Light-trial.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Arista-Pro-Regular-trial.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Arista-Pro-SemiBold-trial.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-arista',
  display: 'swap',
});

import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" className={`${arista.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-background text-text transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <FloatingActions />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
