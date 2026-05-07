"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const collections = [
  {
    title: "Metal Wall Art",
    desc: "Laser-cut architectural pieces with hand-polished finishes in gold, silver, and copper.",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400",
    tag: "Architect's Choice",
    icon: "🏗️",
  },
  {
    title: "Canvas Masterpieces",
    desc: "High-resolution abstract and landscape prints on museum-grade poly-cotton canvas.",
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400",
    tag: null,
    icon: "🎨",
  },
  {
    title: "Wooden Sculptures",
    desc: "Hand-carved reclaimed wood plaques and 3D geometric wall installations.",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400",
    tag: null,
    icon: "🪵",
  },
  {
    title: "Decorative Mirrors",
    desc: "Bespoke beveled glass mirrors that serve as both utility and high-end wall decor.",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=400",
    tag: "Luxury",
    icon: "🪞",
  },
  {
    title: "Fine Art Photo",
    desc: "Breathtaking landscapes and travel photography from around the world.",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=400",
    tag: null,
    icon: "📷",
  },
  {
    title: "Tapestry & Textiles",
    desc: "Hand-woven macrame and premium fabric wall hangings for organic textures.",
    img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=400",
    tag: null,
    icon: "🧶",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="floral-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0099D4] text-[10px] tracking-[0.5em] uppercase font-black mb-4">Curated Mediums</p>
            <h2 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-black leading-[1.1]">
              The Art <span className="text-[#0077A8] italic font-medium">Collections</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-[2px] w-12 bg-[#2DB34A]" />
              <span className="text-[#2DB34A] text-xl">✦</span>
              <div className="h-[2px] w-12 bg-[#2DB34A]" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <Link href="/shop" className="block h-full">
                <div className="group bg-white rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[#0099D4]/10 transition-all duration-500 relative h-full flex flex-col items-start border border-slate-100">
                  <div className="h-48 w-full overflow-hidden relative">
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-8 pt-4">
                    {s.tag && (
                      <span className="absolute top-4 right-4 text-[8px] bg-[#0099D4] text-white font-black px-3 py-1 tracking-widest uppercase rounded-full shadow-lg z-10">
                        {s.tag}
                      </span>
                    )}
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {s.icon}
                    </div>
                    <h3 className="text-[#0A2733] font-serif font-black mb-4 text-2xl">{s.title}</h3>
                    <p className="text-[#2A5566] text-base leading-relaxed mb-8 font-light">{s.desc}</p>
                    <div className="mt-auto pt-6 border-t border-slate-50 w-full text-[#2DB34A] text-[9px] font-black tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
                      Explorer Medium →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-20">
          <Link
            href="/shop"
            className="inline-block bg-[#0A2733] text-white px-12 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-black hover:bg-[#0099D4] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200"
          >
            Visit The Complete Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
