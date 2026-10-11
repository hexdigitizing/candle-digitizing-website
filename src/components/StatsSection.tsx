import React from 'react';
import { CheckCircle2, Heart, Clock, Layers, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

export const StatsSection: React.FC = () => {
  const getStatTheme = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          cardBg: 'bg-[#F0F7FF]',
          borderColor: 'border-[#1679E2]/30',
          numberColor: 'text-[#1679E2]',
          iconBg: 'bg-[#1679E2]',
          icon: CheckCircle2
        };
      case 'coral':
        return {
          cardBg: 'bg-[#FFF2F4]',
          borderColor: 'border-[#FF3F53]/30',
          numberColor: 'text-[#FF3F53]',
          iconBg: 'bg-[#FF3F53]',
          icon: Heart
        };
      case 'yellow':
        return {
          cardBg: 'bg-[#FFF9EC]',
          borderColor: 'border-[#FEA800]/30',
          numberColor: 'text-[#FEA800]',
          iconBg: 'bg-[#FEA800]',
          icon: Clock
        };
      case 'green':
        return {
          cardBg: 'bg-[#F0FAF5]',
          borderColor: 'border-[#3BB77E]/30',
          numberColor: 'text-[#3BB77E]',
          iconBg: 'bg-[#3BB77E]',
          icon: Layers
        };
      default:
        return {
          cardBg: 'bg-[#FFF9EC]',
          borderColor: 'border-[#FEA800]/30',
          numberColor: 'text-[#FEA800]',
          iconBg: 'bg-[#FEA800]',
          icon: Sparkles
        };
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Kiddino accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const theme = getStatTheme(stat.color);
            const Icon = theme.icon;

            return (
              <div
                key={stat.id}
                className={`${theme.cardBg} border-2 ${theme.borderColor} rounded-[28px] p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <div className={`text-4xl sm:text-5xl font-black ${theme.numberColor} font-heading tracking-tight mb-1`}>
                    {stat.value}
                  </div>
                  <h3 className="text-base font-bold text-[#1F2244] font-heading mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
