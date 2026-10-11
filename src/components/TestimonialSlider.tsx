import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-[#FAF9F5] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Playful Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FEA800]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF3F53]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>TESTIMONIALS & REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            What Our <span className="text-[#FEA800]">Clients Say</span>
          </h2>

          <p className="text-slate-600 text-base font-normal">
            Real feedback from commercial apparel decorators, screen printers, and embroidery shops who depend on Candle Digitizing daily.
          </p>
        </div>

        {/* Testimonial Slide Card with Kiddino Navy Theme */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1F2244] rounded-[36px] border-4 border-white p-8 sm:p-12 shadow-2xl relative text-white">
            
            {/* Quote Icon Watermark */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10 pointer-events-none" />

            <div className="space-y-6 relative">
              {/* Highlight & Star Rating */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 bg-[#FEA800]/20 text-[#FEA800] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  <span>"{current.highlight}"</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FEA800] text-[#FEA800]" />
                  ))}
                  <span className="text-xs font-black text-[#FEA800] ml-1">5.0 / 5.0</span>
                </div>
              </div>

              {/* Quote Body */}
              <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed font-heading">
                "{current.comment}"
              </p>

              {/* Author & Verification Meta */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-3 border-[#FEA800] shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {current.role} • <span className="text-[#FEA800] font-bold">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-[#3BB77E] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#3BB77E]" />
                  <span>{current.verifiedOrder}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls & Dot Pagination */}
          <div className="flex items-center justify-between mt-8 px-4">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-10 bg-[#FEA800]'
                      : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                id="testimonial-prev-btn"
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#FEA800] text-[#1F2244] hover:text-white border-2 border-slate-200 hover:border-[#FEA800] flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#FEA800] text-[#1F2244] hover:text-white border-2 border-slate-200 hover:border-[#FEA800] flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
