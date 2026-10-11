import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/mockData';
import { GalleryProject } from '../types';
import { GalleryModal } from './GalleryModal';

interface GallerySectionProps {
  onRequestSimilar: (project: GalleryProject) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onRequestSimilar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);

  const categories = ['All', 'Logos', 'Caps', 'Jackets', '3D Puff', 'Patches', 'Small Text', 'Applique', 'Vector Art'];

  const filteredProjects = selectedCategory === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => {
        if (selectedCategory === 'Logos') return p.category === 'Left Chest' || p.category === 'Logos';
        if (selectedCategory === 'Caps') return p.category === 'Caps' || p.category === '3D Puff' || p.title.toLowerCase().includes('cap') || p.title.toLowerCase().includes('hat');
        if (selectedCategory === 'Jackets') return p.category === 'Jacket Back' || p.title.toLowerCase().includes('jacket');
        if (selectedCategory === '3D Puff') return p.category === '3D Puff';
        if (selectedCategory === 'Patches') return p.category === 'Patches';
        if (selectedCategory === 'Small Text') return p.category === 'Small Text' || p.description.toLowerCase().includes('lettering');
        if (selectedCategory === 'Applique') return p.category === 'Applique' || p.title.toLowerCase().includes('applique');
        if (selectedCategory === 'Vector Art') return p.category === 'Vector Art';
        return p.category === selectedCategory;
      });

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FEA800] fill-[#FEA800]" />
              <span>PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
              Our <span className="text-[#FEA800]">Recent Work</span>
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Inspect actual commercial sewouts from our embroidery beds. Each design is mapped with calibrated pull compensation, sharp micro-lettering, and minimal trims.
            </p>
          </div>

          {/* Filter Tabs with Smooth Indicator */}
          <div className="flex items-center gap-1.5 flex-wrap bg-white p-2 rounded-2xl border-2 border-slate-200 shadow-sm max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FEA800] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#1F2244] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Cards Grid with Smooth Transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ y: -7, transition: { duration: 0.2 } }}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-[28px] border-2 border-slate-100 hover:border-[#FEA800] overflow-hidden shadow-md hover:shadow-2xl transition-colors transition-shadow duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Aspect Container */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={project.digitizedStitchImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />

                  {/* Subtle stitch overlay */}
                  <div className="absolute inset-0 bg-stitch-pattern opacity-20 pointer-events-none" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-[#1F2244] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Stitch count badge */}
                  <div className="absolute top-3 right-3 bg-[#FEA800] text-white font-black text-[10px] px-2.5 py-1 rounded-full shadow-md">
                    {project.stitchCount > 0 ? `${project.stitchCount.toLocaleString()} sts` : 'Vector Redraw'}
                  </div>

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-[#1F2244]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-[#1F2244] text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#FEA800]" />
                      <span>Inspect Sewout</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold block">
                      {project.clientIndustry}
                    </span>
                    <h3 className="text-sm font-bold text-[#1F2244] group-hover:text-[#FEA800] transition-colors font-heading mt-0.5 line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium">{project.dimensions}</span>
                    <span className="font-bold text-[#1F2244] bg-slate-100 px-2.5 py-0.5 rounded-full">{project.format}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-[#1F2244] text-white rounded-[32px] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border-4 border-white"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs text-[#FEA800] font-black uppercase tracking-wider">Feasibility Review</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have a complex logo with gradients or micro-lettering?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Send your raw artwork to <span className="text-[#FEA800] font-bold">support@candledigitizing.com</span> for a free machine sew-out feasibility evaluation.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 vs-btn vs-btn-yellow text-xs sm:text-sm font-bold shadow-lg shadow-[#FEA800]/30 cursor-pointer"
          >
            <span>Upload Artwork for Review</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#FEA800] flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          </a>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={onRequestSimilar}
      />
    </section>
  );
};
