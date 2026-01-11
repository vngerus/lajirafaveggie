'use client';

import { CONTACT_INFO } from '@/data/menu';
import { ViewState } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({
  currentView,
  onNavigate,
}: {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getThemeColors = () => {
    switch (currentView) {
      case 'veggie':
        return {
          text: 'text-jirafa-green',
          btn: 'bg-jirafa-green hover:bg-jirafa-dark',
          bg: 'bg-white shadow-md',
        };
      case 'sushi':
        return {
          text: 'text-jirafa-red',
          btn: 'bg-jirafa-red hover:bg-black',
          bg: 'bg-white shadow-md',
        };
      default:
        return {
          text: 'text-jirafa-brown',
          btn: 'bg-jirafa-brown hover:bg-jirafa-green',
          bg: 'bg-white/95 backdrop-blur-sm shadow-sm',
        };
    }
  };

  const theme = getThemeColors();

  const handleLinkClick = (view: ViewState) => {
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-500 py-2 md:py-3 ${theme.bg}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex items-center justify-center px-2 py-1 select-none"
          aria-label="Volver al inicio"
        >
          <div className="relative flex items-center justify-center">
            <span
              className={`
                font-sans font-black 
                text-5xl md:text-6xl 
                tracking-[0.15em] 
                leading-none
                opacity-20
                ${theme.text} 
                transition-colors duration-500
              `}
            >
              VEGGIE
            </span>

            <div className="absolute inset-0 flex items-center justify-center z-10 -mt-1">
              <span
                className={`
                   font-marker 
                   text-2xl md:text-3xl 
                   transform -rotate-6 
                   mr-1
                   ${theme.text} 
                   transition-colors duration-500
                   drop-shadow-sm
                 `}
              >
                La
              </span>

              <div className="w-9 h-9 md:w-11 md:h-11 shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Image
                  src={'/assets/logo.webp'}
                  alt="Icono de la Jirafa"
                  width={44}
                  height={44}
                  priority
                />
              </div>

              <span
                className={`
                   font-marker 
                   text-2xl md:text-3xl 
                   transform -rotate-2 
                   ml-1
                   ${theme.text} 
                   transition-colors duration-500
                   drop-shadow-sm
                 `}
              >
                Jirafa
              </span>
            </div>
          </div>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => handleLinkClick('home')}
            className={`font-medium transition-colors hover:opacity-70 ${theme.text} ${
              currentView === 'home' ? 'font-bold underline decoration-2 underline-offset-4' : ''
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleLinkClick('veggie')}
            className={`font-medium transition-colors hover:opacity-70 ${theme.text} ${
              currentView === 'veggie' ? 'font-bold underline decoration-2 underline-offset-4' : ''
            }`}
          >
            Almuerzos
          </button>
          <button
            onClick={() => handleLinkClick('sushi')}
            className={`font-medium transition-colors hover:opacity-70 ${theme.text} ${
              currentView === 'sushi' ? 'font-bold underline decoration-2 underline-offset-4' : ''
            }`}
          >
            Sushi
          </button>
          <a
            href="#contacto"
            className={`font-medium transition-colors hover:opacity-70 ${theme.text}`}
          >
            Contacto
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className={`${theme.btn} text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5`}
          >
            Pedir Ahora
          </a>
        </div>

        <button
          className={`md:hidden text-3xl transition-colors ${theme.text}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 md:hidden">
          <button
            onClick={() => handleLinkClick('home')}
            className={`py-4 text-center font-bold border-b border-gray-100 hover:bg-gray-50 ${theme.text}`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleLinkClick('veggie')}
            className={`py-4 text-center font-bold border-b border-gray-100 hover:bg-gray-50 ${theme.text}`}
          >
            Almuerzos
          </button>
          <button
            onClick={() => handleLinkClick('sushi')}
            className={`py-4 text-center font-bold border-b border-gray-100 hover:bg-gray-50 ${theme.text}`}
          >
            Sushi
          </button>
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className={`py-4 text-center font-bold hover:bg-gray-50 ${theme.text}`}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
