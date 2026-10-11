import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            Frequently Asked <span className="text-[#FEA800]">Questions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Everything you need to know about our machine digitizing, vector art conversions, and production guarantees.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[24px] border-2 transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#FEA800] bg-[#FFFDF7] shadow-md' 
                    : 'border-slate-100 bg-[#FAF9F5] hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#1F2244] hover:text-[#FEA800] transition-colors text-base font-heading cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FEA800] text-white rotate-180' : 'bg-white text-slate-400 shadow-sm'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[3]" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-[#FEA800]/20 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
