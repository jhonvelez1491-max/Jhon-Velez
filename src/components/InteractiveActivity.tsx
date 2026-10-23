import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/mockData';
import { PageView } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Trophy, 
  Sparkles, 
  Leaf, 
  FileText, 
  ChevronLeft 
} from 'lucide-react';

interface InteractiveActivityProps {
  onNavigate: (view: PageView) => void;
  onBackToModule: () => void;
}

export const InteractiveActivity: React.FC<InteractiveActivityProps> = ({
  onNavigate,
  onBackToModule,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'organic' | 'plastic' | 'paper' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelect = (option: 'organic' | 'plastic' | 'paper') => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQ.correctContainer) {
      setScore((prev) => prev + 100);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Prototype Header Banner matching mockup */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider">
            <span>PÁGINA: ACTIVIDAD INTERACTIVA</span>
          </div>

          <button
            onClick={onBackToModule}
            className="text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Volver al módulo</span>
          </button>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 text-center">
          
          {/* Progress and Score Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-6 border-b border-slate-100 mb-8">
            <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              Pregunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Puntaje: <strong className="text-slate-900 tabular-nums">{score} pts</strong></span>
            </div>
          </div>

          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Question matching mockup exactly */}
              <div className="max-w-xl mx-auto">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  Reto de Clasificación
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                  {currentQ.question}
                </h2>
                <p className="text-xs text-slate-500 mt-2">
                  Objeto a desechar: <strong className="text-slate-800">{currentQ.itemName}</strong>
                </p>
              </div>

              {/* 3 Containers (Orgánicos, Plásticos, Papel y cartón) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto pt-4">
                
                {/* 1. Orgánicos (Green Bin) */}
                <button
                  onClick={() => handleSelect('organic')}
                  disabled={isAnswered}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-200 flex flex-col items-center cursor-pointer ${
                    selectedOption === 'organic'
                      ? currentQ.correctContainer === 'organic'
                        ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-2 ring-emerald-400'
                        : 'border-rose-400 bg-rose-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/50 hover:border-emerald-300 hover:bg-emerald-50/20'
                  }`}
                >
                  {/* Container Graphic (Green Bin with leaf) */}
                  <div className="w-24 h-32 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-between p-3 shadow-md relative group">
                    {/* Bin lid */}
                    <div className="w-26 h-3 bg-emerald-700 rounded-t -mt-1 shadow-xs" />
                    {/* Icon on bin */}
                    <Leaf className="w-8 h-8 fill-emerald-100 text-emerald-100" />
                    {/* Label on bin */}
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-100">
                      Orgánico
                    </span>
                  </div>

                  <span className="font-bold text-sm text-slate-800 mt-4">
                    Orgánicos
                  </span>

                  {/* Feedback icon badge */}
                  {selectedOption === 'organic' && (
                    <div className="absolute top-3 right-3">
                      {currentQ.correctContainer === 'organic' ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                      )}
                    </div>
                  )}
                </button>

                {/* 2. Plásticos (Yellow Bin) - The correct one in the mockup */}
                <button
                  onClick={() => handleSelect('plastic')}
                  disabled={isAnswered}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-200 flex flex-col items-center cursor-pointer ${
                    selectedOption === 'plastic'
                      ? currentQ.correctContainer === 'plastic'
                        ? 'border-amber-500 bg-amber-50/60 shadow-md ring-2 ring-amber-400'
                        : 'border-rose-400 bg-rose-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/50 hover:border-amber-300 hover:bg-amber-50/20'
                  }`}
                >
                  {/* Container Graphic (Yellow Bin with bottle) */}
                  <div className="w-24 h-32 rounded-xl bg-amber-500 text-white flex flex-col items-center justify-between p-3 shadow-md relative group">
                    {/* Bin lid */}
                    <div className="w-26 h-3 bg-amber-600 rounded-t -mt-1 shadow-xs" />
                    {/* Bottle Icon */}
                    <svg className="w-8 h-8 fill-amber-100 text-amber-100" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M9 3h6v2H9zM10 5v2h4V5M8 9h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
                    </svg>
                    {/* Label on bin */}
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-100">
                      Plásticos
                    </span>
                  </div>

                  <span className="font-bold text-sm text-slate-800 mt-4">
                    Plásticos
                  </span>

                  {/* Feedback checkmark badge */}
                  {selectedOption === 'plastic' && (
                    <div className="absolute top-3 right-3">
                      {currentQ.correctContainer === 'plastic' ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                      )}
                    </div>
                  )}
                </button>

                {/* 3. Papel y cartón (Blue Bin) */}
                <button
                  onClick={() => handleSelect('paper')}
                  disabled={isAnswered}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-200 flex flex-col items-center cursor-pointer ${
                    selectedOption === 'paper'
                      ? currentQ.correctContainer === 'paper'
                        ? 'border-blue-500 bg-blue-50/60 shadow-md ring-2 ring-blue-400'
                        : 'border-rose-400 bg-rose-50/50 shadow-sm'
                      : 'border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:bg-blue-50/20'
                  }`}
                >
                  {/* Container Graphic (Blue Bin with paper icon) */}
                  <div className="w-24 h-32 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-between p-3 shadow-md relative group">
                    {/* Bin lid */}
                    <div className="w-26 h-3 bg-blue-700 rounded-t -mt-1 shadow-xs" />
                    {/* Paper Icon */}
                    <FileText className="w-8 h-8 text-blue-100" />
                    {/* Label on bin */}
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-100">
                      Papel
                    </span>
                  </div>

                  <span className="font-bold text-sm text-slate-800 mt-4">
                    Papel y cartón
                  </span>

                  {/* Feedback badge */}
                  {selectedOption === 'paper' && (
                    <div className="absolute top-3 right-3">
                      {currentQ.correctContainer === 'paper' ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                      )}
                    </div>
                  )}
                </button>

              </div>

              {/* Instant Pedagogical Feedback Callout */}
              {isAnswered && (
                <div className={`p-4 rounded-2xl text-left border text-sm max-w-xl mx-auto animate-in fade-in ${
                  selectedOption === currentQ.correctContainer
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}>
                  <p className="font-bold flex items-center gap-1.5 mb-1">
                    {selectedOption === currentQ.correctContainer ? (
                      <>
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>¡Excelente respuesta!</span>
                      </>
                    ) : (
                      <>
                        <span>¡Casi! No te preocupes:</span>
                      </>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Action Button matching mockup: "Siguiente pregunta" */}
              <div className="pt-4">
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 mx-auto ${
                    isAnswered
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>
                    {currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver resultado final'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Celebration Screen */
            <div className="py-8 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  ¡Misión Completada!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  ¡Eres un Experto en Clasificación de Residuos!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2">
                  Obtuviste <strong className="text-emerald-700">{score} puntos</strong>. Tus conocimientos ayudan a evitar que toneladas de plástico contaminen ríos y océanos.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-slate-700 flex items-center gap-2 text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Jugar de nuevo</span>
                </button>

                <button
                  onClick={() => onNavigate('resources')}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center gap-2 text-sm shadow-sm"
                >
                  <span>Descargar guías y carteles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
