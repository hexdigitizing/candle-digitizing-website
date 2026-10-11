import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shirt, 
  Layers, 
  Shield, 
  PenTool, 
  Sparkles, 
  Crown, 
  Scissors,
  Type,
  ArrowRight, 
  Check, 
  Clock, 
  Zap, 
  Info 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesShowcaseProps {
  onSelectService: (service: Service) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shirt':
        return Shirt;
      case 'Layers':
        return Layers;
      case 'Shield':
        return Shield;
      case 'PenTool':
        return PenTool;
      case 'Sparkles':
        return Sparkles;
      case 'Crown':
        return Crown;
      case 'Scissors':
        return Scissors;
      case 'Type':
        return Type;
      default:
        return Sparkles;
    }
  };

  // Assign Kiddino palette to each service card
  const colorThemes = [
    {
      badgeBg: 'bg-[#FEA800]',
      iconBg: 'bg-[#FEA800]',
      checkColor: 'text-[#FEA800] bg-[#FFF9EC]',
      btnClass: 'vs-btn vs-btn-yellow',
      cardBorder: 'hover:border-[#FEA800]/50',
    },
    {
      badgeBg: 'bg-[#FF3F53]',
      iconBg: 'bg-[#FF3F53]',
      checkColor: 'text-[#FF3F53] bg-[#FFF2F4]',
      btnClass: 'vs-btn vs-btn-coral',
      cardBorder: 'hover:border-[#FF3F53]/50',
    },
    {
      badgeBg: 'bg-[#1679E2]',
      iconBg: 'bg-[#1679E2]',
      checkColor: 'text-[#1679E2] bg-[#F0F7FF]',
      btnClass: 'vs-btn vs-btn-blue',
      cardBorder: 'hover:border-[#1679E2]/50',
    },
    {
      badgeBg: 'bg-[#3BB77E]',
      iconBg: 'bg-[#3BB77E]',
      checkColor: 'text-[#3BB77E] bg-[#F0FAF5]',
      btnClass: 'vs-btn vs-btn-green',
      cardBorder: 'hover:border-[#3BB77E]/50',
    },
    {
      badgeBg: 'bg-[#FEA800]',
      iconBg: 'bg-[#FEA800]',
      checkColor: 'text-[#FEA800] bg-[#FFF9EC]',
      btnClass: 'vs-btn vs-btn-yellow',
      cardBorder: 'hover:border-[#FEA800]/50',
    },
    {
      badgeBg: 'bg-[#FF3F53]',
      iconBg: 'bg-[#FF3F53]',
      checkColor: 'text-[#FF3F53] bg-[#FFF2F4]',
      btnClass: 'vs-btn vs-btn-coral',
      cardBorder: 'hover:border-[#FF3F53]/50',
    },
    {
      badgeBg: 'bg-[#1679E2]',
      iconBg: 'bg-[#1679E2]',
      checkColor: 'text-[#1679E2] bg-[#F0F7FF]',
      btnClass: 'vs-btn vs-btn-blue',
      cardBorder: 'hover:border-[#1679E2]/50',
    },
    {
      badgeBg: 'bg-[#FEA800]',
      iconBg: 'bg-[#FEA800]',
      checkColor: 'text-[#FEA800] bg-[#FFF9EC]',
      btnClass: 'vs-btn vs-btn-yellow',
      cardBorder: 'hover:border-[#FEA800]/50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      {/* Playful background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEA800]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1679E2]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FEA800] fill-[#FEA800]" />
            <span>Commercial Digitizing Lab</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            Our <span className="text-[#FEA800]">Digitizing Services</span>
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Precision-engineered embroidery files and clean scalable vector art. Calibrated for real commercial machines with zero thread breakage and perfect pull compensation.
          </p>
        </motion.div>

        {/* Services Cards Grid (8 Services in 4 Columns) with Staggered Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            const theme = colorThemes[idx % colorThemes.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7, transition: { duration: 0.2 } }}
                className={`group relative bg-white rounded-[28px] border-2 border-slate-100 ${theme.cardBorder} shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-shadow transition-colors duration-200 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Card Image & Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.sampleImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2244]/95 via-[#1F2244]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`${theme.badgeBg} text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1F2244] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-[#FEA800]" />
                    <span>{service.turnaround}</span>
                  </div>

                  {/* Icon and Title inside Banner */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-lg flex-shrink-0 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight font-heading">
                        {service.title}
                      </h3>
                      <span className="text-xs text-[#FEA800] font-bold">
                        From {service.startingPrice} / design
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Features List with Kiddino round checks */}
                  <div className="space-y-2.5 pt-1 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className={`w-5 h-5 rounded-full ${theme.checkColor} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Format Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">Formats:</span>
                    {service.formats.map((fmt, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons with Kiddino vs-btn */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#1F2244] bg-slate-100 hover:bg-slate-200 py-3 px-3 rounded-full transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      <span>Details</span>
                    </button>
                    
                    <button
                      onClick={() => onSelectService(service)}
                      className={`${theme.btnClass} justify-center text-xs font-bold !py-2.5 !px-3 shadow-md cursor-pointer`}
                    >
                      <span>Order</span>
                      <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 stroke-[3]" />
                      </span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForQuote={(srv) => {
          setActiveModalService(null);
          onSelectService(srv);
        }}
      />
    </section>
  );
};
