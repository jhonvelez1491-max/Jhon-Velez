import React from 'react';
import { PageView } from '../types';
import { ChevronRight, Leaf, Target, Users2, ShieldCheck, Heart } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-emerald-700 transition-colors"
          >
            Inicio
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">
            Sobre nosotros
          </span>
        </nav>

        {/* Hero About */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center">
            <Leaf className="w-7 h-7" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestra Misión: Educación Ambiental Visual para un Futuro Sostenible
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            <strong>EcoVisual</strong> nació en Medellín, Colombia, con el propósito de transformar la enseñanza de las ciencias naturales y la ecología. Creemos firmemente que los conceptos ambientales se asimilan mejor cuando los estudiantes interactúan, clasifican y comprenden el ciclo completo de los materiales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Target className="w-4 h-4 text-emerald-600" />
                <span>Propósito</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empoderar a niños y jóvenes como embajadores ambientales en sus comunidades.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Users2 className="w-4 h-4 text-emerald-600" />
                <span>Comunidad</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Herramientas diseñadas tanto para docentes de aula como para dinámicas familiares.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span>Impacto</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fomento de la economía circular y dignificación de los recicladores de oficio.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Contáctanos para alianzas educativas
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
