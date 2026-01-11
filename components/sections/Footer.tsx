import { CONTACT_INFO } from '@/data/menu';
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  UtensilsIcon,
  WhatsappIcon,
} from '@/public/assets/icons';

export default function Footer() {
  return (
    <div>
      {' '}
      <footer
        id="contacto"
        className="bg-[#1a2e1a] text-white py-16 relative overflow-hidden font-sans"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#7cb97c 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-marker text-5xl md:text-6xl text-[#c4a44a] tracking-wide">
              La Jirafa Veggie
            </h2>
            <p className="mt-4 text-lg text-[#a8b8a8] md:text-xl font-light">
              Gastronomía Plant Based 🌱 ✨
            </p>

            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2a4a2a] px-4 py-1 text-sm text-[#7cb97c]">
              🌿 Desde el 2018
            </span>

            <a
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl group"
            >
              <WhatsappIcon className="h-6 w-6" />
              Hacer Pedido
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#243424] p-8 shadow-lg border border-[#3a5a3a]/30">
              <h3 className="mb-6 border-b border-[#3a5a3a] pb-3 font-marker text-xl tracking-widest text-[#c4a44a]">
                Información
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4a2a]">
                    <MapPinIcon className="h-5 w-5 text-[#7cb97c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Ubicación</h4>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        CONTACT_INFO.location
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#a8b8a8] hover:text-[#c4a44a] hover:underline transition-colors"
                    >
                      {CONTACT_INFO.location}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4a2a]">
                    <ClockIcon className="h-5 w-5 text-[#7cb97c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Horario</h4>
                    <p className="text-sm text-[#a8b8a8]">{CONTACT_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4a2a]">
                    <UtensilsIcon className="h-5 w-5 text-[#7cb97c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Servicios</h4>
                    <p className="text-sm text-[#a8b8a8]">{CONTACT_INFO.service}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#243424] p-8 shadow-lg border border-[#3a5a3a]/30">
              <h3 className="mb-6 border-b border-[#3a5a3a] pb-3 font-marker text-xl tracking-widest text-[#c4a44a]">
                Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4a2a]">
                    <PhoneIcon className="h-5 w-5 text-[#7cb97c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Teléfono</h4>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="text-sm text-[#7cb97c] hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a4a2a]">
                    <InstagramIcon className="h-5 w-5 text-[#7cb97c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Instagram</h4>
                    <a
                      href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#7cb97c] hover:underline"
                    >
                      {CONTACT_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#2a4a2a] text-center text-sm text-[#6a8a6a]">
            <p>© {new Date().getFullYear()} La Jirafa Veggie. Hecho con 🌱 y ❤️ en El Quisco.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
