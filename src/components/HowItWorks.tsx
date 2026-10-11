import React from 'react';
import { motion } from 'motion/react';
import { UploadCloud, Cpu, CheckCircle2, Download, Check, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Design',
      desc: 'Send your logo, artwork or sketch with desired size, placement details, and target garment fabric.',
      icon: UploadCloud,
      color: 'bg-[#FFF9EC] border-[#FEA800]/30',
      badgeBg: 'bg-[#FEA800]',
      iconBg: 'bg-[#FEA800]',
      checkBg: 'bg-[#FFF9EC] text-[#FEA800]',
      perks: ['Any raster or vector format', 'Fabric specifications noted', 'Instant review confirmation']
    },
    {
      number: '02',
      title: 'We Digitize',
      desc: 'Our master digitizers map optimized stitch paths, fabric-specific density, underlay, and pull compensation.',
      icon: Cpu,
      color: 'bg-[#FFF2F4] border-[#FF3F53]/30',
      badgeBg: 'bg-[#FF3F53]',
      iconBg: 'bg-[#FF3F53]',
      checkBg: 'bg-[#FFF2F4] text-[#FF3F53]',
      perks: ['Stitch angle optimization', '3D foam capping calibration', 'Sharp micro-lettering paths']
    },
    {
      number: '03',
      title: 'Quality Check',
      desc: 'We run digital sew-outs and machine simulations to ensure perfect stitch flow and zero thread breaks.',
      icon: CheckCircle2,
      color: 'bg-[#F0F7FF] border-[#1679E2]/30',
      badgeBg: 'bg-[#1679E2]',
      iconBg: 'bg-[#1679E2]',
      checkBg: 'bg-[#F0F7FF] text-[#1679E2]',
      perks: ['Zero thread break inspection', 'Color sequence verification', 'Density & tension audit']
    },
    {
      number: '04',
      title: 'Receive Your Files',
      desc: 'Download machine-ready files (DST, PES, etc.) with comprehensive color run sheets and sewout PDF.',
      icon: Download,
      color: 'bg-[#F0FAF5] border-[#3BB77E]/30',
      badgeBg: 'bg-[#3BB77E]',
      iconBg: 'bg-[#3BB77E]',
      checkBg: 'bg-[#F0FAF5] text-[#3BB77E]',
      perks: ['All commercial formats', 'Color sequence PDF included', 'Free edits within 30 days']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>SIMPLE & PROVEN 4-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            From Artwork to <span className="text-[#FEA800]">Embroidery</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We convert your graphic designs into production-ready embroidery files with speed, precision, and zero guesswork for your machine operators.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Staggered Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative ${step.color} border-2 rounded-[28px] p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200 group`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`w-11 h-11 rounded-full ${step.badgeBg} text-white font-black text-sm flex items-center justify-center shadow-md font-heading`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${step.iconBg} text-white flex items-center justify-center shadow-md group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2244] font-heading mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Key Perks */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  {step.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                      <span className={`w-4 h-4 rounded-full ${step.checkBg} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
