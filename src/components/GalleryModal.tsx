import React, { useState } from 'react';
import { X, Layers, Check, ArrowRight, ShieldCheck, Sparkles, ZoomIn } from 'lucide-react';
import { GalleryProject } from '../types';

interface GalleryModalProps {
  project: GalleryProject | null;
  onClose: () => void;
  onRequestSimilar: (project: GalleryProject) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  const [activeTab, setActiveTab] = useState<'digitized' | 'original' | 'split'>('digitized');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {project.clientIndustry}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 font-heading">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Comparison View Controller */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Visual Inspection Mode:
            </span>
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('digitized')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'digitized'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                3D Digitized Sew-out
              </button>
              <button
                onClick={() => setActiveTab('original')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'original'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Original Artwork
              </button>
              <button
                onClick={() => setActiveTab('split')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'split'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Side-by-Side Comparison
              </button>
            </div>
          </div>

          {/* Visual Display Container */}
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 min-h-[320px]">
            {activeTab === 'split' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                <div className="relative aspect-[4/3]">
                  <img
                    src={project.originalArtImage}
                    alt="Original Artwork"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-xs font-bold px-2.5 py-1 rounded-lg">
                    Original Artwork File
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  <img
                    src={project.digitizedStitchImage}
                    alt="Digitized Sewout"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-stitch-pattern opacity-20 pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    Production Sew-out Simulation
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full max-h-[460px]">
                <img
                  src={
                    activeTab === 'digitized'
                      ? project.digitizedStitchImage
                      : project.originalArtImage
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {activeTab === 'digitized' && (
                  <div className="absolute inset-0 bg-stitch-pattern opacity-25 pointer-events-none" />
                )}
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tested on Multi-Head Embroidery Bed</span>
                </div>
              </div>
            )}
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 font-semibold block">Total Stitches</span>
              <span className="text-base font-extrabold text-slate-900">
                {project.stitchCount > 0 ? project.stitchCount.toLocaleString() : 'Vector Art'}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 font-semibold block">Dimensions</span>
              <span className="text-base font-extrabold text-slate-900">{project.dimensions}</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 font-semibold block">Color Sequence</span>
              <span className="text-base font-extrabold text-slate-900">{project.colorStops} Stops</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
              <span className="text-[11px] text-slate-500 font-semibold block">Turnaround</span>
              <span className="text-base font-extrabold text-emerald-600">{project.turnaroundTime}</span>
            </div>
          </div>

          {/* Description & Technical Highlights */}
          <div className="space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>

            <div className="bg-amber-50/60 border border-amber-200/80 p-4 rounded-xl">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-2">
                Production Engineering Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
          <div className="text-xs text-slate-600 flex items-center gap-2 font-medium">
            <span className="w-5 h-5 rounded-full bg-[#F0FAF5] text-[#3BB77E] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <span>Format: <strong className="text-[#1F2244] font-bold">{project.format}</strong> (Tested sew-out included)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-[#1F2244]"
            >
              Back to Gallery
            </button>
            <button
              onClick={() => {
                onRequestSimilar(project);
                onClose();
              }}
              className="w-1/2 sm:w-auto vs-btn vs-btn-yellow text-xs font-bold shadow-md !py-2.5 !px-5"
            >
              <span>Order Similar Digitizing</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#FEA800] flex items-center justify-center shadow-sm">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
