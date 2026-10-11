import React from 'react';
import { motion } from 'motion/react';
import { Clock, RefreshCw, FileCheck, Award, FileCode2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const pillars = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      desc: 'Quick delivery for standard and rush orders, available within 4 to 8 hours.',
      bgColor: 'bg-[#FFF9EC]',
      borderColor: 'border-[#FEA800]/30',
      iconBg: 'bg-[#FEA800]',
      textColor: 'text-[#FEA800]',
    },
    {
      icon: FileCheck,
      title: 'Production Ready',
      desc: 'Clean files optimized for real embroidery machines with calibrated pull compensation.',
      bgColor: 'bg-[#FFF2F4]',
      borderColor: 'border-[#FF3F53]/30',
      iconBg: 'bg-[#FF3F53]',
      textColor: 'text-[#FF3F53]',
    },
    {
      icon: Award,
      title: 'Expert Digitizing',
      desc: 'Experienced digitizers focused on stitch quality, micro-text clarity, and zero thread breaks.',
      bgColor: 'bg-[#F0F7FF]',
      borderColor: 'border-[#1679E2]/30',
      iconBg: 'bg-[#1679E2]',
      textColor: 'text-[#1679E2]',
    },
    {
      icon: RefreshCw,
      title: 'Multiple Formats',
      desc: 'DST, PES, JEF, EXP, VP3, EMB, AI, SVG and more ready for any commercial setup.',
      bgColor: 'bg-[#F0FAF5]',
      borderColor: 'border-[#3BB77E]/30',
      iconBg: 'bg-[#3BB77E]',
      textColor: 'text-[#3BB77E]',
    }
  ];

  const formats = [
    { ext: '.DST', label: 'Tajima / Universal', color: 'border-[#FEA800]/40 text-[#FEA800] bg-[#FFF9EC]' },
    { ext: '.PES', label: 'Brother / Babylock', color: 'border-[#1679E2]/40 text-[#1679E2] bg-[#F0F7FF]' },
    { ext: '.EMB', label: 'Wilcom TrueSizer', color: 'border-[#7E3AF2]/40 text-[#7E3AF2] bg-[#FAF5FF]' },
    { ext: '.EXP', label: 'Melco / Bernina', color: 'border-[#FF3F53]/40 text-[#FF3F53] bg-[#FFF2F4]' },
    { ext: '.JEF', label: 'Janome / Elna', color: 'border-[#3BB77E]/40 text-[#3BB77E] bg-[#F0FAF5]' },
    { ext: '.AI', label: 'Adobe Illustrator', color: 'border-[#FEA800]/40 text-[#FEA800] bg-[#FFF9EC]' },
    { ext: '.SVG', label: 'Scalable Vector', color: 'border-[#1679E2]/40 text-[#1679E2] bg-[#F0F7FF]' },
    { ext: '.EPS', label: 'PostScript Print', color: 'border-[#FF3F53]/40 text-[#FF3F53] bg-[#FFF2F4]' },
    { ext: '.PDF', label: 'Stitch Sheet Specs', color: 'border-[#3BB77E]/40 text-[#3BB77E] bg-[#F0FAF5]' },
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kiddino 4 Multi-Colored Pillars Grid with Staggered Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-slate-100">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${item.bgColor} border-2 ${item.borderColor} rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#1F2244] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Machine Formats Ticker / Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F2244]">
            <span className="w-7 h-7 rounded-full bg-[#FEA800]/20 text-[#FEA800] flex items-center justify-center">
              <FileCode2 className="w-4 h-4" />
            </span>
            <span>Supported Machine & Vector Formats:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {formats.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`border-2 ${f.color} px-3.5 py-1 rounded-full text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5 cursor-default`}
                title={f.label}
              >
                <span>{f.ext}</span>
                <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">({f.label.split('/')[0].trim()})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
