import { ClipboardList, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Requirement & Quote",
    desc: "Share your specifications or upload designs. We provide a detailed manufacturing quote."
  },
  {
    icon: PenTool,
    title: "2. Design & Proofing",
    desc: "Our structural engineers and designers finalize the proof for your approval."
  },
  {
    icon: Factory,
    title: "3. Manufacturing",
    desc: "Precision cutting, printing, and assembly at our state-of-the-art facility."
  },
  {
    icon: Truck,
    title: "4. Delivery & Install",
    desc: "Secure packaging and nationwide delivery, with optional professional installation."
  }
];

export default function ProcessWorkflow() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">How We Work</span>
          <h2 className="text-text font-heading text-3xl md:text-5xl font-bold">From Concept to <span className="text-accent">Installation</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-surface-light -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-sm bg-surface border border-surface-light flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:border-accent transition-all shadow-lg">
                <step.icon size={28} />
              </div>
              <h3 className="text-text font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
