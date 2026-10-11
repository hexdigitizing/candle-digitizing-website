import React, { useState, useEffect } from 'react';
import { 
  Search, 
  KeyRound, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Layers, 
  FileCode2, 
  Download, 
  Printer, 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  ChevronRight,
  ExternalLink,
  Package,
  RefreshCw
} from 'lucide-react';
import { CustomerOrder } from '../types';
import { findOrdersByEmailAndPin, getAllOrders, getDemoCredentials } from '../utils/orderStorage';
import { CandleLogo } from './CandleLogo';

interface FindMyOrdersPageProps {
  onBackToHome: () => void;
  initialEmail?: string;
  initialPin?: string;
}

export const FindMyOrdersPage: React.FC<FindMyOrdersPageProps> = ({
  onBackToHome,
  initialEmail = '',
  initialPin = '',
}) => {
  const [emailInput, setEmailInput] = useState(initialEmail);
  const [pinInput, setPinInput] = useState(initialPin);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [matchedOrders, setMatchedOrders] = useState<CustomerOrder[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Auto-search if initial credentials provided (e.g. from Order Form submission)
  useEffect(() => {
    if (initialEmail && initialPin) {
      setEmailInput(initialEmail);
      setPinInput(initialPin);
      performSearch(initialEmail, initialPin);
    }
  }, [initialEmail, initialPin]);

  const performSearch = (email: string, pin: string) => {
    setSearchError(null);
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
      const results = findOrdersByEmailAndPin(email, pin);
      setMatchedOrders(results);
      if (results.length === 0) {
        setSearchError('No orders found matching this Email and PIN. Please double-check your credentials.');
      }
    }, 450);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      setSearchError('Please enter the email address used when placing your order.');
      return;
    }
    if (!pinInput.trim()) {
      setSearchError('Please enter your 4-digit order PIN.');
      return;
    }
    performSearch(emailInput, pinInput);
  };

  const handleFillDemo = (demoEmail: string, demoPin: string) => {
    setEmailInput(demoEmail);
    setPinInput(demoPin);
    performSearch(demoEmail, demoPin);
  };

  const getStatusBadge = (status: CustomerOrder['status']) => {
    switch (status) {
      case 'Received':
        return {
          label: 'Order Received',
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          dot: 'bg-blue-500',
        };
      case 'In Digitizing':
        return {
          label: 'In Digitizing & Pathing',
          bg: 'bg-amber-50 text-amber-800 border-amber-300',
          dot: 'bg-amber-500 animate-pulse',
        };
      case 'Sewout QC':
        return {
          label: 'Sewout QC Testing',
          bg: 'bg-purple-50 text-purple-700 border-purple-200',
          dot: 'bg-purple-500',
        };
      case 'Ready for Download':
      case 'Completed':
        return {
          label: 'Ready for Production',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500',
        };
      default:
        return {
          label: status,
          bg: 'bg-slate-100 text-slate-800 border-slate-200',
          dot: 'bg-slate-500',
        };
    }
  };

  const handleDownloadStub = (order: CustomerOrder) => {
    // Generate a downloadable summary file for the user
    const textContent = `======================================================
CANDLE DIGITIZING - OFFICIAL PRODUCTION SPEC SHEET
======================================================
Order Reference: ${order.id}
Client Name:     ${order.fullName}
Client Email:    ${order.email}
Phone:           ${order.phone}
Company:         ${order.companyName || 'N/A'}
Date Submitted:  ${new Date(order.submittedAt).toLocaleString()}
Current Status:  ${order.status}

SPECIFICATIONS:
- Service Type:     ${order.serviceType}
- Placement:        ${order.placement || 'Standard Placement'}
- Dimensions:       ${order.dimensions}
- Required Format:  ${order.requiredFormat}
- Turnaround Shift: ${order.turnaround}
- Est. Stitches:    ${order.estimatedStitches ? order.estimatedStitches.toLocaleString() : 'Pending final count'}
- Attached File:    ${order.fileName || 'Artwork uploaded'}

SPECIAL OPERATOR INSTRUCTIONS:
${order.notes || 'None specified.'}

======================================================
Production Shift Contact: support@candledigitizing.com
Direct WhatsApp: +1 (800) 555-4393
100% Zero-Break Guarantee • Free Minor Revisions for 30 Days
======================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${order.id}-Production-Worksheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1F2244] hover:text-[#FEA800] bg-white border border-slate-200 hover:border-[#FEA800] px-4 py-2.5 rounded-full shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>Order Tracking Portal</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F2244] font-heading tracking-tight">
            Find My <span className="text-[#FEA800]">Orders</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Enter the email address you ordered with and your <strong>4-digit tracking PIN</strong> to monitor real-time sew-out proofs, stitch density analysis, and download finished machine files.
          </p>
        </div>

        {/* Lookup Card */}
        <div className="bg-white rounded-[32px] border-2 border-slate-100 p-6 sm:p-8 shadow-xl max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearchSubmit} className="space-y-5">
            
            {/* Email Address Input */}
            <div>
              <label htmlFor="lookup-email" className="block text-xs font-bold text-[#1F2244] uppercase tracking-wider mb-2">
                Registered Email Address <span className="text-[#FF3F53]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="lookup-email"
                  type="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl text-sm font-medium text-[#1F2244] placeholder:text-slate-400 focus:outline-none focus:border-[#FEA800] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* 4-Digit Order PIN Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="lookup-pin" className="block text-xs font-bold text-[#1F2244] uppercase tracking-wider">
                  Order Tracking PIN <span className="text-[#FF3F53]">*</span>
                </label>
                <span className="text-[11px] text-slate-500 font-medium">
                  Generated when you placed your order
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  id="lookup-pin"
                  type="text"
                  required
                  maxLength={6}
                  placeholder="e.g. 1234"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl text-sm font-mono font-bold tracking-widest text-[#1F2244] placeholder:text-slate-400 focus:outline-none focus:border-[#FEA800] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Error Message */}
            {searchError && (
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                <span>{searchError}</span>
              </div>
            )}

            {/* Submit Action */}
            <button
              id="submit-find-orders-btn"
              type="submit"
              disabled={isSearching}
              className="w-full vs-btn vs-btn-yellow font-bold text-sm !py-3.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Searching Order Records...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 stroke-[2.5]" />
                  <span>Find My Orders</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Fill Buttons for Testing */}
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
              Quick Test Credentials (Pre-seeded Demo Orders):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('client@example.com', '1234')}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-50 hover:text-[#FEA800] border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>Demo 1: client@example.com (PIN: 1234)</span>
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('candledigitizing@gmail.com', '5521')}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-50 hover:text-[#FEA800] border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>Demo 2: candledigitizing@gmail.com (PIN: 5521)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Search Results Area */}
        {hasSearched && matchedOrders.length > 0 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-[#1F2244] font-heading flex items-center gap-2">
                <span>Matching Orders Found</span>
                <span className="w-6 h-6 rounded-full bg-[#FEA800] text-white text-xs flex items-center justify-center font-bold">
                  {matchedOrders.length}
                </span>
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Verified with PIN
              </span>
            </div>

            {matchedOrders.map((order) => {
              const statusBadge = getStatusBadge(order.status);
              const waText = encodeURIComponent(
                `Hi Candle Digitizing! Regarding my order ${order.id} (PIN ${order.pin}): I would like an update on ${order.serviceType}.`
              );

              return (
                <div 
                  key={order.id}
                  className="bg-white rounded-[32px] border-2 border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Order Top Banner */}
                  <div className="bg-[#1F2244] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-base sm:text-xl font-black font-mono text-[#FEA800]">
                          #{order.id}
                        </span>
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${statusBadge.bg}`}>
                          <span className={`w-2 h-2 rounded-full ${statusBadge.dot}`} />
                          <span>{statusBadge.label}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300">
                        Placed by <strong>{order.fullName}</strong> on {new Date(order.submittedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    <div className="text-left sm:text-right space-y-0.5">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                        Estimated Completion
                      </span>
                      <span className="text-sm font-black text-[#FEA800] flex items-center gap-1.5 sm:justify-end">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{order.estimatedCompletion}</span>
                      </span>
                    </div>
                  </div>

                  {/* Order Details Body */}
                  <div className="p-6 sm:p-8 space-y-8">
                    
                    {/* Multi-Step Timeline Tracker */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#1F2244] mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#FEA800]" />
                        <span>Live Production Lifecycle</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {order.timeline.map((step, sIdx) => {
                          const isDone = step.status === 'completed';
                          const isCurrent = step.status === 'current';

                          return (
                            <div 
                              key={sIdx}
                              className={`p-4 rounded-2xl border-2 transition-all ${
                                isDone 
                                  ? 'bg-[#F0FAF5] border-[#3BB77E]/30 text-[#1F2244]' 
                                  : isCurrent 
                                    ? 'bg-[#FFF9EC] border-[#FEA800] ring-2 ring-[#FEA800]/20 text-[#1F2244]' 
                                    : 'bg-slate-50 border-slate-200 opacity-60 text-slate-500'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                  isDone 
                                    ? 'bg-[#3BB77E] text-white' 
                                    : isCurrent 
                                      ? 'bg-[#FEA800] text-white animate-pulse' 
                                      : 'bg-slate-200 text-slate-600'
                                }`}>
                                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : sIdx + 1}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">{step.timestamp}</span>
                              </div>
                              <h4 className="text-xs font-bold font-heading mb-1">{step.title}</h4>
                              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Order Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Service Type</span>
                        <span className="font-extrabold text-[#1F2244]">{order.serviceType}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Target Dimensions</span>
                        <span className="font-extrabold text-[#1F2244]">{order.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Machine Format</span>
                        <span className="font-extrabold text-[#1F2244]">{order.requiredFormat}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Turnaround Shift</span>
                        <span className="font-extrabold text-[#FEA800]">{order.turnaround}</span>
                      </div>
                      {order.estimatedStitches && (
                        <div>
                          <span className="text-slate-400 font-bold block mb-1">Est. Stitch Count</span>
                          <span className="font-extrabold text-[#3BB77E]">{order.estimatedStitches.toLocaleString()} Stitches</span>
                        </div>
                      )}
                      {order.fileName && (
                        <div>
                          <span className="text-slate-400 font-bold block mb-1">Source Artwork File</span>
                          <span className="font-extrabold text-[#1F2244] truncate block" title={order.fileName}>
                            {order.fileName} {order.fileSize ? `(${order.fileSize})` : ''}
                          </span>
                        </div>
                      )}
                      {order.placement && (
                        <div>
                          <span className="text-slate-400 font-bold block mb-1">Garment Placement</span>
                          <span className="font-extrabold text-[#1F2244]">{order.placement}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Tracking PIN</span>
                        <span className="font-mono font-black text-[#FEA800]">{order.pin}</span>
                      </div>
                    </div>

                    {/* Notes if present */}
                    {order.notes && (
                      <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs">
                        <span className="font-bold text-slate-500 block mb-1">Submitted Instructions:</span>
                        <p className="text-slate-700 italic">"{order.notes}"</p>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-[#3BB77E]" />
                        <span>Files tested on Tajima &amp; Barudan commercial heads</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => handleDownloadStub(order)}
                          className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#1F2244] px-4 py-2.5 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Spec Sheet</span>
                        </button>

                        <a
                          href={`https://wa.me/18005554393?text=${waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vs-btn vs-btn-green text-xs font-bold !py-2.5 !px-4 flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Order Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State When Searched with No Match */}
        {hasSearched && matchedOrders.length === 0 && (
          <div className="bg-white rounded-[32px] border-2 border-slate-200 p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4 shadow-lg animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2244] font-heading">
              No Orders Found
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We couldn't locate any orders registered under <strong>{emailInput}</strong> with PIN <strong>{pinInput}</strong>.
            </p>
            <div className="bg-[#FAF9F5] p-4 rounded-2xl text-xs text-slate-600 text-left space-y-2 border border-slate-200">
              <p className="font-bold text-[#1F2244]">Troubleshooting Tips:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>Check if you typed the email exactly as submitted.</li>
                <li>Make sure you used the 4-digit PIN displayed on your order confirmation.</li>
                <li>Try clicking one of the demo buttons above to verify functionality.</li>
              </ul>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onBackToHome}
                className="vs-btn vs-btn-yellow text-xs font-bold !py-2.5 !px-5"
              >
                Place a New Order
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
