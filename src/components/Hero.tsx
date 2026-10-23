import React from 'react';
import { ASSETS } from '../data/mockData';
import { PageView } from '../types';
import { Sparkles, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: PageView) => void;
  onScrollToFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onScrollToFeatures }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-emerald-50/60 via-white to-white">
      {/* Subtle organic background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Educación Ambiental Interactiva</span>
              <span aria-hidden="true">·</span>
              <span>Para Colegios y Familias</span>
            </div>

            {/* Main Headline matching the mockup exactly */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Aprende, comprende <br />
              <span className="text-emerald-600 drop-shadow-sm">
                y cuida el planeta
              </span>
            </h1>

            {/* Paragraph matching mockup */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              EcoVisual es una plataforma educativa que usa recursos visuales e interactivos
              para enseñar sobre el medio ambiente y promover hábitos sostenibles.
            </p>

            {/* Action Buttons matching mockup */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('module')}
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 text-base cursor-pointer"
              >
                <span>Explorar módulos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToFeatures}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-300 shadow-sm transition-all text-base cursor-pointer"
              >
                <span>Conoce más</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Contenidos pedagógicos validados</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Simulaciones lúdicas</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Acceso libre y descargable</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
              
              {/* Outer soft halo */}
              <div className="absolute inset-0 bg-emerald-100/50 rounded-full filter blur-2xl transform scale-90 -z-10" />

              {/* Generated Earth Illustration matching the mockup */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/80 p-2 group transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={ASSETS.earthHero}
                  alt="Ilustración educativa del planeta Tierra con vegetación y flechas de reciclaje"
                  className="w-full h-auto object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Floating micro-badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800">
                      Módulo activo: Residuos Sólidos
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('activity')}
                    className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                  >
                    Probar juego →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
