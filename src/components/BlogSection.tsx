import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BlogModal } from './BlogModal';

interface BlogSectionProps {
  onOpenQuote: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenQuote }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categoryThemes = [
    { badge: 'bg-[#FF3F53]', text: 'text-[#FF3F53]' },
    { badge: 'bg-[#FEA800]', text: 'text-[#FEA800]' },
    { badge: 'bg-[#1679E2]', text: 'text-[#1679E2]' },
    { badge: 'bg-[#3BB77E]', text: 'text-[#3BB77E]' },
  ];

  return (
    <section id="blog" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#1F2244] border-2 border-[#FEA800]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-[#FEA800]" />
              <span>INDUSTRY INSIGHTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2244] tracking-tight font-heading">
              Embroidery <span className="text-[#FEA800]">Insights & Tips</span>
            </h2>

            <p className="text-base text-slate-600 font-normal">
              Technical digitizing guides, stitch density formulas, and machine setup secrets from master commercial digitizers.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
              Updated Weekly for Decorators
            </span>
          </div>
        </div>

        {/* Blog Posts Grid with Kiddino 28px rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, idx) => {
            const theme = categoryThemes[idx % categoryThemes.length];

            return (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group bg-[#FFFDF7] rounded-[28px] border-2 border-slate-100 hover:border-[#FEA800] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`${theme.badge} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#FEA800]" />
                        <span>{post.publishedDate.split(',')[0]}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF3F53]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1F2244] group-hover:text-[#FEA800] transition-colors font-heading line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Action Button */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FEA800] group-hover:text-[#1F2244] flex items-center gap-1.5 transition-colors">
                    <span>Read More</span>
                    <span className="w-5 h-5 rounded-full bg-[#FFF3D6] flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 stroke-[3]" />
                    </span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">By {post.author.name.split(' ')[0]}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Blog Article Modal */}
      <BlogModal
        post={activePost}
        onClose={() => setActivePost(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
