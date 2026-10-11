import React from 'react';
import { Mail, Phone, Clock, ArrowUp, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import navLogo from '../assets/images/cad_logo.png';

interface FooterProps {
  onNavigateToFindOrders?: () => void;
  onOpenQuote?: () => void;
  onNavigateToLogin?: () => void;
  onNavigateToRegister?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateToFindOrders, 
  onOpenQuote,
  onNavigateToLogin,
  onNavigateToRegister
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEstimateClick = (e: React.MouseEvent) => {
    if (onOpenQuote) {
      e.preventDefault();
      onOpenQuote();
    }
  };

  return (
    <footer className="bg-[#171933] text-slate-400 text-xs border-t-4 border-[#FEA800]">
      
      {/* Top Banner Callout in Kiddino index-4 style */}
      <div className="bg-[#1F2244] py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#FEA800]/20 text-[#FEA800] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ZERO-BREAK GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to eliminate thread breaks and machine downtime?
            </h3>
            <p className="text-sm text-slate-300 font-normal">
              Send your design to our master digitizers today. Rush delivery available within 4 to 8 hours.
            </p>
          </div>

          <button
            type="button"
            onClick={handleEstimateClick}
            className="vs-btn vs-btn-yellow text-sm font-bold flex-shrink-0 !py-3.5 !px-7 cursor-pointer"
          >
            <span>Request Free Sew-out Estimate</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Studio Name & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-3 inline-block shadow-lg">
             
              <img
  src={navLogo}
  alt="Candle Digitizing Logo"
  className="h-20 sm:h-24 md:h-22 lg:h-20 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[360px]"
/>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-normal">
              Professional embroidery digitizing and vector art studio. We deliver production-ready, machine-tested files calibrated for zero thread breaks, clean 3D foam capping, and smooth high-speed runs.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href="mailto:support@candledigitizing.com"
                className="flex items-center gap-2 hover:text-white transition-colors text-[#FEA800] font-bold"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@candledigitizing.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Phone className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <span>+1 (800) 555-4393</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-4 h-4 flex-shrink-0 text-[#3BB77E]" />
                <span>Business Hours: 24/7 Active Production Support</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#3BB77E] text-xs font-bold pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Over 50,000 files digitized with 99.8% first-run pass rate</span>
            </div>
          </div>

          {/* Middle Column 1: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Embroidery Digitizing</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Logo Digitizing</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">3D Puff Digitizing</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Cap Digitizing</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Jacket Back Digitizing</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Vector Art Services</a></li>
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Custom Patches</a></li>
            </ul>
          </div>

          {/* Middle Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><a href="#hero-section" className="hover:text-[#FEA800] transition-colors">Home</a></li>
              <li>
                {onNavigateToFindOrders ? (
                  <button 
                    onClick={onNavigateToFindOrders}
                    className="hover:text-[#FEA800] transition-colors text-left font-bold text-[#FEA800] cursor-pointer"
                  >
                    Find My Orders (PIN)
                  </button>
                ) : (
                  <a href="#find-orders" className="hover:text-[#FEA800] transition-colors font-bold text-[#FEA800]">Find My Orders</a>
                )}
              </li>
              {onNavigateToLogin && (
                <li>
                  <button
                    onClick={onNavigateToLogin}
                    className="hover:text-[#FEA800] transition-colors text-left font-semibold text-slate-300 cursor-pointer"
                  >
                    Client Sign In
                  </button>
                </li>
              )}
              {onNavigateToRegister && (
                <li>
                  <button
                    onClick={onNavigateToRegister}
                    className="hover:text-[#FEA800] transition-colors text-left font-semibold text-slate-300 cursor-pointer"
                  >
                    Create Account / Register
                  </button>
                </li>
              )}
              <li><a href="#services" className="hover:text-[#FEA800] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#FEA800] transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-[#FEA800] transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FEA800] transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-[#FEA800] transition-colors">FAQ</a></li>
              <li><a href="#order" className="hover:text-[#FEA800] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Middle Column 3: Supported Formats (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Supported Formats
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
              Commercial machine files compatible with Tajima, Barudan, Brother, Melco, Janome, SWF, Ricoma, and ZSK:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['DST', 'PES', 'JEF', 'EXP', 'VP3', 'EMB', 'AI', 'EPS', 'SVG', 'PDF'].map((fmt) => (
                <span key={fmt} className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[10px] font-bold">
                  .{fmt}
                </span>
              ))}
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mt-3 text-[11px] text-slate-300">
              <span className="font-bold text-[#FEA800]">Free Format Conversions:</span> Need extra formats? Request them anytime at no additional fee.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Candle Digitizing Studio. All rights reserved.</p>
          <p className="text-slate-300 font-semibold">
            Designed for Professional Embroidery Businesses
          </p>
          <div className="flex items-center gap-4">
            <a href="#order" className="hover:text-white">Privacy Policy</a>
            <a href="#order" className="hover:text-white">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#FEA800] transition-colors py-1 cursor-pointer font-bold ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
