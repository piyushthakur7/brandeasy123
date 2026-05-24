export default function ClientTrustSection() {
  return (
    <section className="bg-surface py-16 border-y border-surface-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted mb-8">
          Trusted by 500+ Businesses Across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
          {/* Mock Client Logos using typography for now */}
          <span className="font-heading font-black text-xl text-text">TECHCORP</span>
          <span className="font-heading font-black text-xl text-text tracking-widest">BUILDCON</span>
          <span className="font-heading font-bold text-xl text-text italic">GlobalRetail</span>
          <span className="font-heading font-black text-xl text-text">MEDPLUS+</span>
          <span className="font-heading font-black text-xl text-text tracking-tighter">HOSPITALITY</span>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full bg-surface-light border-2 border-surface flex items-center justify-center text-[10px] text-text-muted">
                 User
               </div>
             ))}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex text-accent-orange gap-1 mb-1">
              {/* Stars */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p className="text-sm text-text font-bold">4.9/5 Average Rating</p>
            <p className="text-[10px] text-text-muted">Based on 120+ Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
