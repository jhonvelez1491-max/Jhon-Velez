import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Globe, 
  FolderArchive, 
  Github, 
  Layers 
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sharedUrl = window.location.origin;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sharedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Opciones para Exportar y Compartir EcoVisual
              </h3>
              <p className="text-xs text-slate-500">
                Lleva tu proyecto a producción, descárgalo o compártelo en vivo.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Method 1: Instant ZIP Download */}
          <div className="p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Recomendado · Descarga Directa
              </span>
              <h4 className="text-base font-bold text-slate-900">
                Descargar Código Fuente y Build (ZIP)
              </h4>
              <p className="text-xs text-slate-600">
                Incluye componentes React, imágenes generadas, estilos Tailwind, configuración y la carpeta compilada para producción.
              </p>
            </div>

            <a
              href="/ecovisual-proyecto.zip"
              download="ecovisual-proyecto.zip"
              className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer text-center"
            >
              <Download className="w-4 h-4" />
              <span>Descargar ZIP (~3.5 MB)</span>
            </a>
          </div>

          {/* Method 2: Live Web Link */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Enlace Web en Vivo (Sin instalación)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              El prototipo ya está alojado en la nube de Google Cloud. Puedes enviar este enlace directamente a evaluadores o clientes:
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={sharedUrl}
                className="w-full text-xs font-mono bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-700 select-all"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Method 3: GitHub & Hosting Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                <Github className="w-4 h-4" />
                <span>Exportar a GitHub</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                En la interfaz de Google AI Studio (arriba a la derecha), puedes usar el botón <strong>Export &gt; Export to GitHub</strong> para vincularlo a tu repositorio en un clic.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Despliegue en Vercel o Netlify</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Descomprime el ZIP y arrastra la carpeta <code>dist/</code> a <strong>Netlify Drop</strong> o conecta el repositorio en <strong>Vercel</strong> para tener tu propio dominio gratuito.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
          >
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  );
};
