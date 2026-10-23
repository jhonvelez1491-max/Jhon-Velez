import React from 'react';
import { Smartphone, X } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children, onClose }) => {
  return (
    <div className="min-h-screen bg-slate-900/90 py-8 px-4 flex flex-col items-center justify-center animate-in fade-in">
      <div className="mb-4 flex items-center justify-between w-full max-w-[390px] text-white text-xs">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold">Simulador Móvil (Mockup EcoVisual)</span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 text-xs flex items-center gap-1"
        >
          <X className="w-3.5 h-3.5" />
          <span>Cerrar marco</span>
        </button>
      </div>

      {/* Realistic Smartphone Shell matching the bottom-left mockup */}
      <div className="relative w-full max-w-[380px] h-[780px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-[6px] border-slate-700 ring-1 ring-slate-800">
        
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-900 mr-2" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>

        {/* Inner Screen */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-y-auto overflow-x-hidden relative scrollbar-none pt-4">
          {children}
        </div>

        {/* Bottom home indicator bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full z-50" />
      </div>
    </div>
  );
};
