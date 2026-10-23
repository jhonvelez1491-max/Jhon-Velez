import React, { useState } from 'react';
import { PageView } from '../types';
import { Menu, X, Leaf, User } from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: PageView }[] = [
    { label: 'Inicio', view: 'home' },
    { label: 'Módulos', view: 'module' },
    { label: 'Recursos', view: 'resources' },
    { label: 'Blog', view: 'blog' },
    { label: 'Sobre nosotros', view: 'about' },
    { label: 'Contacto', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
              <Leaf className="w-6 h-6 fill-emerald-500 text-emerald-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                EcoVisual
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Aprende hoy, transforma mañana.
              </span>
            </div>
          </button>

          {/* Desktop Nav Links (4-6 links, single line) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-emerald-700 font-semibold'
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button: Iniciar sesión */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAuth}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Iniciar sesión</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAuth}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"
              title="Iniciar sesión"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === link.view
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 text-sm font-semibold text-center text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
