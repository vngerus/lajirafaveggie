'use client';

import { VeggiePlateIcon } from '@/public/assets/icons';
import { gsap } from '@/lib/gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero({ onNavigate }: { onNavigate: (view: 'veggie' | 'sushi') => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftContentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(rightContentRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[90vh] flex flex-col md:flex-row items-stretch overflow-hidden relative"
    >
      <h1 className="sr-only">
        La Jirafa Veggie - Comida Casera Plant Based y Sushi Bar en El Quisco
      </h1>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 opacity-20 md:opacity-100">
        <div className="w-200 h-200 bg-white rounded-full blur-3xl mix-blend-soft-light"></div>
      </div>

      <article
        className="flex-1 bg-jirafa-bg/50 relative flex flex-col justify-center items-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/50 group hover:bg-jirafa-green/10 transition-colors duration-500 cursor-pointer"
        onClick={() => onNavigate('veggie')}
        aria-labelledby="heading-veggie"
      >
        <div ref={leftContentRef} className="relative z-10 text-center pointer-events-none">
          <div
            className="w-24 h-24 mx-auto bg-jirafa-green text-white rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <VeggiePlateIcon className="w-12 h-12 fill-current" />
          </div>
          <h2 id="heading-veggie" className="font-marker text-4xl text-jirafa-green mb-2 ">
            Menú Semanal Vegano
          </h2>
          <p className="font-sans text-jirafa-brown font-medium mb-6">
            Platos caseros, saludables y 100% plant-based en El Quisco.
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              onNavigate('veggie');
            }}
            className="pointer-events-auto inline-block bg-jirafa-brown text-white px-8 py-3 rounded-full font-bold hover:bg-jirafa-green transition-colors shadow-lg"
            aria-label="Ver menú de almuerzos semanales"
          >
            Ver Almuerzos
          </button>
        </div>
      </article>

      <article
        className="flex-1 bg-white relative flex flex-col justify-center items-center p-8 md:p-16 group hover:bg-red-50 transition-colors duration-500 cursor-pointer"
        onClick={() => onNavigate('sushi')}
        aria-labelledby="heading-sushi"
      >
        <div ref={rightContentRef} className="relative z-10 text-center pointer-events-none">
          <div
            className="w-24 h-24 mx-auto bg-jirafa-red text-white rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <Image
              src={'/assets/logo-sushi.webp'}
              alt="Sushi Logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
          </div>
          <h2
            id="heading-sushi"
            className="font-marker text-4xl text-jirafa-red mb-2 transform rotate-1"
          >
            Sushi Bar Plant-Based
          </h2>
          <p className="font-sans text-gray-600 font-medium mb-6">
            Rolls de especialidad, Handrolls furay y Gohan saludables.
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              onNavigate('sushi');
            }}
            className="pointer-events-auto inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-jirafa-red transition-colors shadow-lg"
            aria-label="Ver carta completa de sushi vegano"
          >
            Ver Carta Sushi
          </button>
        </div>
      </article>
    </section>
  );
}
