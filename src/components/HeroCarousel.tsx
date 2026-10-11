import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Check, 
  Pause, 
  Play, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export interface CarouselSlide {
  id: string;
  title: string;
  category: string;
  badge: string;
  stitchCount: string;
  fabric: string;
  turnaround: string;
  pullComp: string;
  formats: string[];
  image: string;
  thumbImage: string;
  accentColor: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: '3d-puff-cap',
    title: 'Tactical Apex 3D Puff',
    category: '3D Puff Cap',
    badge: 'High-Density 3mm EVA Foam',
    stitchCount: '14,250 Stitches',
    fabric: 'Richardson 112 Trucker Cap',
    turnaround: '4.5 Hours',
    pullComp: '+0.32mm Calibrated',
    formats: ['DST', 'EMB', 'PES'],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=200&q=80',
    accentColor: '#FEA800'
  },
  {
    id: 'left-chest-polo',
    title: 'Country Club Crest',
    category: 'Left Chest',
    badge: 'Micro Serif Stitch Precision',
    stitchCount: '9,840 Stitches',
    fabric: '100% Pique Performance Poly',
    turnaround: '4.0 Hours',
    pullComp: '+0.25mm Underlay',
    formats: ['DST', 'PES', 'EXP'],
    image: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=1200&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=200&q=80',
    accentColor: '#1679E2'
  },
  {
    id: 'jacket-back-biker',
    title: 'Iron Wolves Heavy Biker',
    category: 'Jacket Back',
    badge: 'Multi-Direction Tatami Weave',
    stitchCount: '68,400 Stitches',
    fabric: 'Denim & Heavyweight Leather',
    turnaround: '10.5 Hours',
    pullComp: '+0.40mm Heavy Duty',
    formats: ['DST', 'EXP', 'EMB'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=80',
    accentColor: '#FF3F53'
  },
  {
    id: 'tactical-patch',
    title: 'Vanguard Tactical Patch',
    category: 'Custom Patch',
    badge: 'Merrowed Overlock Border',
    stitchCount: '16,900 Stitches',
    fabric: 'Heavy Twill + Velcro Backing',
    turnaround: '5.0 Hours',
    pullComp: '+0.28mm Reinforced',
    formats: ['DST', 'EMB', 'PES'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200&q=80',
    accentColor: '#3BB77E'
  },
  {
    id: 'dad-hat-crew',
    title: 'Coastal Crew Dad Hat',
    category: 'Unstructured Cap',
    badge: 'Center-Out Arc Pathing',
    stitchCount: '11,200 Stitches',
    fabric: 'Chino Washed Cotton Twill',
    turnaround: '4.0 Hours',
    pullComp: '+0.26mm Zero-Pucker',
    formats: ['DST', 'PES', 'JEF'],
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1200&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=200&q=80',
    accentColor: '#FEA800'
  }
];

interface HeroCarouselProps {
  onOpenQuoteForStyle?: (category: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenQuoteForStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeSlide = CAROUSEL_SLIDES[currentIndex];
  const slideDuration = 4800; // 4.8 seconds

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Autoplay interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Multi-color ambient background blur aura matching website theme */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#FEA800]/30 via-[#FF3F53]/20 to-[#1679E2]/25 rounded-[40px] blur-2xl -z-10 pointer-events-none" />

      {/* Main Glassmorphism / White Container */}
      <div className="relative rounded-[32px] sm:rounded-[36px] bg-white p-3 sm:p-5 shadow-2xl border-4 border-white">
        
        {/* Top Header Bar of Carousel */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-1">
          {/* Studio Brand Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3BB77E] animate-pulse" />
            <span className="text-xs font-bold text-[#1F2244] font-heading tracking-wide">
              Tested Sew-Out Production Showcase
            </span>
          </div>

          {/* Controls: Autoplay status & Slide index */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#FEA800]" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <div className="bg-slate-100 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-slate-600">
              <span className="text-[#FEA800]">0{currentIndex + 1}</span>
              <span className="text-slate-400"> / 0{CAROUSEL_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative mt-3 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner group select-none">
          
          {/* Slide Animation */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Stitch overlay texture effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2244]/95 via-[#1F2244]/25 to-transparent pointer-events-none" />

              {/* Top Left: Category Badge & Sew-Out Guarantee */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                <div className="inline-flex items-center gap-1.5 bg-[#1F2244]/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSlide.accentColor }} />
                  <span>{activeSlide.category}</span>
                </div>
                <div className="bg-[#FEA800] text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm w-max">
                  {activeSlide.badge}
                </div>
              </div>

              {/* Top Right: Zero Thread Breaks Pill */}
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-[#3BB77E]/95 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Zero Break Tested</span>
                </div>
              </div>

              {/* Bottom Project Details Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-3">
                  <div className="space-y-1 max-w-[70%]">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white tracking-tight drop-shadow-md">
                      {activeSlide.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1">
                      {activeSlide.fabric}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-[#FEA800] font-semibold pt-0.5">
                      <span className="bg-black/40 px-2 py-0.5 rounded text-white font-mono">
                        {activeSlide.stitchCount}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">{activeSlide.turnaround} Turnaround</span>
                    </div>
                  </div>

                  {/* Fast Quote Button for this Style */}
                  {onOpenQuoteForStyle && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteForStyle(activeSlide.category)}
                      className="vs-btn vs-btn-yellow text-xs font-bold shadow-lg shadow-[#FEA800]/30 hover:scale-105 transition-all !py-2 !px-3.5 flex items-center gap-1 cursor-pointer flex-shrink-0"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Formats Strip */}
                <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Ready Formats:</span>
                    {activeSlide.formats.map((fmt) => (
                      <span key={fmt} className="bg-white/20 text-white px-1.5 py-0.5 rounded font-mono font-bold text-[9px]">
                        {fmt}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#FEA800] font-bold">{activeSlide.pullComp}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#1F2244] hover:text-[#FEA800] flex items-center justify-center shadow-lg transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous embroidery sample"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#1F2244] hover:text-[#FEA800] flex items-center justify-center shadow-lg transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next embroidery sample"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.5]" />
          </button>

          {/* Autoplay Progress Line (Active when not paused) */}
          {!isPaused && (
            <div className="absolute top-0 inset-x-0 h-1 bg-black/20 z-20">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: slideDuration / 1000, ease: 'linear' }}
                className="h-full bg-[#FEA800]"
              />
            </div>
          )}

        </div>

        {/* Bottom Interactive Thumbnail Strip */}
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Explore Live Samples:
            </span>
            <div className="flex items-center gap-1.5">
              {CAROUSEL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === currentIndex 
                      ? 'w-6 bg-[#FEA800]' 
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 5 Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {CAROUSEL_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group ${
                    isSelected
                      ? 'border-[#FEA800] shadow-md ring-2 ring-[#FEA800]/30 scale-105'
                      : 'border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100'
                  }`}
                  title={slide.title}
                >
                  <img
                    src={slide.thumbImage}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#FEA800]/25 flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#FEA800] text-white flex items-center justify-center shadow">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </div>
                  )}
                  <span className="absolute bottom-0 inset-x-0 bg-slate-900/85 text-white text-[8px] font-bold py-0.5 text-center truncate px-0.5">
                    {slide.category.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Quick Trust Metrics Pill */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-2xl bg-[#FFF9EC] border border-[#FEA800]/25">
            <span className="block text-slate-500 text-[10px] font-medium">Turnaround</span>
            <span className="font-bold text-[#1F2244] text-xs">{activeSlide.turnaround}</span>
          </div>
          <div className="p-2 rounded-2xl bg-[#F0FAF5] border border-[#3BB77E]/25">
            <span className="block text-slate-500 text-[10px] font-medium">Pull Comp</span>
            <span className="font-bold text-[#3BB77E] text-xs">{activeSlide.pullComp.split(' ')[0]}</span>
          </div>
          <div className="p-2 rounded-2xl bg-[#FFF2F4] border border-[#FF3F53]/25">
            <span className="block text-slate-500 text-[10px] font-medium">Break Rate</span>
            <span className="font-bold text-[#FF3F53] text-xs">0% Breaks</span>
          </div>
        </div>

      </div>
    </div>
  );
};
