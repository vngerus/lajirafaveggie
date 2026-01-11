import type { Metadata } from 'next';
import { Rubik, Permanent_Marker, Geist_Mono } from 'next/font/google'; //
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

const permanentMarker = Permanent_Marker({
  variable: '--font-marker',
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'La Jirafa Veggie | Gastronomía Plant Based en El Quisco',
  description:
    'Disfruta del mejor menú semanal saludable y Sushi Bar 100% vegano. Ubicados en José Narciso Aguirre 0249, El Quisco. ¡Haz tu pedido!',
  keywords: ['Comida Vegana El Quisco', 'Sushi Vegano', 'Almuerzos Saludables', 'La Jirafa Veggie'],
  openGraph: {
    title: 'La Jirafa Veggie | Gastronomía Plant Based',
    description: 'Almuerzos caseros y Sushi Bar vegano en el corazón de El Quisco.',
    url: 'https://lajirafaveggie.cl',
    siteName: 'La Jirafa Veggie',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${rubik.variable} ${permanentMarker.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
