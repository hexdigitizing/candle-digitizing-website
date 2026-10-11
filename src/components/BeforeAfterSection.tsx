import React, { useState } from 'react';
import { Sparkles, Sliders, ArrowRight, Eye, Check, Info } from 'lucide-react';

interface BeforeAfterProps {
  onOpenQuote: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterProps> = ({ onOpenQuote }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeSampleIndex, setActiveSampleIndex] = useState<number>(0);

  const samples = [
    {
      title: 'Apex Tactical 3D Puff Snapback',
      category: '3D Puff Cap',
      artwork: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
      embroidery: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80',
      specs: {
        stitchCount: '14,250 stitches',
        colors: '3 Colors (Madeira Polyneon)',
        density: '0.22mm Double-Density Capping',
        fabric: 'Richardson 112 Structured Cotton Twill',
        pullComp: '+0.38mm Cap Pull Allowance'
      },
      callouts: [
        { label: 'Perforated Foam Edges', text: 'Travel stitches cleanly perforate 3mm EVA foam for effortless peel.' },
        { label: 'Double-Density Satin', text: '0.22mm stitch spacing prevents foam peek-through on curves.' },
        { label: 'Seam Bridge Underlay', text: 'Heavy underlay spans the center cap crown seam to prevent needle deflection.' }
      ]
    },
    {
      title: 'Oakridge Country Club Luxury Crest',
      category: 'Pique Polo Left Chest',
      artwork: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      embroidery: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=1200&q=80',
      specs: {
        stitchCount: '9,840 stitches',
        colors: '5 Colors (Isacord 40 & 60)',
        density: '0.40mm Tatami / 0.38mm Satin',
        fabric: '100% Micro-Pique Performance Poly',
        pullComp: '+0.28mm Cross-Grain Balance'
      },
      callouts: [
        { label: 'Micro-Lettering (4.1mm)', text: 'Single-walk center underlay ensures letters e, a, and o never loop closed.' },
        { label: 'Tatami Gradient Shield', text: 'Multi-directional grain prevents fabric puckering on lightweight knit.' },
        { label: 'Smart Travel Pathing', text: 'Zero jump threads across crest fields cutting machine run time 22%.' }
      ]
    },
    {
      title: 'Iron Wolves Motorcycle Club Back',
      category: 'Jacket Back Oversized',
      artwork: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      embroidery: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80',
      specs: {
        stitchCount: '68,400 stitches',
        colors: '8 Colors (Metallic Gold Accents)',
        density: '0.42mm Flexible Segmented Tatami',
        fabric: 'Heavy Denim & Cowhide Leather',
        pullComp: '+0.45mm High-Tension Compensation'
      },
      callouts: [
        { label: 'Segmented Tatami Grain', text: 'Prevents heavy jacket stiffening, keeping garment comfortable and flexible.' },
        { label: 'Overlocked Perimeter Edge', text: 'Triple-run edge walk creates sharp relief border on thick substrates.' },
        { label: 'Optimized Trims', text: 'Reduced trim count from 78 down to 24, saving 14 minutes per garment.' }
      ]
    }
  ];

  const currentSample = samples[activeSampleIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="before-after" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>INTERACTIVE COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            From Artwork to <span className="text-[#FEA800]">Stitches</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Slide horizontally to see how our master digitizers translate flat graphic vectors into tactile, machine-calibrated embroidery sew-outs.
          </p>

          {/* Sample Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2 flex-wrap">
            {samples.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveSampleIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                  activeSampleIndex === idx
                    ? 'bg-[#1F2244] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sample.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="bg-[#FAF9F5] border-4 border-white rounded-[32px] p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Before/After Slider Container */}
            <div className="lg:col-span-8">
              <div 
                className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-[24px] overflow-hidden select-none cursor-ew-resize border-2 border-slate-200 shadow-inner group"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* Background Image: Digitized Embroidery Sew-out */}
                <img
                  src={currentSample.embroidery}
                  alt="Digitized embroidery sewout"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                {/* Foreground Image: Original 2D Artwork (Clipped smoothly with zero distortion) */}
                <div 
                  className="absolute inset-0 pointer-events-none overflow-hidden will-change-[clip-path]"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src={currentSample.artwork}
                    alt="Original graphic artwork"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle tint on artwork */}
                  <div className="absolute inset-0 bg-[#1F2244]/10" />
                </div>

                {/* Vertical Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Draggable Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FEA800] border-3 border-white text-white flex items-center justify-center shadow-xl">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>

                {/* Badges on Top Corners */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-[#1F2244]/90 backdrop-blur-md text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Original Artwork
                  </span>
                </div>

                <div className="absolute top-4 right-4 pointer-events-none">
                  <span className="bg-[#FEA800] text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Digitized Sew-out
                  </span>
                </div>

                {/* Helper hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-3.5 py-1 rounded-full pointer-events-none">
                  ↔ Drag slider to compare
                </div>
              </div>
            </div>

            {/* Right: Technical Callouts & Specs */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-xs font-black uppercase text-[#FEA800] tracking-wider">
                  {currentSample.category}
                </span>
                <h3 className="text-2xl font-bold text-[#1F2244] font-heading mt-1">
                  {currentSample.title}
                </h3>
              </div>

              {/* Technical Callouts */}
              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Technical Engineering Highlights:
                </p>
                {currentSample.callouts.map((callout, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FEA800]" />
                      <h4 className="text-xs font-bold text-[#1F2244] font-heading">
                        {callout.label}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed pl-4">
                      {callout.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Machine Specs Box */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="flex justify-between pb-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Stitch Density</span>
                  <span className="font-bold text-[#1F2244]">{currentSample.specs.density}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Pull Compensation</span>
                  <span className="font-bold text-[#3BB77E]">{currentSample.specs.pullComp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Substrate</span>
                  <span className="font-bold text-[#1F2244]">{currentSample.specs.fabric}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenQuote}
                className="w-full vs-btn vs-btn-yellow text-xs font-bold shadow-md shadow-[#FEA800]/25 !py-3"
              >
                <span>Order Similar Digitizing</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
