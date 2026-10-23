import React, { useState } from 'react';
import { RESOURCES } from '../data/mockData';
import { DownloadResource, PageView } from '../types';
import { 
  FileDown, 
  Eye, 
  CheckCircle, 
  ChevronRight, 
  X, 
  Printer, 
  Share2, 
  Sparkles,
  Download
} from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (view: PageView) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate }) => {
  const [selectedDoc, setSelectedDoc] = useState<DownloadResource | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const handleDownload = (doc: DownloadResource) => {
    setDownloadSuccessToast(`Descargando "${doc.title}" (${doc.fileSize})...`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Prototype Header Banner */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider">
          <span>PÁGINA: RECURSOS DESCARGABLES</span>
        </div>

        {/* Card Container matching the mockup */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-emerald-700 transition-colors"
            >
              Inicio
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">
              Recursos descargables
            </span>
          </nav>

          {/* Title & Subtitle matching mockup */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recursos descargables
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Material educativo para aprender y compartir.
            </p>
          </div>

          {/* Download Notification Toast */}
          {downloadSuccessToast && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl flex items-center justify-between text-sm animate-in slide-in-from-top-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">{downloadSuccessToast}</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                PDF Listo
              </span>
            </div>
          )}

          {/* 3 Downloadable Cards Grid matching mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RESOURCES.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 p-4 flex flex-col items-center text-center"
              >
                {/* Thumbnail Preview with check badge matching mockup */}
                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 group-hover:scale-[1.02] transition-transform">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle download / view overlay */}
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => setSelectedDoc(item)}
                      className="p-2 rounded-full bg-white text-slate-900 shadow hover:bg-emerald-50 transition-colors"
                      title="Vista previa"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDownload(item)}
                      className="p-2 rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700 transition-colors"
                      title="Descargar archivo"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Title & Type matching mockup */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-500 mb-4">
                  {item.type} · {item.pages}
                </p>

                {/* Bottom action row with checkmark icon matching mockup */}
                <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedDoc(item)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Ver</span>
                  </button>

                  <button
                    onClick={() => handleDownload(item)}
                    className="w-7 h-7 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex items-center justify-center transition-colors"
                    title="Descargar PDF"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Note */}
          <div className="mt-10 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Licencia de Uso Libre Educativo
              </h4>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                Todos los carteles e infografías de EcoVisual pueden ser impresos y compartidos libremente en salones de clase, bibliotecas comunitarias y proyectos de reciclaje barrial.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Resource Preview Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {selectedDoc.type} · {selectedDoc.fileSize}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="aspect-3/4 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <img
                  src={selectedDoc.imageSrc}
                  alt={selectedDoc.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Descripción del recurso</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedDoc.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir afiche</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: selectedDoc.title, text: selectedDoc.description, url: window.location.href });
                      } else {
                        handleDownload(selectedDoc);
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Compartir</span>
                  </button>

                  <button
                    onClick={() => {
                      handleDownload(selectedDoc);
                      setSelectedDoc(null);
                    }}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Descargar PDF ({selectedDoc.fileSize})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
