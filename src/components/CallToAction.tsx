import React from 'react';
import { ASSETS } from '../data/mockData';
import { Users, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onJoin: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onJoin }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 text-white">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.greenFoliage}
          alt="Textura de follaje verde natural"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark emerald gradient scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-emerald-950/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Headline matching mockup with sprout icons */}
        <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-semibold tracking-wider">
          <span aria-hidden="true">🌱</span>
          <span className="uppercase text-xs font-bold tracking-widest">
            Sé parte del cambio
          </span>
          <span aria-hidden="true">🌱</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Pequeñas acciones generan grandes transformaciones.
        </h2>

        <p className="text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
          ¡Juntos podemos construir un futuro sostenible! Únete a miles de estudiantes y docentes aprendiendo hábitos ecológicos.
        </p>

        {/* CTA Button matching mockup */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onJoin}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-emerald-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center gap-2.5 text-base cursor-pointer"
          >
            <Users className="w-5 h-5" />
            <span>Únete a EcoVisual</span>
          </button>

          <div className="text-xs text-emerald-200/80 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Registro gratuito para colegios e instituciones</span>
          </div>
        </div>

      </div>
    </section>
  );
};
