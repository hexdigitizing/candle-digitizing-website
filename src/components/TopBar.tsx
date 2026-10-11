import React from 'react';
import { Mail, Clock, Zap, Phone, Sparkles, User, UserPlus } from 'lucide-react';

interface TopBarProps {
  onNavigateToLogin?: () => void;
  onNavigateToRegister?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onNavigateToLogin,
  onNavigateToRegister,
}) => {
  return (
    <div id="top-announcement-bar" className="bg-[#1F2244] text-white text-xs py-2 px-3 sm:px-4 border-b border-white/10 font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* Left: Contact & Working Hours with Colorful Circular Badges */}
        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center sm:justify-start text-[11px] sm:text-xs">
          <a
            href="mailto:support@candledigitizing.com"
            className="flex items-center gap-1.5 sm:gap-2 text-white/90 hover:text-[#FEA800] transition-colors group"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF3F53] flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
            <span className="font-semibold">support@candledigitizing.com</span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-white/80">
            <span className="w-6 h-6 rounded-full bg-[#3BB77E] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
              <Clock className="w-3.5 h-3.5" />
            </span>
            <span>Mon - Sat: 24/6 Active Production Shift</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[#FEA800]">
            <span className="w-6 h-6 rounded-full bg-[#FEA800]/20 text-[#FEA800] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">99.8% First-Run Pass Guarantee</span>
          </div>
        </div>

        {/* Right: Urgent Rush Badge, Direct Phone & Account Portal links */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <div className="hidden xs:flex items-center gap-1.5 bg-[#FEA800] text-[#1F2244] font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] shadow-sm animate-pulse">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#1F2244]" />
            <span>⚡ Express Rush: 4-8 Hrs</span>
          </div>

          <a
            href="tel:+18005554393"
            className="hidden sm:flex items-center gap-1.5 text-white hover:text-[#FEA800] transition-colors text-xs"
          >
            <span className="w-5 h-5 rounded-full bg-[#1679E2] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
              <Phone className="w-2.5 h-2.5" />
            </span>
            <span className="font-bold">+1 (800) 555-4393</span>
          </a>

          {/* Client Portal Quick Switch Links */}
          {(onNavigateToLogin || onNavigateToRegister) && (
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-white/20 text-[11px] sm:text-xs">
              {onNavigateToLogin && (
                <button
                  type="button"
                  onClick={onNavigateToLogin}
                  className="text-white/90 hover:text-[#FEA800] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <User className="w-3 h-3 text-[#1679E2]" />
                  <span>Log In</span>
                </button>
              )}
              {onNavigateToLogin && onNavigateToRegister && (
                <span className="text-white/30 text-[10px]">|</span>
              )}
              {onNavigateToRegister && (
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="text-[#FEA800] hover:text-white font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <UserPlus className="w-3 h-3 text-[#FEA800]" />
                  <span>Register</span>
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
