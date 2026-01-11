'use client';

import { SUSHI_MENU } from '@/data/menu';
import {
  BowlIcon,
  ExtrasIcon,
  HandrollIcon,
  LeafIcon,
  PriceTagIcon,
  RollIcon,
  SushiLogoIcon,
  TablaIcon,
} from '@/public/assets/icons';
import { MenuItem } from '@/types';
import { gsap } from '@/lib/gsap';
import { useEffect, useRef, useState } from 'react';

export default function SushiMenu() {
  const [activeTab, setActiveTab] = useState(SUSHI_MENU[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const activeCategory = SUSHI_MENU.find(c => c.id === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.2)' }
      );
    }
  }, [activeTab]);

  const getCategoryIcon = (id: string, active: boolean) => {
    const className = `w-5 h-5 mr-2 transition-colors ${
      active ? 'text-jirafa-red' : 'text-gray-400 group-hover:text-gray-600'
    }`;
    switch (id) {
      case 'handrolls':
        return <HandrollIcon className={className} />;
      case 'specialty':
        return <RollIcon className={className} />;
      case 'tablas':
        return <TablaIcon className={className} />;
      case 'extras':
        return <ExtrasIcon className={className} />;
      default:
        return <RollIcon className={className} />;
    }
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-white text-gray-800 min-h-[80vh] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size:16px_16px">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <div className="w-20 h-20 bg-jirafa-red rounded-full mx-auto flex items-center justify-center mb-4 shadow-xl ring-4 ring-red-50">
            <SushiLogoIcon className="w-12 h-12 fill-white" />
          </div>
          <h2 className="text-5xl font-marker text-black mb-2 transform -rotate-2">
            LA JIRAFA <span className="text-jirafa-red">SUSHI</span>
          </h2>
          <p className="text-gray-500 font-sans tracking-widest uppercase text-sm font-bold flex items-center justify-center gap-2">
            <LeafIcon className="w-4 h-4 text-jirafa-green" />
            Fresh & Veggie
            <LeafIcon className="w-4 h-4 text-jirafa-green" />
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SUSHI_MENU.map(cat => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  group flex items-center px-6 py-3 rounded-full font-bold transition-all duration-300 uppercase tracking-wide text-sm border
                  ${
                    isActive
                      ? 'border-jirafa-red bg-red-50 text-jirafa-red shadow-md transform scale-105'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:shadow-sm'
                  }
                `}
              >
                {getCategoryIcon(cat.id, isActive)}
                {cat.title}
              </button>
            );
          })}
        </div>

        <div className="mb-10 w-full flex justify-center">
          {activeTab === 'handrolls' && (
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full animate-fade-in-up px-4">
              <div className="bg-white px-6 py-4 rounded-full shadow-lg shadow-jirafa-green/10 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center gap-4 border border-jirafa-green/30 w-full md:w-auto justify-center md:justify-start">
                <div className="bg-jirafa-green/10 p-3 rounded-full shrink-0 text-jirafa-green">
                  <HandrollIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col leading-tight text-left">
                  <span className="font-sans font-bold text-jirafa-green uppercase text-[10px] tracking-widest mb-1">
                    Base Handroll
                  </span>
                  <span className="font-sans font-medium text-sm md:text-lg text-gray-600">
                    Cebollín y Vegadelphia
                  </span>
                </div>
              </div>

              <div className="bg-white px-6 py-4 rounded-full shadow-lg shadow-jirafa-brown/10 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center gap-4 border border-jirafa-brown/30 w-full md:w-auto justify-center md:justify-start">
                <div className="bg-jirafa-brown/10 p-3 rounded-full shrink-0 text-jirafa-brown">
                  <BowlIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col leading-tight text-left">
                  <span className="font-sans font-bold text-jirafa-brown uppercase text-[10px] tracking-widest mb-1">
                    Base Gohan
                  </span>
                  <span className="font-sans font-medium text-sm md:text-lg text-gray-600">
                    Arroz, Cebollín, Palta y Vegadelphia
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specialty' && (
            <div className="animate-bounce-slight">
              <div className="bg-jirafa-red text-white px-8 py-4 rounded-full shadow-xl shadow-jirafa-red/30 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center gap-4 border-2 border-white ring-4 ring-jirafa-red/10">
                <PriceTagIcon className="w-8 h-8" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="font-sans font-bold text-white/80 uppercase text-[10px] tracking-widest mb-1">
                    Valor Unitario
                  </span>
                  <span className="font-sans font-bold text-2xl md:text-3xl text-white">
                    $6.900
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeCategory?.baseInfo && (
            <div className="inline-block bg-orange-50 border border-orange-100 rounded-lg px-4 py-2 text-jirafa-brown text-sm font-medium">
              ℹ️ {activeCategory.baseInfo}
            </div>
          )}
        </div>

        <div ref={contentRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {activeCategory?.items.map((item: MenuItem, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-gray-800 group-hover:text-jirafa-red transition-colors w-[70%]">
                    {item.name}
                  </h4>
                  {item.price && (
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 group-hover:bg-red-50 group-hover:text-jirafa-red group-hover:border-red-100 transition-colors">
                      <PriceTagIcon className="w-3 h-3 text-gray-400 group-hover:text-jirafa-red" />
                      <span className="font-bold text-sm">
                        ${item.price.toLocaleString('es-CL')}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              </div>

              <div>
                {item.ingredients && (
                  <div className="flex flex-wrap gap-2 mt-2 pt-3 border-t border-gray-50">
                    {item.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md border border-green-100 flex items-center gap-1"
                      >
                        <LeafIcon className="w-2 h-2" /> {ing}
                      </span>
                    ))}
                  </div>
                )}

                {item.note && (
                  <p className="text-xs text-orange-600 mt-2 font-medium bg-orange-50 inline-block px-2 py-1 rounded">
                    * {item.note}
                  </p>
                )}
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-red-50 to-transparent rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {activeCategory?.extraInfo && (
          <div className="mt-12 bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h5 className="relative z-10 font-bold text-jirafa-red mb-4 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Notas Importantes
            </h5>
            <ul className="relative z-10 text-sm space-y-3 text-gray-300">
              {activeCategory.extraInfo.map((info, idx) => (
                <li
                  key={idx}
                  className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                >
                  <span className="text-jirafa-red mr-3 mt-0.5">►</span> {info}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
