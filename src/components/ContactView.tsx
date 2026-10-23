import React, { useState } from 'react';
import { PageView } from '../types';
import { Mail, MapPin, Send, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Prototype Header Banner */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider">
          <span>PÁGINA: CONTACTO</span>
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
              Contacto
            </span>
          </nav>

          {/* Title & Subtitle matching mockup */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Contáctanos
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Déjanos tu mensaje o sugerencia.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">
                ¡Mensaje recibido con éxito!
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Gracias por comunicarte con el equipo pedagógico de EcoVisual. Te responderemos a la brevedad posible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-xs hover:bg-emerald-700 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row with Nombre & Correo matching mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofía Gómez"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu_correo@escuela.edu.co"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Mensaje Field matching mockup */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="¿Tienes alguna pregunta, sugerencia o deseas implementar EcoVisual en tu institución educativa? Cuéntanos..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-slate-50/50 hover:bg-white transition-colors resize-y"
                />
              </div>

              {/* Action Button: Enviar mensaje matching mockup */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Enviando mensaje...' : 'Enviar mensaje'}</span>
                </button>
              </div>

            </form>
          )}

          {/* Quick Contact Info Strip */}
          <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>info@ecovisual.edu.co</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Medellín, Colombia · Sede Académica</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
