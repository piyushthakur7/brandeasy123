"use client";
import { motion } from "motion/react";
import { ShoppingBag, Utensils, Stethoscope, Building, Store, Home, GraduationCap, ShoppingCart } from "lucide-react";

const industries = [
  { name: "Retail & Stores", icon: ShoppingBag },
  { name: "Restaurants & Cafes", icon: Utensils },
  { name: "Hospitals & Clinics", icon: Stethoscope },
  { name: "Corporate Offices", icon: Building },
  { name: "Showrooms", icon: Store },
  { name: "Real Estate", icon: Home },
  { name: "Schools & Colleges", icon: GraduationCap },
  { name: "Malls & Plazas", icon: ShoppingCart },
];

export default function IndustriesSection() {
  return (
    <section className="bg-surface py-20 border-y border-surface-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Industries We Serve
          </p>
          <h2 className="text-text font-heading text-3xl md:text-4xl font-bold">
            Signage Engineered for <span className="text-accent">Every Sector</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-background border border-surface-light p-6 rounded-sm flex flex-col items-center justify-center text-center group hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-sm bg-surface-light text-text-muted flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-background transition-colors">
                <ind.icon size={24} />
              </div>
              <h3 className="text-text font-bold text-sm tracking-wide">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
