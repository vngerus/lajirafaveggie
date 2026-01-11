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
  title: 'La Jirafa Veggie | Gastronomía Plant Based',
  description: 'Menú semanal saludable y Sushi Bar vegano en El Quisco.',
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
