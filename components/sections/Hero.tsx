import { SushiLogoIcon, VeggiePlateIcon } from '@/public/assets/icons';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

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
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 opacity-20 md:opacity-100">
        <div className="w-200 h-200 bg-white rounded-full blur-3xl mix-blend-soft-light"></div>
      </div>
      <div
        className="flex-1 bg-jirafa-bg/50 relative flex flex-col justify-center items-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/50 group hover:bg-jirafa-green/10 transition-colors duration-500 cursor-pointer"
        onClick={() => onNavigate('veggie')}
      >
        <div ref={leftContentRef} className="relative z-10 text-center pointer-events-none">
          <div className="w-24 h-24 mx-auto bg-jirafa-green text-white rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <VeggiePlateIcon className="w-12 h-12 fill-current" />
          </div>
          <h2 className="font-marker text-4xl text-jirafa-green mb-2 transform -rotate-2">
            Menú Semanal
          </h2>
          <p className="font-sans text-jirafa-brown font-medium mb-6">
            Platos caseros, saludables y con amor.
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              onNavigate('veggie');
            }}
            className="pointer-events-auto inline-block bg-jirafa-brown text-white px-8 py-3 rounded-full font-bold hover:bg-jirafa-green transition-colors shadow-lg"
          >
            Ver Almuerzos
          </button>
        </div>
      </div>

      <div
        className="flex-1 bg-white relative flex flex-col justify-center items-center p-8 md:p-16 group hover:bg-red-50 transition-colors duration-500 cursor-pointer"
        onClick={() => onNavigate('sushi')}
      >
        <div ref={rightContentRef} className="relative z-10 text-center pointer-events-none">
          <div className="w-24 h-24 mx-auto bg-jirafa-red text-white rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <SushiLogoIcon className="w-14 h-14 fill-current" />
          </div>
          <h2 className="font-marker text-4xl text-jirafa-red mb-2 transform rotate-1">
            Sushi Bar
          </h2>
          <p className="font-sans text-gray-600 font-medium mb-6">Rolls, Handrolls y Gohan.</p>
          <button
            onClick={e => {
              e.stopPropagation();
              onNavigate('sushi');
            }}
            className="pointer-events-auto inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-jirafa-red transition-colors shadow-lg"
          >
            Ver Carta Sushi
          </button>
        </div>
      </div>
    </section>
  );
}
