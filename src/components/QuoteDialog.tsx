import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  MessageCircle,
  HelpCircle,
  Scissors,
  Check,
  Zap,
  Info
} from 'lucide-react';

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlacement?: string;
  onOpenFullOrder?: () => void;
}

export const QuoteDialog: React.FC<QuoteDialogProps> = ({
  isOpen,
  onClose,
  defaultPlacement,
  onOpenFullOrder
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [placement, setPlacement] = useState(defaultPlacement || 'Left Chest');
  const [targetWidth, setTargetWidth] = useState('3.5"');
  const [targetHeight, setTargetHeight] = useState('Auto proportional');
  const [fabricType, setFabricType] = useState('Pique Polo');
  const [turnaround, setTurnaround] = useState<'standard' | 'rush'>('standard');
  const [notes, setNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState('');

  const placementOptions = [
    { label: 'Left Chest', estStitches: '6,000 - 10,000', price: '$12' },
    { label: '3D Puff Cap', estStitches: '10,000 - 16,000', price: '$18' },
    { label: 'Standard Hat / Cap', estStitches: '7,000 - 12,000', price: '$14' },
    { label: 'Jacket Back', estStitches: '35,000 - 80,000', price: '$35+' },
    { label: 'Custom Patch / Crest', estStitches: '12,000 - 20,000', price: '$16' },
    { label: 'Sleeve / Collar', estStitches: '4,000 - 8,000', price: '$12' },
    { label: 'Towel / Fleece / Apron', estStitches: '8,000 - 15,000', price: '$15' },
    { label: 'Other / Custom Size', estStitches: 'Variable', price: 'Custom' }
  ];

  const fabricOptions = [
    'Pique Polo / Jersey',
    'Structured Cap (Richardson 112 / Yupoong)',
    'Unstructured Dad Hat / Twill',
    'Fleece Hoodie / Sweatshirt',
    'Heavy Denim / Biker Leather',
    'Twill Patch Fabric',
    'Performance Poly / Spandex',
    'Terry Towel / Bathrobe',
    'Canvas / Tote Bag'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `EST-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setUploadedFile(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="quote-dialog-overlay"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg sm:max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 sm:border-2 overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[90vh] my-auto"
        >
          {/* Header Banner - Fixed at top */}
          <div className="flex-shrink-0 relative bg-gradient-to-r from-[#1F2244] via-[#2A3060] to-[#1F2244] text-white p-3.5 sm:p-5 overflow-hidden">
            {/* Background floating decor */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FEA800]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#FF3F53]/20 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#FEA800]/20 text-[#FEA800] border border-[#FEA800]/30 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Free Stitch &amp; Sew-Out Estimate</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold font-heading text-white">
                  Get a Custom Stitch Quote
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 max-w-sm">
                  Send your logo or sketch. Exact stitch count and turnaround within 15–30 minutes.
                </p>
              </div>

              {/* Close Button */}
              <button
                id="close-quote-dialog-btn"
                type="button"
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Close quote modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Dialog Body - Scrollable content with adequate bottom padding */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-5 pb-6 space-y-3">
            {isSubmitted ? (
              /* Success State Screen */
              <div className="text-center py-4 px-1 space-y-4">
                <div className="w-13 h-13 rounded-2xl bg-[#3BB77E]/15 text-[#3BB77E] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#3BB77E]/10 text-[#3BB77E] px-3 py-0.5 rounded-full">
                    Quote Request Received
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1F2244] font-heading">
                    Your Estimate Is Being Calculated!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    We’ve received your artwork details. A master digitizer is reviewing stitch density and fabric pull compensation.
                  </p>
                </div>

                {/* Estimate Reference Card */}
                <div className="max-w-md mx-auto bg-[#FFF9EC] border border-[#FEA800]/40 rounded-xl p-3 text-left space-y-1.5 shadow-sm text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Quote Reference:</span>
                    <span className="font-mono font-black text-xs text-[#1F2244] bg-white px-2 py-0.5 rounded border border-amber-200 shadow-sm">
                      {quoteReferenceId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Expected Delivery:</span>
                    <span className="font-bold text-[#3BB77E] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Within 15 - 30 Minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Sent To:</span>
                    <span className="font-bold text-[#1F2244] truncate max-w-[180px]">{email || 'Your Email'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Placement:</span>
                    <span className="font-bold text-[#1F2244]">{placement}</span>
                  </div>
                </div>

                {/* Direct WhatsApp Quick Chat Helper */}
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#3BB77E]" />
                    <span className="text-[11px]">Need instant response?</span>
                  </div>
                  <a
                    href={`https://wa.me/18005554393?text=${encodeURIComponent(`Hi Candle Digitizing team, I just requested a quote with Reference #${quoteReferenceId} for ${placement}. Can you check it?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[11px] text-[#3BB77E] hover:underline flex items-center gap-0.5"
                  >
                    WhatsApp <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto vs-btn vs-btn-yellow text-xs sm:text-sm font-bold !py-2.5 !px-6 cursor-pointer"
                  >
                    Done
                  </button>

                  {onOpenFullOrder && (
                    <button
                      type="button"
                      onClick={() => {
                        handleResetAndClose();
                        onOpenFullOrder();
                      }}
                      className="w-full sm:w-auto text-xs font-bold text-[#1679E2] hover:underline px-3 py-1.5"
                    >
                      Skip quote and place order &rarr;
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Quote Request Input Form */
              <form onSubmit={handleSubmit} className="space-y-3">
                
                {/* 2-Column Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Your Full Name <span className="text-[#FF3F53]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Johnson"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Email Address <span className="text-[#FF3F53]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp (Optional) */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                    Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional for instant text quote)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800] focus:border-transparent transition-all"
                  />
                </div>

                {/* Garment Placement & Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Embroidery Placement <span className="text-[#FF3F53]">*</span>
                    </label>
                    <select
                      value={placement}
                      onChange={(e) => setPlacement(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800] bg-white font-medium"
                    >
                      {placementOptions.map((opt) => (
                        <option key={opt.label} value={opt.label}>
                          {opt.label} (~{opt.estStitches} sts • starts {opt.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Fabric or Garment Material
                    </label>
                    <select
                      value={fabricType}
                      onChange={(e) => setFabricType(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800] bg-white font-medium"
                    >
                      {fabricOptions.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Size Specification */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Target Width
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3.5 inches"
                      value={targetWidth}
                      onChange={(e) => setTargetWidth(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                      Target Height
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Proportional"
                      value={targetHeight}
                      onChange={(e) => setTargetHeight(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FEA800]"
                    />
                  </div>
                </div>

                {/* Turnaround Speed Toggle */}
                <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-amber-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] sm:text-xs font-bold text-[#1F2244]">Required Speed:</span>
                    <span className="text-[10px] text-[#3BB77E] font-extrabold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Free Sew-Out Included
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTurnaround('standard')}
                      className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                        turnaround === 'standard'
                          ? 'border-[#1679E2] bg-blue-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1F2244]">Standard</span>
                        <Clock className="w-3 h-3 text-[#1679E2]" />
                      </div>
                      <span className="text-[10px] text-slate-500">12 - 24 Hours</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTurnaround('rush')}
                      className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                        turnaround === 'rush'
                          ? 'border-[#FF3F53] bg-red-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1F2244]">Express Rush</span>
                        <Zap className="w-3 h-3 text-[#FF3F53] fill-[#FF3F53]" />
                      </div>
                      <span className="text-[10px] text-[#FF3F53] font-bold">4 - 8 Hours</span>
                    </button>
                  </div>
                </div>

                {/* File Upload Zone */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                    Upload Artwork or Logo <span className="text-slate-400 font-normal">(PNG, JPG, PDF, SVG, AI, EPS)</span>
                  </label>
                  <label className="relative flex flex-col items-center justify-center p-2.5 sm:p-3 border-2 border-dashed border-slate-300 hover:border-[#FEA800] rounded-xl bg-slate-50/70 hover:bg-amber-50/30 transition-all cursor-pointer group">
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf,.svg,.ai,.eps,.dst,.pes"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#FEA800] group-hover:scale-105 transition-transform mb-1">
                      <Upload className="w-4 h-4" />
                    </div>
                    {uploadedFile ? (
                      <div className="text-center">
                        <span className="text-xs font-bold text-[#3BB77E] block truncate max-w-xs">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {(uploadedFile.size / 1024).toFixed(1)} KB • Click to change file
                        </span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-xs font-bold text-slate-700 block">
                          Click to browse or drag &amp; drop artwork
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Any format accepted. Free stitch count &amp; preview simulation.
                        </span>
                      </div>
                    )}
                  </label>
                </div>

                {/* Special Instructions or Questions */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5">
                    Special Notes <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g., 3D puff for main lettering, flat for small tagline. Cap model is Richardson 112."
                    className="w-full px-3 py-1.5 rounded-lg sm:rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FEA800]"
                  />
                </div>

                {/* Free Estimate Guarantee Pill */}
                <div className="flex items-center gap-2 text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg sm:rounded-xl">
                  <Info className="w-3.5 h-3.5 text-[#1679E2] flex-shrink-0" />
                  <span>
                    No payment required. We will email an exact stitch count, PDF sewout simulation, and price quote.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    id="submit-quote-dialog-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full vs-btn vs-btn-yellow text-xs sm:text-sm font-bold shadow-md shadow-[#FEA800]/25 hover:shadow-lg transition-all !py-2.5 sm:!py-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Calculating Estimate...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Quote &amp; Sewout Estimate</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
