import React from 'react';
import { PageView } from '../types';
import { LayoutDashboard, BookOpen, Gamepad2, FileDown, Mail, Smartphone, Monitor } from 'lucide-react';

interface PrototypeToolbarProps {
  currentView: PageView;
  onSelectView: (view: PageView) => void;
  isMobileFrame: boolean;
  onToggleMobileFrame: () => void;
  onOpenExport: () => void;
}

export const PrototypeToolbar: React.FC<PrototypeToolbarProps> = ({
  currentView,
  onSelectView,
  isMobileFrame,
  onToggleMobileFrame,
  onOpenExport,
}) => {
  return (
    <aside aria-label="Navegador del prototipo" className="bg-slate-900 text-white text-xs py-2 px-3 sm:px-6 sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            EcoVisual MVP Prototipo
          </span>
          <span className="text-slate-400 hidden sm:inline">| Navegación de secciones del mockup:</span>
        </div>

        {/* View Switcher Chips */}
        <div className="flex items-center flex-wrap gap-1">
          <button
            onClick={() => onSelectView('home')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'home'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Inicio (Landing)</span>
          </button>

          <button
            onClick={() => onSelectView('module')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'module'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Página: Módulo</span>
          </button>

          <button
            onClick={() => onSelectView('activity')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'activity'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Página: Actividad</span>
          </button>

          <button
            onClick={() => onSelectView('resources')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'resources'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Página: Recursos</span>
          </button>

          <button
            onClick={() => onSelectView('contact')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'contact'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Página: Contacto</span>
          </button>
        </div>

        {/* Device toggle and Export */}
        <div className="flex items-center gap-1.5 border-l border-slate-700 pl-3">
          <button
            onClick={onToggleMobileFrame}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              isMobileFrame
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Ver en marco de smartphone (como en el prototipo)"
          >
            {isMobileFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span>Vista Escritorio</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span>Vista Móvil</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenExport}
            className="px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm cursor-pointer"
            title="Exportar sitio o descargar ZIP"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Exportar Sitio</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
