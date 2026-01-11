'use client';

import DailyMenu from '@/components/sections/DailyMenu';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import SushiMenu from '@/components/sections/SushiMenu';
import { WhatsappIcon } from '@/public/assets/icons';
import { ViewState } from '@/types';
import { useState, useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

export default function LandingPage() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const overlayRef = useRef<HTMLDivElement>(null);
  const [transitionColor, setTransitionColor] = useState('bg-jirafa-bg');

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view') as ViewState;
      if (viewParam && ['home', 'veggie', 'sushi'].includes(viewParam)) {
        setCurrentView(viewParam);
      } else {
        setCurrentView('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleNavigate = (view: ViewState) => {
    if (view === currentView) return;

    let nextColor = 'bg-jirafa-bg';
    if (view === 'veggie') nextColor = 'bg-jirafa-green';
    if (view === 'sushi') nextColor = 'bg-jirafa-red';

    setTransitionColor(nextColor);

    const newUrl = view === 'home' ? '/' : `/?view=${view}`;
    window.history.pushState({}, '', newUrl);

    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      y: '0%',
      duration: 0.5,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'auto' });
      },
    })
      .to(overlayRef.current, {
        y: '-100%',
        duration: 0.5,
        delay: 0.1,
        ease: 'power3.inOut',
      })
      .set(overlayRef.current, { y: '100%' });
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased text-gray-800 transition-colors duration-500 relative
      ${currentView === 'home' ? 'bg-jirafa-bg' : 'bg-white'}
      ${
        currentView === 'sushi'
          ? 'selection:bg-jirafa-red selection:text-white'
          : 'selection:bg-jirafa-green selection:text-white'
      }
    `}
    >
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-100 ${transitionColor} flex items-center justify-center transform translate-y-full`}
      >
        <div className="text-white font-marker text-4xl animate-pulse">La Jirafa</div>
      </div>

      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="min-h-screen pt-20">
        {currentView === 'home' && <Hero onNavigate={handleNavigate} />}

        {currentView === 'veggie' && <DailyMenu />}

        {currentView === 'sushi' && <SushiMenu />}
      </main>

      <Footer />

      <a
        href="https://wa.me/56988412401"
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-50 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group
          ${currentView === 'sushi' ? 'bg-jirafa-red' : 'bg-green-500'}
        `}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappIcon className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
