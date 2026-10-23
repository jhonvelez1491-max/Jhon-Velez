import React from 'react';
import { PageView } from '../types';
import { BookOpen, Lightbulb, Download, Leaf, ArrowUpRight } from 'lucide-react';

interface FeaturesSectionProps {
  onNavigate: (view: PageView) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onNavigate }) => {
  const features = [
    {
      id: 'modules',
      title: 'Módulos educativos',
      description: 'Contenidos organizados por temas ambientales con recursos visuales.',
      icon: BookOpen,
      iconBg: 'bg-emerald-100 text-emerald-700',
      actionView: 'module' as PageView,
      buttonText: 'Ver temas',
    },
    {
      id: 'interactive',
      title: 'Aprendizaje interactivo',
      description: 'Actividades, juegos y quizzes para aprender de manera dinámica.',
      icon: Lightbulb,
      iconBg: 'bg-emerald-100 text-emerald-700',
      actionView: 'activity' as PageView,
      buttonText: 'Jugar quiz',
    },
    {
      id: 'resources',
      title: 'Recursos descargables',
      description: 'Infografías, guías y material educativo para usar en el aula o en casa.',
      icon: Download,
      iconBg: 'bg-emerald-100 text-emerald-700',
      actionView: 'resources' as PageView,
      buttonText: 'Descargar PDFs',
    },
    {
      id: 'actions',
      title: 'Acciones sostenibles',
      description: 'Ideas y retos para aplicar en tu vida diaria y cuidar nuestro planeta.',
      icon: Leaf,
      iconBg: 'bg-emerald-100 text-emerald-700',
      actionView: 'blog' as PageView,
      buttonText: 'Ver retos eco',
    },
  ];

  return (
    <section id="features-section" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching the mockup */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿Qué encontrarás en EcoVisual?
          </h2>
          {/* Subtle green divider accent matching the mockup */}
          <div className="w-14 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                onClick={() => onNavigate(feat.actionView)}
                className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col items-center text-center cursor-pointer relative"
              >
                {/* Circular Icon Container matching mockup */}
                <div className={`w-16 h-16 rounded-full ${feat.iconBg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-inner`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 grow">
                  {feat.description}
                </p>

                {/* Subtle Interactive Trigger */}
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors pt-2 border-t border-slate-100 w-full justify-center">
                  <span>{feat.buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
