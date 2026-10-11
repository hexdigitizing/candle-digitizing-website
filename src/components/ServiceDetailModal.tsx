import React from 'react';
import { X, CheckCircle2, Clock, DollarSign, FileCode, ArrowRight, ShieldCheck } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectForQuote: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2244]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#1F2244] rounded-t-[28px]">
          <img
            src={service.sampleImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2244] via-[#1F2244]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-[#1F2244] hover:bg-[#FEA800] hover:text-white p-2.5 rounded-full transition-all shadow-md active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#FEA800] text-[#1F2244] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              {service.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-heading">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#FAF9F5] border-2 border-slate-100 p-4 rounded-2xl">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                <Clock className="w-4 h-4 text-[#FEA800]" />
                <span>Turnaround</span>
              </div>
              <p className="font-bold text-[#1F2244] text-sm mt-1">{service.turnaround}</p>
            </div>

            <div className="bg-[#FAF9F5] border-2 border-slate-100 p-4 rounded-2xl">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                <DollarSign className="w-4 h-4 text-[#3BB77E]" />
                <span>Starting From</span>
              </div>
              <p className="font-bold text-[#1F2244] text-sm mt-1">{service.startingPrice}</p>
            </div>

            <div className="bg-[#FAF9F5] border-2 border-slate-100 p-4 rounded-2xl col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                <FileCode className="w-4 h-4 text-[#1679E2]" />
                <span>Output Formats</span>
              </div>
              <p className="font-bold text-[#1F2244] text-xs mt-1 truncate">
                {service.formats.join(', ')}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#1F2244] uppercase tracking-wider mb-2 font-heading">
              Service Overview & Engineering
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-[#1F2244] uppercase tracking-wider mb-3 font-heading">
              Included Technical Standards
            </h4>
            <div className="space-y-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Applications */}
          <div className="bg-[#FFF3D6] border-2 border-[#FEA800]/30 p-4 rounded-2xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FEA800] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-xs text-[#1F2244] uppercase tracking-wider">
                Recommended For:
              </span>
              <p className="text-xs text-[#1F2244]/80 font-medium mt-0.5">
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-600 hover:text-[#1F2244] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForQuote(service);
                onClose();
              }}
              className="w-full sm:w-auto vs-btn vs-btn-yellow text-sm font-bold shadow-lg shadow-[#FEA800]/25 !py-3 !px-6"
            >
              <span>Select Service & Request Quote</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-sm">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
