import React from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { PageView } from '../types';
import { ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (view: PageView) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-emerald-700 transition-colors"
          >
            Inicio
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">
            Blog Ambiental
          </span>
        </nav>

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Artículos & Hábitos Sostenibles
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Blog EcoVisual
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
            Lecturas breves e ideas prácticas para cuidar el entorno en el aula y en casa.
          </p>
        </div>

        {/* Post Grid */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3">
                {post.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('module')}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <span>Aprender más en los módulos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
