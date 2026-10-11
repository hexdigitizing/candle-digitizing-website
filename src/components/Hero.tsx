import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Check, 
  Star
} from 'lucide-react';
import { HeroCarousel } from './HeroCarousel';

interface HeroProps {
  onOpenOrder: () => void;
  onOpenQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onOpenQuote }) => {
  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      onOpenOrder();
    }
  };

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FFFDF7]">
      
      {/* Background Decorative Blobs with Smooth Floating Physics */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-8 w-28 h-28 rounded-full bg-[#FEA800]/15 blur-2xl pointer-events-none transform-gpu" 
      />
      <motion.div 
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-12 w-36 h-36 rounded-full bg-[#FF3F53]/15 blur-3xl pointer-events-none transform-gpu" 
      />
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/3 w-40 h-40 rounded-full bg-[#1679E2]/12 blur-3xl pointer-events-none transform-gpu" 
      />

      {/* Floating Star & Sparkle Doodles with Smooth Micro-Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 left-6 text-[#FEA800] text-3xl font-bold select-none pointer-events-none hidden sm:block opacity-70"
      >
        ✦
      </motion.div>
      <motion.div 
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-8 text-[#FF3F53] text-4xl font-bold select-none pointer-events-none hidden sm:block opacity-70"
      >
        ★
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-20 left-12 text-[#3BB77E] text-2xl font-bold select-none pointer-events-none hidden sm:block opacity-70"
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Primary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Badges, Features, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Top Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#FFF3D6] border-2 border-[#FEA800]/50 px-4 py-1.5 rounded-full text-xs font-black text-[#1F2244] shadow-sm uppercase tracking-wider"
            >
              <span className="w-5 h-5 rounded-full bg-[#FEA800] text-white flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span>CANDLE DIGITIZING EMBROIDERY STUDIO</span>
              <span className="bg-[#FF3F53] text-white text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-black">
                4-8h Rush
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#1F2244] tracking-tight leading-[1.12] font-heading"
            >
              Your Designs.{' '}
              <span className="text-[#FF3F53] relative inline-block">
                Flawlessly
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FF3F53]/35 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </span>{' '}
              <span className="text-[#FEA800]">Digitized.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              We convert logos, crests, and illustrations into machine-ready embroidery files with calibrated stitch densities, balanced pull compensation, and zero thread breakage across Tajima, Barudan, Brother, and Melco.
            </motion.p>

            {/* 4 Feature Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2.5 bg-white/85 p-2.5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#3BB77E]/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-[#3BB77E]/15 text-[#3BB77E] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span><strong>Fast Turnaround:</strong> 4 - 8h Rush Available</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/85 p-2.5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#FF3F53]/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-[#FF3F53]/15 text-[#FF3F53] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span><strong>Production Ready:</strong> Zero Thread Break Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/85 p-2.5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#1679E2]/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-[#1679E2]/15 text-[#1679E2] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span><strong>Free Minor Edits:</strong> 30 Days Revisions</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/85 p-2.5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#FEA800]/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-[#FEA800]/15 text-[#FEA800] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span><strong>All Formats:</strong> DST, PES, EMB, EXP, JEF</span>
              </div>
            </motion.div>

            {/* Action Buttons: Order Now, Get Quote & Portfolio */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 flex-wrap"
            >
              {/* ORDER NOW CTA -> scrolls to existing full order form */}
              <motion.button
                id="hero-order-cta-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenOrder}
                className="group vs-btn vs-btn-yellow text-base font-bold shadow-xl shadow-[#FEA800]/35 hover:shadow-2xl hover:shadow-[#FEA800]/45 transition-all !py-3.5 !px-8 cursor-pointer"
              >
                <span>ORDER NOW</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-md group-hover:translate-x-1.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.button>

              {/* GET QUOTE CTA -> opens dedicated Quote Dialog */}
              <motion.button
                id="hero-quote-dialog-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleQuoteClick}
                className="group vs-btn vs-btn-blue text-base font-bold shadow-xl shadow-[#1679E2]/30 hover:shadow-2xl hover:shadow-[#1679E2]/40 transition-all !py-3.5 !px-7 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>GET QUOTE</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#1679E2] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.button>

              {/* PORTFOLIO CTA -> Styled like ORDER NOW & GET QUOTE in #FF3F53 */}
              <motion.a
                id="hero-samples-cta-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#gallery"
                className="group vs-btn vs-btn-coral text-base font-bold shadow-xl shadow-[#FF3F53]/35 hover:shadow-2xl hover:shadow-[#FF3F53]/45 transition-all !py-3.5 !px-7 cursor-pointer flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>PORTFOLIO</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#FF3F53] flex items-center justify-center shadow-md group-hover:translate-x-1.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.a>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-3 border-t border-slate-200/80 flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Decorator avatar"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Decorator avatar"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                    alt="Decorator avatar"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#FEA800] font-bold text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FEA800] text-[#FEA800]" />
                      ))}
                    </div>
                    <span className="text-[#1F2244] ml-1">4.9/5 Rating</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Over 1,200+ Apparel Shops Trust Us</span>
                </div>
              </div>

              <div className="h-7 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/70 px-3 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#3BB77E]" />
                <span><strong>50,000+</strong> Files Digitized Since 2018</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Sleek Autoplay Carousel with Smooth Motion Animations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <HeroCarousel onOpenQuoteForStyle={handleQuoteClick} />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

