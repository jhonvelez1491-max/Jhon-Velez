import React, { useState } from 'react';
import { UserProfile } from '../types';
import { X, User, GraduationCap, Award, CheckCircle, Shield } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
}) => {
  const [role, setRole] = useState<'Estudiante' | 'Docente'>('Estudiante');
  const [name, setName] = useState('Sofía Gómez');
  const [institution, setInstitution] = useState('I.E. Ecológica de Medellín');

  if (!isOpen) return null;

  const handleDemoLogin = (selectedRole: 'Estudiante' | 'Docente') => {
    const demoUser: UserProfile = {
      name: selectedRole === 'Estudiante' ? 'Sofía Gómez' : 'Prof. Carlos Mendoza',
      role: selectedRole,
      institution: selectedRole === 'Estudiante' ? 'I.E. Ecológica de Medellín' : 'Colegio Ambiental Las Palmas',
      completedLessons: selectedRole === 'Estudiante' ? 3 : 4,
      points: selectedRole === 'Estudiante' ? 350 : 800,
      badges: ['Guardián del Agua', 'Experto en Residuos Sólidos', 'Pionero EcoVisual'],
    };
    onLogin(demoUser);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserProfile = {
      name: name || 'Usuario EcoVisual',
      role,
      institution: institution || 'Institución Educativa',
      completedLessons: 1,
      points: 100,
      badges: ['Bienvenido a EcoVisual'],
    };
    onLogin(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {currentUser ? 'Perfil de Usuario' : 'Iniciar Sesión en EcoVisual'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          /* Profile active view */
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-snug">
                  {currentUser.name}
                </h4>
                <p className="text-xs text-emerald-700 font-semibold">
                  {currentUser.role} · {currentUser.institution}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                <span className="text-xs text-slate-500 font-medium block">Puntos Eco</span>
                <span className="text-xl font-bold text-emerald-800 tabular-nums">
                  {currentUser.points} pts
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-xs text-slate-500 font-medium block">Lecciones</span>
                <span className="text-xl font-bold text-slate-800 tabular-nums">
                  {currentUser.completedLessons} / 4
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Insignias Obtenidas
              </span>
              <div className="space-y-1.5">
                {currentUser.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100"
                  >
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onLogout}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
              >
                Cerrar sesión
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
              >
                Continuar aprendiendo
              </button>
            </div>
          </div>
        ) : (
          /* Login form view */
          <div className="p-6 space-y-6">
            {/* Quick Demo Selector */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2">
              <p className="text-xs font-bold text-emerald-900">
                🚀 Acceso rápido para demostración:
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('Estudiante')}
                  className="px-3 py-2 bg-white hover:bg-emerald-100/60 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Soy Estudiante</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('Docente')}
                  className="px-3 py-2 bg-white hover:bg-emerald-100/60 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Soy Docente</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Rol
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('Estudiante')}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                      role === 'Estudiante'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Estudiante
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('Docente')}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                      role === 'Docente'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Docente
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="user-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nombre completo
                </label>
                <input
                  id="user-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="user-institution" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Institución Educativa
                </label>
                <input
                  id="user-institution"
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Nombre de tu colegio o ciudad"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                >
                  Ingresar a la plataforma
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
