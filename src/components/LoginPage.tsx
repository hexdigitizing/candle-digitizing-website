import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  AlertCircle, 
  Info, 
  Check, 
  HelpCircle
} from 'lucide-react';
import navLogo from '../assets/images/cad_logo.png';
import { CloudScallopDivider } from './CloudScallopDivider';
import { EmbroideryDigitizeTexture } from './EmbroideryDigitizeTexture';

interface LoginPageProps {
  onBackToHome: () => void;
  onNavigateToRegister: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onBackToHome,
  onNavigateToRegister,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

  // Submission feedback banner state
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState<string | null>(null);

  // Email format validation helper
  const validateEmail = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleBlur = (field: 'email' | 'password') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: 'email' | 'password') => {
    const newErrors = { ...errors };

    if (field === 'email') {
      if (!email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!validateEmail(email)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'password') {
      if (!password) {
        newErrors.password = 'Password is required';
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Valid frontend submission
      setSubmissionMessage('Authentication is not connected yet.');
      setForgotPasswordNotice(null);
    } else {
      setSubmissionMessage(null);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setForgotPasswordNotice(
      'Password reset is not connected yet. Please contact support@candledigitizing.com for assistance.'
    );
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#E1E5EB] py-6 sm:py-10 md:py-14 px-3 sm:px-6 lg:px-8 flex items-center justify-center font-body">
      
      {/* Outer Card: Rounded corners matching reference image */}
      <div className="w-full max-w-4xl lg:max-w-[990px] bg-white rounded-3xl sm:rounded-[36px] shadow-2xl shadow-slate-500/20 overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* ================= 1. LEFT VIVID BLUE WELCOME PANEL ================= */}
        {/* Responsive padding: safe bottom padding on mobile (pb-16 sm:pb-20) to prevent bottom cutting,
            and balanced horizontal padding on desktop with dedicated centered inner wrapper to prevent right clipping */}
        <div className="w-full lg:w-[46%] xl:w-[45%] bg-gradient-to-b from-[#0D55C8] via-[#156FE5] to-[#1E88E5] text-white pt-6 sm:pt-8 pb-16 sm:pb-20 lg:py-10 px-5 sm:px-8 lg:px-7 xl:px-8 relative overflow-hidden flex flex-col justify-between min-h-0 lg:min-h-[590px]">
          
          {/* Faded Commercial Embroidery Digitize Texture (Sew-outs + CAD stitch vectors) */}
          <EmbroideryDigitizeTexture />

          {/* Multi-layered Scalloped Cloud Divider on the right edge (desktop) and bottom edge (mobile) */}
          <CloudScallopDivider />

          {/* Content Wrapper: Perfectly centered and protected from scallop divider on desktop and mobile */}
          <div className="relative z-20 w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[300px] xl:max-w-[330px] mx-auto flex flex-col justify-between h-full min-h-[460px] lg:min-h-[520px]">

            {/* Top: Home Link & Welcome Heading */}
            <div className="w-full space-y-2.5">
              <div className="flex items-center justify-start">
                <button
                  onClick={onBackToHome}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
              </div>

              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-wide text-white drop-shadow-sm">
                  Welcome to
                </h2>
              </div>
            </div>

            {/* Center: Brand Logo (Enlarged, same as Navbar rectangular badge, NOT circular) + Supporting description */}
            <div className="text-center my-4 sm:my-6 space-y-3.5 sm:space-y-4 w-full">
              
              {/* Candle Digitizing enlarged logo badge matching Navbar */}
              <div className="inline-block mx-auto">
                <div className="bg-white rounded-2xl sm:rounded-3xl py-3 sm:py-4 px-5 sm:px-7 shadow-xl shadow-blue-950/25 inline-flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/70">
                  <img
                    src={navLogo}
                    alt="Candle Digitizing Logo"
                    className="h-12 xs:h-14 sm:h-16 lg:h-17 xl:h-18 w-auto max-w-[210px] xs:max-w-[240px] sm:max-w-[270px] lg:max-w-[290px] xl:max-w-[310px] object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Supporting description properly centered without being cut */}
              <p className="text-xs sm:text-xs text-white/95 max-w-[270px] sm:max-w-[290px] mx-auto leading-relaxed font-normal drop-shadow-sm">
                Commercial embroidery digitizing and vector conversion portal. Production-ready DST files, quick sew-outs, and 24/7 dedicated studio support.
              </p>
            </div>

            {/* Bottom: Support Desk & Track Orders - raised with safe margin above the mobile cloud curve */}
            <div className="pt-2 sm:pt-4 pb-1 sm:pb-2 text-center w-full">
              <div className="text-[10px] sm:text-[11px] font-semibold text-white/90 tracking-wider uppercase flex items-center justify-center gap-2">
                <span className="hover:text-white transition-colors cursor-default">SUPPORT DESK</span>
                <span className="text-white/40">|</span>
                <span className="hover:text-white transition-colors cursor-default">TRACK ORDERS</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= 2. RIGHT AUTHENTICATION FORM PANEL ================= */}
        <div className="w-full lg:w-[54%] xl:w-[55%] bg-white p-6 sm:p-9 lg:p-12 flex flex-col justify-center">
          
          <div className="max-w-md mx-auto w-full space-y-5 sm:space-y-6">
            
            {/* Form Title matching Reference Image */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Sign in to your account
              </h1>
            </div>

            {/* Frontend Submission Notice Banner */}
            {submissionMessage && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#FEA800] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-amber-950">
                      {submissionMessage}
                    </p>
                    <p className="text-amber-800 mt-0.5 leading-relaxed">
                      Frontend demonstration. No backend authentication API was called and no credentials were stored.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Forgot Password Notice */}
            {forgotPasswordNotice && (
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-[#0D55C8] text-xs flex items-start gap-2">
                <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0D55C8]" />
                <p className="leading-relaxed">{forgotPasswordNotice}</p>
              </div>
            )}

            {/* Minimalist Form with Clean Underline Inputs */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              
              {/* E-mail Address Input */}
              <div className="space-y-1">
                <label 
                  htmlFor="login-email" 
                  className="block text-xs sm:text-sm font-semibold text-slate-700"
                >
                  E-mail Adress
                </label>
                <div className="relative">
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email) validateField('email');
                    }}
                    onBlur={() => handleBlur('email')}
                    placeholder="Enter your mail"
                    className={`w-full pb-2 pt-1 text-sm bg-transparent border-b-2 transition-colors text-slate-800 placeholder-slate-400 focus:outline-none ${
                      touched.email && errors.email
                        ? 'border-[#FF3F53]'
                        : 'border-sky-300 focus:border-[#156FE5]'
                    }`}
                  />
                  <span className="absolute right-0 bottom-2 text-sky-400 pointer-events-none">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
                {touched.email && errors.email && (
                  <p className="text-[11px] font-semibold text-[#FF3F53] flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="login-password" 
                    className="block text-xs sm:text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs font-semibold text-[#156FE5] hover:text-[#0D55C8] hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (touched.password) validateField('password');
                    }}
                    onBlur={() => handleBlur('password')}
                    placeholder="Enter your password"
                    className={`w-full pb-2 pt-1 pr-7 text-sm bg-transparent border-b-2 transition-colors text-slate-800 placeholder-slate-400 focus:outline-none ${
                      touched.password && errors.password
                        ? 'border-[#FF3F53]'
                        : 'border-sky-300 focus:border-[#156FE5]'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 bottom-2 text-sky-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-slate-500" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p className="text-[11px] font-semibold text-[#FF3F53] flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Remember this device checkbox */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#156FE5] focus:ring-[#156FE5] border-slate-300 cursor-pointer"
                  />
                  <span>Remember this device on this browser</span>
                </label>
              </div>

              {/* Action Buttons matching Reference Image: Side-by-side rounded pill buttons */}
              <div className="flex items-center gap-3 pt-3">
                {/* Primary Button: Vivid Blue Gradient Pill */}
                <button
                  type="submit"
                  className="px-8 sm:px-10 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#0D55C8] to-[#1E88E5] text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Sign In
                </button>

                {/* Secondary Button: Clean Outline Pill leading to Register */}
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-semibold transition-all cursor-pointer"
                >
                  Sign Up
                </button>
              </div>

            </form>

            {/* Quick helper note */}
            <div className="text-center pt-2 text-[11px] text-slate-400">
              Need help placing an order directly?{' '}
              <button
                type="button"
                onClick={onBackToHome}
                className="text-[#156FE5] font-semibold hover:underline cursor-pointer"
              >
                Go to Homepage
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
