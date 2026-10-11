import React from 'react';
import { 
  Award, 
  Clock, 
  Sparkles, 
  RefreshCw, 
  FileCode, 
  Cpu, 
  DollarSign, 
  Headphones,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/mockData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'Clock':
        return Clock;
      case 'Sparkles':
        return Sparkles;
      case 'RefreshCw':
        return RefreshCw;
      case 'FileCode':
        return FileCode;
      case 'Cpu':
        return Cpu;
      case 'DollarSign':
        return DollarSign;
      case 'Headphones':
        return Headphones;
      default:
        return Sparkles;
    }
  };

  const getTheme = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-[#F0F7FF]',
          border: 'border-[#1679E2]/30 hover:border-[#1679E2]',
          iconBg: 'bg-[#1679E2]',
          text: 'text-[#1679E2]'
        };
      case 'coral':
        return {
          bg: 'bg-[#FFF2F4]',
          border: 'border-[#FF3F53]/30 hover:border-[#FF3F53]',
          iconBg: 'bg-[#FF3F53]',
          text: 'text-[#FF3F53]'
        };
      case 'yellow':
        return {
          bg: 'bg-[#FFF9EC]',
          border: 'border-[#FEA800]/30 hover:border-[#FEA800]',
          iconBg: 'bg-[#FEA800]',
          text: 'text-[#FEA800]'
        };
      case 'green':
        return {
          bg: 'bg-[#F0FAF5]',
          border: 'border-[#3BB77E]/30 hover:border-[#3BB77E]',
          iconBg: 'bg-[#3BB77E]',
          text: 'text-[#3BB77E]'
        };
      default:
        return {
          bg: 'bg-[#FFF9EC]',
          border: 'border-[#FEA800]/30 hover:border-[#FEA800]',
          iconBg: 'bg-[#FEA800]',
          text: 'text-[#FEA800]'
        };
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>THE CANDLE DIGITIZING DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            Why Choose Our <span className="text-[#FEA800]">Digitizing Studio?</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We operate as an extension of your embroidery floor. Our files are engineered to save your operators machine time, prevent snapped needles, and eliminate garment re-hooping.
          </p>
        </div>

        {/* 8 Features Grid in 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const theme = getTheme(item.color);
            const Icon = getIcon(item.icon);

            return (
              <div
                key={idx}
                className={`${theme.bg} border-2 ${theme.border} rounded-[28px] p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2244] font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-[#1F2244]">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${theme.text}`} />
                  <span>Quality Assured</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuote}
            className="vs-btn vs-btn-yellow text-sm font-bold shadow-lg shadow-[#FEA800]/25 !py-3.5 !px-8 inline-flex items-center gap-2"
          >
            <span>START YOUR FIRST DESIGN WITH US</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
