import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  UploadCloud, 
  FileCheck, 
  FileCode, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  ShieldCheck, 
  AlertCircle, 
  X,
  Sparkles,
  Zap,
  MessageCircle,
  ArrowRight,
  KeyRound,
  Copy,
  Check,
  PackageSearch
} from 'lucide-react';
import { InquiryFormData, Service, CustomerOrder } from '../types';
import { generateOrderId, generateOrderPin, saveOrder } from '../utils/orderStorage';

interface ContactFormProps {
  selectedService?: Service | null;
  onNavigateToFindOrders?: (email?: string, pin?: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  selectedService,
  onNavigateToFindOrders
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: 'Logo Digitizing',
    dimensions: '3.5" W x 3.0" H',
    requiredFormat: 'Tajima (.DST)',
    quantity: '1',
    turnaround: 'Standard (12-24h)',
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    previewUrl?: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [submittedPin, setSubmittedPin] = useState<string | null>(null);
  const [copiedPin, setCopiedPin] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with incoming service
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedService.title,
      }));
    }
  }, [selectedService]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const processFile = (file: File) => {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
    let previewUrl: string | undefined;

    if (file.type.startsWith('image/')) {
      previewUrl = URL.createObjectURL(file);
    }

    setUploadedFile({
      name: file.name,
      size: `${sizeInMb} MB`,
      previewUrl,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = generateOrderId();
      const generatedPin = generateOrderPin();

      const newOrder: CustomerOrder = {
        id: generatedRef,
        pin: generatedPin,
        email: formData.email.trim().toLowerCase(),
        fullName: formData.fullName || 'Valued Client',
        phone: formData.phone || '',
        companyName: formData.companyName || '',
        serviceType: formData.serviceType,
        dimensions: formData.dimensions,
        requiredFormat: formData.requiredFormat,
        turnaround: formData.turnaround,
        notes: formData.notes,
        fileName: uploadedFile?.name,
        fileSize: uploadedFile?.size,
        status: 'Received',
        submittedAt: new Date().toISOString(),
        estimatedCompletion: formData.turnaround.includes('Rush') ? 'Within 4-8 Hours (Rush)' : 'Within 12-24 Hours',
        estimatedStitches: formData.serviceType.includes('Puff') ? 12800 : 7400,
        timeline: [
          {
            title: 'Order Received & Queued',
            desc: 'Artwork verified and scaled to requested dimensions. Queued for digitizing.',
            timestamp: 'Just now',
            status: 'completed',
          },
          {
            title: 'Digitizing & Pull Compensation',
            desc: 'Senior digitizer assigned to calibrate stitch angles and density.',
            timestamp: 'Starting shortly',
            status: 'current',
          },
          {
            title: 'Commercial Head Test Sew-out',
            desc: 'Physical machine sewout run to ensure zero thread breaks and clean trims.',
            timestamp: 'Scheduled',
            status: 'upcoming',
          },
          {
            title: 'Quality Inspection & File Delivery',
            desc: 'Final proofing, worksheet generation, and machine file dispatch.',
            timestamp: 'Scheduled',
            status: 'upcoming',
          },
        ],
      };

      saveOrder(newOrder);
      setSubmittedReference(generatedRef);
      setSubmittedPin(generatedPin);
    }, 800);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hi Candle Digitizing Team! I placed order ${submittedReference || 'inquiry'} (PIN: ${submittedPin || 'N/A'}):\n- Name: ${formData.fullName || 'New Client'}\n- Service: ${formData.serviceType}\n- Size: ${formData.dimensions}\n- Format: ${formData.requiredFormat}\n- Turnaround: ${formData.turnaround}\n- Notes: ${formData.notes || 'Please review my artwork.'}`
    );
    window.open(`https://wa.me/18005554393?text=${text}`, '_blank');
  };

  const handleResetForm = () => {
    setSubmittedReference(null);
    setSubmittedPin(null);
    setCopiedPin(false);
    setUploadedFile(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceType: 'Logo Digitizing',
      dimensions: '3.5" W x 3.0" H',
      requiredFormat: 'Tajima (.DST)',
      quantity: '1',
      turnaround: 'Standard (12-24h)',
      notes: '',
    });
  };

  return (
    <section id="order" className="py-20 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FEA800]" />
            <span>ORDER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
            Ready to Turn Your Design <span className="text-[#FEA800]">Into Stitches?</span>
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Upload your artwork and tell us what you need. Our team will review your design and get back to you with pricing and turnaround information.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Information & Direct Channels */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Channel Box in Kiddino Navy */}
            <div className="bg-[#1F2244] text-white p-7 sm:p-8 rounded-[32px] border-4 border-white shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-black text-[#FEA800] uppercase tracking-wider block mb-1">
                  24/7 Active Production Floor
                </span>
                <h3 className="text-xl font-bold font-heading">Candle Digitizing Studio</h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <a
                  href="mailto:support@candledigitizing.com"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FEA800] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Support</span>
                    <span className="text-[#FEA800] font-bold">support@candledigitizing.com</span>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Average response under 15 minutes</p>
                  </div>
                </a>

                <div 
                  onClick={handleWhatsAppOrder}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3BB77E] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp Direct</span>
                    <span className="text-white font-bold">+1 (800) 555-4393</span>
                    <p className="text-[11px] text-[#3BB77E] mt-0.5 font-semibold">Click to message directly</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#1679E2] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Turnaround Standard</span>
                    <span className="text-white font-semibold">12 - 24 Hours (4-8h Rush)</span>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Continuous shift coverage</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-[#3BB77E] font-bold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>100% Confidentiality & NDA Protection</span>
                </div>
                <div className="flex items-center gap-2 text-[#3BB77E] font-bold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>Free minor revisions for 30 days</span>
                </div>
              </div>
            </div>

            {/* What Every Order Includes */}
            <div className="bg-white p-6 rounded-[28px] border-2 border-slate-100 shadow-md space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#1F2244]">
                What Every Order Includes:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-semibold">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>Production-ready machine file (.DST, .PES, etc.)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>PDF Color Run Sheet with stitch counts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>30 Days of Free Minor Edits & Resizing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>Zero thread break guarantee</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Side: Order Form or Confirmation */}
          <div className="lg:col-span-8 bg-white rounded-[32px] border-2 border-slate-100 p-6 sm:p-8 shadow-xl">
            
            {submittedReference ? (
              /* Success Confirmation View */
              <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <span className="bg-[#FFF3D6] text-[#FEA800] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                    Order Received Successfully
                  </span>
                  <h3 className="text-2xl font-black text-[#1F2244] font-heading">
                    Order Reference #{submittedReference}
                  </h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>! Our digitizing lab has received your artwork and instructions.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl p-5 max-w-lg mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-bold text-[#1F2244]">{formData.serviceType}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Dimensions:</span>
                    <span className="font-bold text-[#1F2244]">{formData.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Format Requested:</span>
                    <span className="font-bold text-[#1F2244]">{formData.requiredFormat}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Turnaround:</span>
                    <span className="font-bold text-[#FEA800]">{formData.turnaround}</span>
                  </div>
                  {uploadedFile && (
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-500">Attached Artwork:</span>
                      <span className="font-bold text-[#1F2244] truncate max-w-[200px]">{uploadedFile.name}</span>
                    </div>
                  )}
                </div>

                {/* Instruction Banner with Generated PIN */}
                {submittedPin && (
                  <div className="bg-[#FFF9EC] border-2 border-[#FEA800] rounded-3xl p-6 max-w-xl mx-auto text-left shadow-lg space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-amber-200 pb-3">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1F2244]">
                        <span className="w-7 h-7 rounded-xl bg-[#FEA800] text-white flex items-center justify-center shadow-sm">
                          <KeyRound className="w-4 h-4" />
                        </span>
                        <span>ORDER TRACKING PIN &amp; INSTRUCTIONS</span>
                      </div>
                      <span className="bg-[#FEA800]/20 text-[#1F2244] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                        Important
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-amber-200 shadow-inner">
                      <div>
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                          Your Secret Tracking PIN:
                        </span>
                        <span className="text-3xl font-black font-mono tracking-widest text-[#1F2244]">
                          {submittedPin}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (submittedPin) {
                            navigator.clipboard.writeText(submittedPin);
                            setCopiedPin(true);
                            setTimeout(() => setCopiedPin(false), 2000);
                          }
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#1F2244] border border-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        {copiedPin ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-700">PIN Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#FEA800]" />
                            <span>Copy PIN</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Instruction Details */}
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p>
                        <strong>How to use your PIN:</strong> Please keep this 4-digit PIN safe! Whenever you want to track live machine sew-out progress, review stitch density specs, or download production files, visit our <strong>Find My Orders</strong> page and enter:
                      </p>
                      <div className="bg-white/80 p-3 rounded-xl border border-amber-200/80 space-y-1 font-mono text-[11px] text-slate-800">
                        <div>Email: <strong>{formData.email}</strong></div>
                        <div>PIN: <strong className="text-[#FEA800]">{submittedPin}</strong></div>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        A duplicate record of this reference and PIN has also been queued for delivery to {formData.email}.
                      </p>
                    </div>

                    {/* Direct Button to open Find My Orders */}
                    {onNavigateToFindOrders && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onNavigateToFindOrders(formData.email, submittedPin)}
                          className="w-full vs-btn vs-btn-blue text-xs font-bold !py-3 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                        >
                          <PackageSearch className="w-4 h-4" />
                          <span>Track This Order Now on "Find My Orders"</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-lg mx-auto text-xs text-emerald-800 font-medium">
                  We will review your design and dispatch an official sewout preview and stitch count breakdown to <strong>{formData.email || 'your email'}</strong> within 15 to 30 minutes.
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="vs-btn vs-btn-yellow text-xs font-bold !py-3 !px-6"
                  >
                    Submit Another Order
                  </button>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="vs-btn vs-btn-green text-xs font-bold !py-3 !px-6 flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Order Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Customer Information */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1F2244] mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FEA800] text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Customer Information</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. orders@company.com"
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 019-2834"
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Brand Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. StitchCraft Apparel"
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Order Details */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1F2244] mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1679E2] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Order Details</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none"
                      >
                        <option value="Embroidery Digitizing">Embroidery Digitizing</option>
                        <option value="Custom Embroidery Digitizing">Custom Embroidery Digitizing</option>
                        <option value="Logo Digitizing">Logo Digitizing</option>
                        <option value="3D Puff Digitizing">3D Puff Digitizing</option>
                        <option value="Cap & Hat Digitizing">Cap & Hat Digitizing</option>
                        <option value="Jacket Back Digitizing">Jacket Back Digitizing</option>
                        <option value="Small Text Digitizing">Small Text Digitizing</option>
                        <option value="Vector Art">Vector Art</option>
                        <option value="Custom Patches">Custom Patches</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Desired Size (Width & Height) *
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        required
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="e.g. 3.5 inches W x 2.5 inches H"
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required File Format *
                      </label>
                      <select
                        name="requiredFormat"
                        value={formData.requiredFormat}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none"
                      >
                        <option value="Tajima (.DST)">Tajima (.DST) - Commercial Universal</option>
                        <option value="Brother / Babylock (.PES)">Brother / Babylock (.PES)</option>
                        <option value="Janome (.JEF)">Janome (.JEF)</option>
                        <option value="Melco / Bernina (.EXP)">Melco / Bernina (.EXP)</option>
                        <option value="Husqvarna / Viking (.VP3)">Husqvarna / Viking (.VP3)</option>
                        <option value="Wilcom TrueSizer (.EMB)">Wilcom Source (.EMB)</option>
                        <option value="Vector Formats (AI, EPS, SVG, PDF)">Vector Formats (AI, EPS, SVG, PDF)</option>
                        <option value="All Commercial Formats">All Formats (.DST + .PES + .EMB + PDF)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required Turnaround *
                      </label>
                      <select
                        name="turnaround"
                        value={formData.turnaround}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none"
                      >
                        <option value="Standard (12-24h)">Standard (12 - 24 Hours)</option>
                        <option value="Rush (4-8h)">Rush (4 - 8 Hours)</option>
                        <option value="Same Day">Same Day Delivery</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Artwork Upload */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1F2244] mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FF3F53] text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Artwork Upload</span>
                  </h4>
                  
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-3 border-dashed rounded-[24px] p-6 text-center cursor-pointer transition-all ${
                      isDragOver
                        ? 'border-[#FEA800] bg-amber-50/50'
                        : uploadedFile
                        ? 'border-[#3BB77E] bg-emerald-50/30'
                        : 'border-slate-300 hover:border-[#FEA800] bg-[#FAF9F5] hover:bg-white'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg,.cdr,.psd"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {uploadedFile ? (
                      <div className="flex items-center justify-between max-w-md mx-auto bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 text-left truncate">
                          {uploadedFile.previewUrl ? (
                            <img
                              src={uploadedFile.previewUrl}
                              alt="Upload preview"
                              className="w-12 h-12 rounded-xl object-cover border"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] text-[#FEA800] flex items-center justify-center">
                              <FileCode className="w-6 h-6" />
                            </div>
                          )}
                          <div className="truncate">
                            <span className="text-xs font-bold text-[#1F2244] block truncate">
                              {uploadedFile.name}
                            </span>
                            <span className="text-[11px] text-[#3BB77E] font-bold">✓ Ready for analysis ({uploadedFile.size})</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                          }}
                          className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF9EC] text-[#FEA800] flex items-center justify-center mx-auto shadow-sm">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-bold text-[#1F2244]">
                          Drag-and-drop or browse artwork file
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Supported formats: PNG, JPG, JPEG, PDF, AI, EPS, SVG, CDR, PSD (Max 25MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. Additional Instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Additional Instructions
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us about your design, fabric type, placement, colors, or special requirements..."
                    className="w-full bg-[#FAF9F5] border-2 border-slate-200 rounded-2xl p-3.5 text-sm text-slate-900 focus:bg-white focus:border-[#FEA800] outline-none"
                  />
                </div>

                {/* Dual Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 vs-btn vs-btn-yellow justify-center text-sm font-bold shadow-xl shadow-[#FEA800]/30 hover:shadow-2xl transition-all !py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#1F2244] border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Order...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT ORDER</span>
                        <span className="w-7 h-7 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-sm">
                          <Send className="w-3.5 h-3.5" />
                        </span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="vs-btn vs-btn-green justify-center text-sm font-bold shadow-lg shadow-[#3BB77E]/25 transition-all !py-4 !px-6 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>ORDER VIA WHATSAPP</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* Section #21: Quick Contact CTA / Help Bar */}
        <div className="mt-14 bg-gradient-to-r from-[#1F2244] via-[#2D3160] to-[#1F2244] rounded-[32px] p-6 sm:p-8 border-4 border-white shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FEA800] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-black uppercase text-[#FEA800] tracking-wider">
                We're Here to Help
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Have a Question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Reach out anytime — our master digitizers and support staff are active 24/7.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:support@candledigitizing.com"
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-[#FEA800]" />
              <span>support@candledigitizing.com</span>
            </a>

            <button
              onClick={handleWhatsAppOrder}
              className="vs-btn vs-btn-green text-xs font-bold !py-2.5 !px-5 flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Message</span>
            </button>

            <div className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3BB77E]" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
