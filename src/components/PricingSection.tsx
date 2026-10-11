import React from 'react';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
  onOpenQuote: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenQuote }) => {
  const getPlanTheme = (color: string, popular?: boolean) => {
    if (popular) {
      return {
        cardBorder: 'border-3 border-[#FEA800] ring-4 ring-[#FEA800]/20 shadow-2xl',
        badgeBg: 'bg-[#FEA800]',
        btnClass: 'vs-btn vs-btn-yellow shadow-lg shadow-[#FEA800]/30',
        checkColor: 'text-[#FEA800] bg-[#FFF9EC]',
        headerBg: 'bg-[#FFF9EC]'
      };
    }
    switch (color) {
      case 'blue':
        return {
          cardBorder: 'border-2 border-slate-200 hover:border-[#1679E2]',
          badgeBg: 'bg-[#1679E2]',
          btnClass: 'vs-btn vs-btn-blue shadow-md',
          checkColor: 'text-[#1679E2] bg-[#F0F7FF]',
          headerBg: 'bg-[#F0F7FF]'
        };
      case 'coral':
        return {
          cardBorder: 'border-2 border-slate-200 hover:border-[#FF3F53]',
          badgeBg: 'bg-[#FF3F53]',
          btnClass: 'vs-btn vs-btn-coral shadow-md',
          checkColor: 'text-[#FF3F53] bg-[#FFF2F4]',
          headerBg: 'bg-[#FFF2F4]'
        };
      case 'green':
        return {
          cardBorder: 'border-2 border-slate-200 hover:border-[#3BB77E]',
          badgeBg: 'bg-[#3BB77E]',
          btnClass: 'vs-btn vs-btn-green shadow-md',
          checkColor: 'text-[#3BB77E] bg-[#F0FAF5]',
          headerBg: 'bg-[#F0FAF5]'
        };
      default:
        return {
          cardBorder: 'border-2 border-slate-200 hover:border-[#FEA800]',
          badgeBg: 'bg-[#FEA800]',
          btnClass: 'vs-btn vs-btn-yellow shadow-md',
          checkColor: 'text-[#FEA800] bg-[#FFF9EC]',
          headerBg: 'bg-[#FFF9EC]'
        };
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Kiddino Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FEA800] fill-[#FEA800]" />
            <span>TRANSPARENT VALUE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            Simple & <span className="text-[#FEA800]">Transparent Pricing</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            No surprise setup charges, zero per-color fees, and free minor revisions for 30 days. Choose the tier that matches your design complexity.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const theme = getPlanTheme(plan.color, plan.popular);
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${theme.cardBorder} hover:-translate-y-1`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FEA800] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Header of Card */}
                  <div className="pb-4 border-b border-slate-100">
                    <span className={`${theme.badgeBg} text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2 shadow-xs`}>
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#1F2244] font-heading">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-slate-400">Starting at</span>
                      <span className="text-3xl sm:text-4xl font-black text-[#1F2244] font-heading">
                        {plan.startingPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#FEA800]" />
                      <span>{plan.turnaround}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2 pb-6 border-t border-slate-100">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className={`w-4 h-4 rounded-full ${theme.checkColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (onSelectPlan) onSelectPlan(plan.id);
                      onOpenQuote(plan.name);
                    }}
                    className={`w-full ${theme.btnClass} text-xs font-bold !py-3 flex items-center justify-center gap-1.5 cursor-pointer`}
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    {plan.ideal}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Pricing Note Container */}
        <div className="mt-12 bg-white rounded-[28px] p-6 sm:p-8 border-2 border-slate-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FEA800]/15 text-[#FEA800] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#1F2244] font-heading">
                How Our Pricing Works (No Hidden Fees)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
                Pricing is calculated strictly by design complexity and stitch count. Simple left-chest logos are $12, medium-detail 3D puff designs are $18, and oversized jacket backs start at $35. Minor revisions, scale adjustments up to 15%, and color sequences are always 100% free of charge.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="vs-btn vs-btn-yellow text-xs sm:text-sm font-bold flex-shrink-0 !py-3 !px-6 cursor-pointer"
          >
            <span>Custom Stitch Quote</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
