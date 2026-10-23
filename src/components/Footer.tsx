import React from 'react';
import { PageView } from '../types';
import { Leaf, Mail, MapPin, ExternalLink, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenCertificates?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCertificates }) => {
  return (
    <footer className="bg-[#0b271c] text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Leaf className="w-6 h-6 fill-emerald-400 text-emerald-400" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">
                  EcoVisual
                </span>
                <span className="text-xs text-emerald-300/80">
                  Aprende hoy, transforma mañana.
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm pt-2">
              Plataforma de innovación pedagógica ambiental que fortalece la cultura
              ecológica en comunidades educativas mediante experiencias visuales e interactivas.
            </p>
          </div>

          {/* Links Column matching mockup */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('module')}
                  className="hover:text-white transition-colors"
                >
                  Módulos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCertificates || (() => onNavigate('home'))}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Certificados</span>
                  <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1.5 py-0.2 rounded">
                    Estudiantes
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Social Networks matching mockup */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-800/50"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-800/50"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-800/50"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-800/50"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-emerald-200/60 pt-2">
              Comparte tus iniciativas con el hashtag <span className="text-emerald-300">#EcoVisualCol</span>
            </p>
          </div>

          {/* Contact Details matching mockup */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-emerald-100/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@ecovisual.edu.co" className="hover:text-white transition-colors">
                  info@ecovisual.edu.co
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Medellín, Colombia</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold text-emerald-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>Enviar consulta o alianza escolar</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/60 gap-4">
          <p>© 2026 EcoVisual - Prototipo Visual (MVP). Plataforma educativa ambiental.</p>
          <div className="flex items-center gap-4">
            <span>Diseño curricular STEM/Ambiental</span>
            <span aria-hidden="true">·</span>
            <span>Acceso abierto</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
