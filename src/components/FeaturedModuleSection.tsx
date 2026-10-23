import React from 'react';
import { ASSETS } from '../data/mockData';
import { PageView } from '../types';
import { BookOpen, Gamepad2, Award, ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedModuleSectionProps {
  onStartModule: () => void;
  onNavigate: (view: PageView) => void;
}

export const FeaturedModuleSection: React.FC<FeaturedModuleSectionProps> = ({
  onStartModule,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with leaf emojis matching mockup */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-sm font-semibold tracking-wide">
            <span aria-hidden="true">🌱</span>
            <span className="uppercase text-xs tracking-wider text-emerald-700 font-bold">
              Módulo destacado
            </span>
            <span aria-hidden="true">🌱</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Aprende paso a paso con experiencias visuales
          </h2>
        </div>

        {/* Highlight Card matching mockup */}
        <div className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Graphic with student & 3 bins */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-200 bg-white group">
                {/* Header text badge over image matching mockup banner */}
                <div className="absolute top-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-xl shadow-sm text-center border border-slate-100">
                  <p className="text-xs sm:text-sm font-black tracking-wide text-slate-800 uppercase">
                    Reciclaje y Manejo de Residuos Sólidos
                  </p>
                </div>

                <img
                  src={ASSETS.studentBins}
                  alt="Estudiante junto a canecas de reciclaje orgánico, plástico y papel"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nivel Básico e Intermedio</span>
                </div>
              </div>
            </div>

            {/* Right Column: Module Details & Stats */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                  Módulo 01 · Ciencias Naturales & Educación Ambiental
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 leading-snug">
                  Reciclaje y manejo de residuos sólidos
                </h3>
                <p className="text-slate-600 mt-3 text-base leading-relaxed">
                  Aprende la importancia de separar, reutilizar y reciclar para reducir la contaminación
                  y proteger nuestro planeta. Descubre cómo cada acción en casa o la escuela genera un impacto positivo real.
                </p>
              </div>

              {/* 3 Metric Pills/Boxes from mockup */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Lecciones</span>
                  <span className="text-xl font-bold text-slate-900 tabular-nums">4</span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Actividades</span>
                  <span className="text-xl font-bold text-slate-900 tabular-nums">2</span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Quiz</span>
                  <span className="text-xl font-bold text-slate-900 tabular-nums">1</span>
                </div>
              </div>

              {/* CTA button matching mockup */}
              <div className="pt-2">
                <button
                  onClick={onStartModule}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <span>Comenzar módulo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
