/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView, UserProfile } from './types';
import { PrototypeToolbar } from './components/PrototypeToolbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { FeaturedModuleSection } from './components/FeaturedModuleSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ModuleView } from './components/ModuleView';
import { InteractiveActivity } from './components/InteractiveActivity';
import { ResourcesView } from './components/ResourcesView';
import { ContactView } from './components/ContactView';
import { BlogView } from './components/BlogView';
import { AboutView } from './components/AboutView';
import { AuthModal } from './components/AuthModal';
import { CertificatesModal } from './components/CertificatesModal';
import { MobileFrame } from './components/MobileFrame';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isCertOpen, setIsCertOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>({
    name: 'Sofía Gómez',
    role: 'Estudiante',
    institution: 'I.E. Ecológica de Medellín',
    completedLessons: 2,
    points: 250,
    badges: ['Guardián del Agua', 'Reciclador Activo'],
  });

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById('features-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'module':
        return (
          <ModuleView
            onNavigate={handleNavigate}
            onGoToActivities={() => handleNavigate('activity')}
            onGoToResources={() => handleNavigate('resources')}
          />
        );
      case 'activity':
        return (
          <InteractiveActivity
            onNavigate={handleNavigate}
            onBackToModule={() => handleNavigate('module')}
          />
        );
      case 'resources':
        return <ResourcesView onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactView onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogView onNavigate={handleNavigate} />;
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'home':
      default:
        return (
          <>
            <Hero
              onNavigate={handleNavigate}
              onScrollToFeatures={handleScrollToFeatures}
            />
            <FeaturesSection onNavigate={handleNavigate} />
            <FeaturedModuleSection
              onStartModule={() => handleNavigate('module')}
              onNavigate={handleNavigate}
            />
            <CallToAction onJoin={() => setIsAuthOpen(true)} />
          </>
        );
    }
  };

  const mainContent = (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="grow">
        {renderCurrentView()}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenCertificates={() => setIsCertOpen(true)}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Prototype Reviewer Bar */}
      <PrototypeToolbar
        currentView={currentView}
        onSelectView={handleNavigate}
        isMobileFrame={isMobileFrame}
        onToggleMobileFrame={() => setIsMobileFrame(!isMobileFrame)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Render in Desktop or in Phone Mockup Frame as shown in prototype */}
      {isMobileFrame ? (
        <MobileFrame onClose={() => setIsMobileFrame(false)}>
          {mainContent}
        </MobileFrame>
      ) : (
        mainContent
      )}

      {/* Interactive Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={(u) => setCurrentUser(u)}
        onLogout={() => setCurrentUser(null)}
      />

      <CertificatesModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
        userName={currentUser?.name || 'Estudiante EcoVisual'}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
