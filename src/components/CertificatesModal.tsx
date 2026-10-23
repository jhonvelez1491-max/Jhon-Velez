import React from 'react';
import { X, Award, Download, Printer, Leaf, CheckCircle } from 'lucide-react';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export const CertificatesModal: React.FC<CertificatesModalProps> = ({
  isOpen,
  onClose,
  userName = 'Sofía Gómez',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Certificado de Acreditación Ambiental</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Artwork */}
        <div className="p-6 sm:p-8">
          <div className="border-4 border-double border-emerald-700 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/20 text-center relative shadow-sm">
            
            {/* Corner leaves */}
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf className="w-7 h-7 fill-emerald-600 text-emerald-700" />
            </div>

            <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase block mb-1">
              EcoVisual · Plataforma Educativa Ambiental
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
              Certificado de Aprobación
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Por haber completado satisfactoriamente los contenidos y pruebas del módulo:
            </p>

            <h4 className="text-sm font-extrabold text-emerald-800 mt-2 uppercase">
              Reciclaje y Manejo de Residuos Sólidos
            </h4>

            <div className="my-5 py-3 border-y border-emerald-200/80">
              <span className="text-xs text-slate-400 block mb-0.5">Otorgado a:</span>
              <p className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-wide font-serif">
                {userName}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-600 pt-2 px-2">
              <div className="text-left">
                <span className="font-bold block text-slate-800">Medellín, Colombia</span>
                <span className="text-[10px] text-slate-400">Año lectivo 2026</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>Verificado</span>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir diploma</span>
            </button>

            <button
              onClick={() => {
                alert('¡Certificado listo para descarga digital!');
                onClose();
              }}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Descargar PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
