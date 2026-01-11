'use client';

import { DAILY_SPECIALS } from '@/data/menu';
import { BikeIcon, MessageIcon, SoupIcon, UtensilsIcon } from '@/public/assets/icons';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function DailyMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      );

      const items = listRef.current?.children;
      if (items && items.length > 0) {
        const itemsArray = Array.from(items);
        gsap.fromTo(
          itemsArray,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
          }
        );
      }

      gsap.fromTo(
        infoRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-jirafa-light relative overflow-hidden min-h-[80vh]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-jirafa-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mt-4 relative z-10"
      >
        <div ref={titleRef} className="shrink-0 opacity-0 mb-6 md:mb-0">
          <div className="w-64 h-64 rounded-full border-4 border-jirafa-bg bg-white shadow-xl flex flex-col items-center justify-center text-center p-6 relative transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 group">
            <h2 className="font-sans font-light text-3xl tracking-widest text-gray-700 mb-2">
              MENÚ
            </h2>
            <div className="text-6xl text-jirafa-green my-2 opacity-80 group-hover:scale-110 transition-transform duration-300">
              <UtensilsIcon className="w-16 h-16" />
            </div>
            <h2 className="font-sans font-light text-2xl tracking-widest text-gray-700 mt-2">
              SEMANAL
            </h2>
          </div>
        </div>

        <div className="grow w-full space-y-6">
          <ul ref={listRef} className="space-y-4">
            {DAILY_SPECIALS.map(special => (
              <li
                key={special.day}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-jirafa-green/30 hover:shadow-md transition-all duration-300 opacity-0 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-jirafa-bg flex items-center justify-center font-sans font-bold text-xl text-jirafa-green group-hover:bg-jirafa-green group-hover:text-white transition-colors shrink-0">
                    {special.dayShort}
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 uppercase tracking-wide group-hover:text-jirafa-green transition-colors flex items-center gap-2">
                      {special.dish}
                    </h3>
                    {special.side && (
                      <p className="text-jirafa-brown font-medium italic text-sm">{special.side}</p>
                    )}
                  </div>
                </div>

                <div className="text-right pl-4">
                  <span className="block font-bold text-gray-800 text-lg">
                    ${special.price.toLocaleString('es-CL')}
                  </span>
                </div>
              </li>
            ))}

            <li className="flex items-center bg-orange-50 p-4 rounded-xl border border-orange-100 shadow-sm opacity-0 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 shrink-0">
                <SoupIcon className="w-7 h-7" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-lg text-gray-800">Opción Legumbres</h3>
                <p className="text-sm text-gray-600">Disponibles todos los días</p>
              </div>
              <div className="text-right">
                <span className="block font-bold text-jirafa-brown text-lg">$5.500</span>
              </div>
            </li>
          </ul>

          <div ref={infoRef} className="grid md:grid-cols-2 gap-4 pt-4 opacity-0">
            <div className="bg-white/80 p-4 rounded-lg border border-gray-100 flex items-start gap-3">
              <div className="bg-jirafa-green/10 p-2 rounded-full text-jirafa-green">
                <BikeIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm uppercase">Delivery</h4>
                <p className="text-gray-600 text-sm leading-tight ">
                  Salimos a repartir desde las 13:30 hrs.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-4 rounded-lg border border-gray-100 flex items-start gap-3">
              <div className="bg-blue-50 p-2 rounded-full text-blue-500">
                <MessageIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm uppercase">Pedidos</h4>
                <p className="text-gray-600 text-sm leading-tight">
                  Puedes encargar con anticipación, coordinamos por DM.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left mt-2">
            <p className="text-gray-400 text-xs italic">
              * Todos los platos incluyen entrada (crema o ensalada) y pan de la casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
