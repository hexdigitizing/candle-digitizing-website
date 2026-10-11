import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall, Sparkles, Search, Package, User, UserPlus } from 'lucide-react';
import navLogo from '../assets/images/cad_logo.png';

interface NavbarProps {
  onOpenOrder?: () => void;
  onOpenQuote: () => void;
  currentView?: 'home' | 'find-orders' | 'login' | 'register';
  onNavigateToHome?: () => void;
  onNavigateToFindOrders?: () => void;
  onNavigateToLogin?: () => void;
  onNavigateToRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenOrder,
  onOpenQuote,
  currentView = 'home',
  onNavigateToHome,
  onNavigateToFindOrders,
  onNavigateToLogin,
  onNavigateToRegister
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOrderClick = () => {
    if (onOpenOrder) {
      onOpenOrder();
    } else {
      onOpenQuote();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#', isHome: true },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#order' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { label: string; href: string; isHome?: boolean }) => {
    if (link.isHome && onNavigateToHome) {
      e.preventDefault();
      onNavigateToHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (currentView !== 'home' && onNavigateToHome) {
      // If we are on another page (find-orders, login, register) and clicking a hash link, go back to home first
      onNavigateToHome();
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-40 w-full py-1.5 sm:py-2 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/60 border-slate-200'
          : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 min-w-0">
          
          {/* Brand Logo - Responsive sizing to prevent mobile crowding */}
          <a 
            href="#" 
            onClick={(e) => {
              if (onNavigateToHome) {
                e.preventDefault();
                onNavigateToHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center group py-0.5 flex-shrink min-w-0"
            aria-label="Candle Digitizing - Home"
          >
            <img
              src={navLogo}
              alt="Candle Digitizing Logo"
              className="h-10 xs:h-11 sm:h-13 md:h-15 lg:h-16 w-auto max-w-[130px] xs:max-w-[155px] sm:max-w-[210px] md:max-w-[260px] object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-xs xl:text-sm font-bold px-2.5 xl:px-3 py-1.5 rounded-full transition-all ${
                  link.isHome && currentView === 'home'
                    ? 'text-[#1F2244] bg-slate-100'
                    : 'text-slate-700 hover:text-[#FEA800] hover:bg-amber-50/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Clean, compact desktop buttons) */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Find My Orders Button */}
            {onNavigateToFindOrders && (
              <button
                id="nav-find-orders-btn"
                type="button"
                onClick={onNavigateToFindOrders}
                className={`text-[11px] font-bold px-2.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'find-orders'
                    ? 'bg-[#1F2244] text-white border-[#1F2244] shadow-md'
                    : 'bg-[#FFF9EC] text-[#1F2244] hover:bg-amber-100/80 border-[#FEA800]/50 shadow-sm'
                }`}
                title="Search and track your orders with email and PIN"
              >
                <Search className={`w-3 h-3 ${currentView === 'find-orders' ? 'text-[#FEA800]' : 'text-[#FEA800]'}`} />
                <span>Find My Orders</span>
              </button>
            )}

            {/* Client Portal Login Button */}
            {onNavigateToLogin && (
              <button
                id="nav-login-btn"
                type="button"
                onClick={onNavigateToLogin}
                className={`text-[11px] font-bold px-2.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'login' || currentView === 'register'
                    ? 'bg-[#1F2244] text-white border-[#1F2244] shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:text-[#1679E2] hover:bg-blue-50/70 border-slate-200 shadow-sm'
                }`}
                title="Client Portal Login & Registration"
              >
                <User className="w-3 h-3 text-[#1679E2]" />
                <span>Log In</span>
              </button>
            )}

            <a
              href="mailto:support@candledigitizing.com"
              className="text-[11px] font-bold text-slate-700 hover:text-[#1679E2] px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <span className="w-4 h-4 rounded-full bg-[#1679E2] text-white flex items-center justify-center text-[9px]">
                <PhoneCall className="w-2.5 h-2.5" />
              </span>
              <span>Direct Desk</span>
            </a>

            {/* Get Quote Pill Button */}
            <button
              id="nav-get-quote-btn"
              type="button"
              onClick={onOpenQuote}
              className="text-[11px] font-bold text-[#1679E2] hover:text-white px-2.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#1679E2] border border-[#1679E2]/30 transition-all flex items-center gap-1 cursor-pointer shadow-sm"
              title="Request Free Stitch Quote & Sew-out Estimate"
            >
              <Sparkles className="w-3 h-3" />
              <span>Get Quote</span>
            </button>

            {/* Kiddino Pill Button for Order Now */}
            <button
              id="nav-order-now-btn"
              type="button"
              onClick={handleOrderClick}
              className="group vs-btn vs-btn-yellow text-xs font-bold shadow-md shadow-[#FEA800]/25 hover:shadow-lg hover:shadow-[#FEA800]/35 transition-all !py-1.5 !px-3.5 cursor-pointer flex items-center gap-1.5"
            >
              <span>ORDER NOW</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#FEA800] flex items-center justify-center group-hover:translate-x-0.5 group-hover:rotate-45 transition-all shadow-sm">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Mobile Action Controls & Hamburger (Protected from cropping) */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-1.5 flex-shrink-0">
            {onNavigateToFindOrders && (
              <button
                onClick={onNavigateToFindOrders}
                className="text-[11px] font-bold px-2 py-1 rounded-full bg-[#FFF9EC] border border-[#FEA800]/40 text-[#1F2244] flex items-center gap-1 shadow-sm flex-shrink-0"
                title="Track Orders"
              >
                <Search className="w-3 h-3 text-[#FEA800]" />
                <span className="hidden xs:inline text-[10px]">Orders</span>
              </button>
            )}
            <button
              id="nav-mobile-quote-btn"
              type="button"
              onClick={onOpenQuote}
              className="bg-blue-50 border border-[#1679E2]/40 text-[#1679E2] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm font-heading flex-shrink-0 hover:bg-blue-100 transition-colors"
            >
              Quote
            </button>
            <button
              id="nav-mobile-order-btn"
              type="button"
              onClick={handleOrderClick}
              className="bg-[#FEA800] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase font-heading flex-shrink-0 hover:bg-[#e09400] transition-colors"
            >
              Order
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70 transition-colors focus:outline-none flex-shrink-0 ml-0.5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-1">
              {/* Find My Orders highlight button for mobile */}
              {onNavigateToFindOrders && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToFindOrders();
                  }}
                  className="w-full text-left flex items-center justify-between text-base font-bold text-[#1F2244] bg-[#FFF9EC] border border-[#FEA800]/50 px-4 py-3 rounded-2xl transition-colors shadow-sm mb-1"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#FEA800] text-white flex items-center justify-center shadow-sm">
                      <Search className="w-4 h-4" />
                    </span>
                    <span>Find My Orders (Email &amp; PIN)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FEA800]" />
                </button>
              )}

              {/* Client Portal Login & Register buttons for mobile */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                {onNavigateToLogin && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToLogin();
                    }}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl border transition-colors cursor-pointer ${
                      currentView === 'login'
                        ? 'bg-[#1F2244] text-white border-[#1F2244]'
                        : 'bg-blue-50/70 text-[#1679E2] border-blue-200/70 hover:bg-blue-100'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-[#1679E2]" />
                    <span>Client Log In</span>
                  </button>
                )}

                {onNavigateToRegister && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToRegister();
                    }}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl border transition-colors cursor-pointer ${
                      currentView === 'register'
                        ? 'bg-[#1F2244] text-white border-[#1F2244]'
                        : 'bg-amber-50/70 text-[#FEA800] border-amber-200/70 hover:bg-amber-100'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5 text-[#FEA800]" />
                    <span>Sign Up</span>
                  </button>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link);
                  }}
                  className="text-base font-bold text-slate-800 hover:text-[#FEA800] hover:bg-amber-50/60 px-4 py-2.5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-500 px-3">
                <ShieldCheck className="w-4 h-4 text-[#3BB77E]" />
                <span>Tested on Tajima, Barudan & Brother machines</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full vs-btn vs-btn-blue justify-center text-sm font-bold shadow-md !py-3 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Quote &amp; Sewout Estimate</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOrderClick();
                }}
                className="w-full vs-btn vs-btn-yellow justify-center text-sm font-bold shadow-md !py-3 cursor-pointer"
              >
                <span>Place Full Production Order</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <a
                href="mailto:support@candledigitizing.com"
                className="text-center text-xs font-bold text-slate-600 hover:text-[#FEA800] py-1"
              >
                Direct Email: support@candledigitizing.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

