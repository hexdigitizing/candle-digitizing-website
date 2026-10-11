import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Layers, 
  Maximize2, 
  Shuffle, 
  Gauge, 
  ArrowRight, 
  Sparkles,
  Cpu
} from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const technicalPillars = [
    {
      title: 'Stitch Direction',
      desc: 'Optimized angles that follow natural light reflections and fabric elasticity.',
      icon: Compass,
      color: 'text-[#FEA800]',
      bgColor: 'bg-[#FFF9EC]',
      borderColor: 'border-[#FEA800]/30'
    },
    {
      title: 'Density Calibration',
      desc: 'Precise 0.38 - 0.45mm stitch spacing preventing bulletproof stiffness or fabric peek.',
      icon: Gauge,
      color: 'text-[#FF3F53]',
      bgColor: 'bg-[#FFF2F4]',
      borderColor: 'border-[#FF3F53]/30'
    },
    {
      title: 'Underlay Architecture',
      desc: 'Lattice and edge-walk foundations anchoring delicate garment fibers before top satins.',
      icon: Layers,
      color: 'text-[#1679E2]',
      bgColor: 'bg-[#F0F7FF]',
      borderColor: 'border-[#1679E2]/30'
    },
    {
      title: 'Pull Compensation',
      desc: 'Physical push-and-pull mathematical allowances tailored to pique, fleece, twill or knit.',
      icon: Maximize2,
      color: 'text-[#3BB77E]',
      bgColor: 'bg-[#F0FAF5]',
      borderColor: 'border-[#3BB77E]/30'
    },
    {
      title: 'Thread Sequencing',
      desc: 'Center-out and bottom-up stitch paths cutting unnecessary jumps, trims, and setup time.',
      icon: Shuffle,
      color: 'text-[#FEA800]',
      bgColor: 'bg-[#FFF9EC]',
      borderColor: 'border-[#FEA800]/30'
    },
    {
      title: 'Machine Calibration',
      desc: 'Export parameters adjusted for Tajima, Barudan, Brother, Melco, and Happy Japan.',
      icon: Cpu,
      color: 'text-[#FF3F53]',
      bgColor: 'bg-[#FFF2F4]',
      borderColor: 'border-[#FF3F53]/30'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Kiddino floating background elements */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#FEA800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-64 h-64 bg-[#1679E2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Floating Badges & Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Colorful Glow Aura */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#FEA800]/25 via-[#FF3F53]/15 to-[#1679E2]/25 rounded-[36px] blur-xl -z-10" />

            <div className="relative bg-white p-4 sm:p-5 rounded-[32px] border-4 border-white shadow-2xl overflow-hidden">
              {/* Main Imagery */}
              <div className="relative h-80 sm:h-[440px] rounded-[24px] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=1000&q=80"
                  alt="Close-up macro embroidery stitches on luxury garment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2244]/80 via-[#1F2244]/20 to-transparent" />

                {/* Machine Tech Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border-2 border-slate-100 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3BB77E] animate-pulse" />
                  <span className="text-xs font-black text-[#1F2244] uppercase tracking-wider">
                    Commercial Sewout Tested
                  </span>
                </div>

                {/* Floating Bottom Card: Real Stitch Specs */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-xs font-extrabold text-[#1F2244] font-heading">
                      Master Pathing Technology
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Zero thread breaks • 850+ RPM calibrated • Precision trims
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FEA800] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Badge on Edge */}
              <div className="absolute -top-3 -right-3 bg-[#FF3F53] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg border-2 border-white rotate-3">
                15+ Years Craft
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Explanation & 6 Engineering Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Section Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF3D6] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black text-[#1F2244] shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FEA800]" />
              <span>THE ART & SCIENCE OF DIGITIZING</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading leading-tight">
              Turning Artwork Into{' '}
              <span className="text-[#FEA800] relative inline-block">
                Perfect Stitches
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FEA800]/30 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Explanation Content */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Professional digitizing is far more than just converting a raster graphic into vector points. It is the skilled craft of translating visual artwork into precise machine instructions—guiding high-speed embroidery needles on how to interact with physical thread, stabilizers, and garment fibers.
            </p>

            {/* 6 Engineering Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {technicalPillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`p-3 rounded-2xl border-2 ${item.borderColor} ${item.bgColor} flex items-start gap-2.5 transition-all`}
                  >
                    <div className={`p-1.5 rounded-xl bg-white shadow-xs ${item.color} flex-shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2244] font-heading">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="vs-btn vs-btn-yellow text-sm font-bold shadow-lg shadow-[#FEA800]/25 !py-3 !px-7 cursor-pointer"
              >
                <span>LEARN MORE & GET STARTED</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              <a
                href="#services"
                className="text-xs font-bold text-slate-600 hover:text-[#1679E2] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
