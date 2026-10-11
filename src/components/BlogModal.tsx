import React from 'react';
import { X, Clock, Calendar, User, Tag, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenQuote }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-900 rounded-t-2xl">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 space-y-2">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-amber-500"
              />
              <div>
                <span className="text-xs font-bold text-slate-900 block">{post.author.name}</span>
                <span className="text-[11px] text-slate-500">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-slate-900 font-heading pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-slate-600">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Related Topics:</span>
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="bg-[#FFF3D6] border-2 border-[#FEA800]/30 p-6 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-[#1F2244] font-heading">
                Need this technique applied to your shop's logos?
              </h4>
              <p className="text-xs text-[#1F2244]/80 font-normal">
                Our master digitizers can engineer your file with tested 3D foam and micro-lettering.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="vs-btn vs-btn-yellow text-xs font-bold shadow-md !py-2.5 !px-5 flex-shrink-0"
            >
              <span>Get Free Quote Now</span>
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
