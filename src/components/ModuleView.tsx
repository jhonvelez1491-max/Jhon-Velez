import React, { useState } from 'react';
import { LESSONS, ASSETS } from '../data/mockData';
import { Lesson, PageView } from '../types';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Gamepad2, 
  Award, 
  FileDown, 
  ChevronRight,
  X,
  Volume2,
  Sparkles,
  Check
} from 'lucide-react';

interface ModuleViewProps {
  onNavigate: (view: PageView) => void;
  onGoToActivities: () => void;
  onGoToResources: () => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  onNavigate,
  onGoToActivities,
  onGoToResources,
}) => {
  const [activeTab, setActiveTab] = useState<'lecciones' | 'actividades' | 'quiz' | 'recursos'>('lecciones');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['l1']);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleLessonToggleComplete = (id: string) => {
    if (completedLessonIds.includes(id)) {
      setCompletedLessonIds(completedLessonIds.filter((item) => item !== id));
    } else {
      setCompletedLessonIds([...completedLessonIds, id]);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Prototype Header Banner */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider">
          <span>PÁGINA: MÓDULO</span>
        </div>

        {/* Card Container matching the mockup format */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Top Breadcrumb & Header info */}
          <div className="p-6 sm:p-8 border-b border-slate-100">
            {/* Breadcrumb matching mockup */}
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
              <button 
                onClick={() => onNavigate('home')}
                className="hover:text-emerald-700 transition-colors"
              >
                Inicio
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button 
                onClick={() => onNavigate('home')}
                className="hover:text-emerald-700 transition-colors"
              >
                Módulos
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-semibold truncate">
                Reciclaje y manejo de residuos sólidos
              </span>
            </nav>

            {/* Title & Graphic layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Módulo Educativo #1
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Reciclaje y manejo de residuos sólidos
                </h1>
                <p className="text-sm text-slate-600 mt-2">
                  Aprende la clasificación correcta, el impacto ambiental y cómo transformar tu escuela y hogar en un punto ecológico modelo.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {completedLessonIds.length} de {LESSONS.length} completadas
                  </span>
                  <span>·</span>
                  <span>Tiempo estimado: 45 min</span>
                </div>
              </div>

              {/* Green Recycling Bin Illustration matching mockup */}
              <div className="w-28 sm:w-36 h-28 sm:h-36 shrink-0 bg-emerald-50 rounded-2xl p-2 border border-emerald-100 flex items-center justify-center shadow-inner">
                <img
                  src={ASSETS.studentBins}
                  alt="Ilustración caneca verde reciclaje"
                  className="w-full h-full object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Tabs matching mockup: Lecciones | Actividades | Quiz | Recursos */}
            <div className="flex items-center gap-2 sm:gap-6 pt-8 border-b border-slate-200 text-sm font-semibold overflow-x-auto">
              <button
                onClick={() => setActiveTab('lecciones')}
                className={`pb-3 px-1 whitespace-nowrap transition-colors relative flex items-center gap-1.5 ${
                  activeTab === 'lecciones'
                    ? 'text-emerald-700 border-b-2 border-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Lecciones ({LESSONS.length})</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('actividades');
                  onGoToActivities();
                }}
                className={`pb-3 px-1 whitespace-nowrap transition-colors relative flex items-center gap-1.5 ${
                  activeTab === 'actividades'
                    ? 'text-emerald-700 border-b-2 border-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Actividades (2)</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('quiz');
                  onGoToActivities();
                }}
                className={`pb-3 px-1 whitespace-nowrap transition-colors relative flex items-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'text-emerald-700 border-b-2 border-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Quiz (1)</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('recursos');
                  onGoToResources();
                }}
                className={`pb-3 px-1 whitespace-nowrap transition-colors relative flex items-center gap-1.5 ${
                  activeTab === 'recursos'
                    ? 'text-emerald-700 border-b-2 border-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <FileDown className="w-4 h-4" />
                <span>Recursos (3)</span>
              </button>
            </div>
          </div>

          {/* Tab Content: Lecciones List matching mockup */}
          <div className="p-6 sm:p-8 space-y-4">
            {LESSONS.map((lesson) => {
              const isCompleted = completedLessonIds.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/20 transition-all shadow-2xs hover:shadow-xs"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <button
                      onClick={() => handleLessonToggleComplete(lesson.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 text-transparent hover:border-emerald-500'
                      }`}
                      title={isCompleted ? 'Marcada como completada' : 'Marcar como completada'}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {lesson.number}. {lesson.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{lesson.duration}</span>
                        <span>·</span>
                        <span className="hidden sm:inline text-slate-400">
                          {lesson.summary.substring(0, 50)}...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play Action Button */}
                  <button
                    onClick={() => setSelectedLesson(lesson)}
                    className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs group-hover:scale-105"
                    aria-label={`Abrir lección ${lesson.number}`}
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                </div>
              );
            })}

            {/* Bottom Button matching mockup: "Ir a actividades" */}
            <div className="pt-6 text-center">
              <button
                onClick={onGoToActivities}
                className="w-full sm:w-auto px-10 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 text-base"
              >
                <span>Ir a actividades</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Lesson Reader & Player Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Lección {selectedLesson.number} de {LESSONS.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedLesson.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Media simulation player bar */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    {isPlayingAudio ? (
                      <span className="text-xs font-bold">||</span>
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {isPlayingAudio ? 'Reproduciendo audio explicativo...' : 'Escuchar resumen narrado'}
                    </p>
                    <span className="text-[11px] text-slate-500">
                      Voz pedagógica EcoVisual · {selectedLesson.duration}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                  <Volume2 className="w-4 h-4" />
                  <span>Audio HD</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                {selectedLesson.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Fact Card */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4.5 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Dato Clave de Impacto
                  </h5>
                  <p className="text-sm text-amber-950 mt-1 font-medium">
                    {selectedLesson.keyFact}
                  </p>
                </div>
              </div>

              {/* Complete & Next Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    handleLessonToggleComplete(selectedLesson.id);
                  }}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    completedLessonIds.includes(selectedLesson.id)
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {completedLessonIds.includes(selectedLesson.id)
                      ? 'Lección completada'
                      : 'Marcar como completada'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setSelectedLesson(null);
                    onGoToActivities();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>Probar en la actividad</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
