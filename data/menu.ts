import { DailySpecial, MenuCategory } from '../types';

export const DAILY_SPECIALS: DailySpecial[] = [
  { day: 'Lunes', dayShort: 'L', dish: 'Tofu Arvejado', side: 'con Puré', price: 6500 },
  { day: 'Martes', dayShort: 'M', dish: 'Lasaña Boloñesa', side: 'de Berenjena', price: 7500 },
  { day: 'Miércoles', dayShort: 'M', dish: 'Chapsuí de Verduras', side: 'con Fideos', price: 6500 },
  {
    day: 'Jueves',
    dayShort: 'J',
    dish: 'Hummus de Garbanzos',
    side: 'con Verduras Salteadas',
    price: 6500,
  },
  { day: 'Viernes', dayShort: 'V', dish: 'Strogonoff de Seitán', side: 'con Arroz', price: 7500 },
];

export const SUSHI_MENU: MenuCategory[] = [
  {
    id: 'handrolls',
    title: 'Handrolls & Gohan',
    items: [
      {
        name: 'Handroll Nori',
        price: 3900,
        description:
          '+ 1 Ingrediente a elección: Tofu apanado, Tofu marinado, Seitán, Palta o Palmito.',
        note: 'Incluye Salsa de Soya o Teriyaki.',
      },
      {
        name: 'Handroll Furay',
        price: 4900,
        description:
          '+ 1 Ingrediente a elección: Tofu apanado, Tofu marinado, Seitán, Palta o Palmito.',
        note: 'Incluye Salsa de Soya o Teriyaki.',
      },
      {
        name: 'Gohan',
        price: 6900,
        description:
          '+ 1 ingrediente a elección: Tofu Furay, Tofu Teriyaki, Seitán, Tofu Marinado, Palmito o Not Chicken.',
        note: 'Incluye Salsa de Soya y Teriyaki.',
      },
    ],
  },
  {
    id: 'specialty',
    title: 'Rolls de Especialidad',
    items: [
      {
        name: 'Membrillo Zen',
        description: 'Envuelto en Sésamo, con Dulce de Membrillo, Vegadelphia y Cebollín.',
      },
      {
        name: 'Teriyaki Bliss',
        description: 'Envuelto en Vegadelphia, con Palta, Tofu Teriyaki y Cebollín.',
      },
      {
        name: 'Mango Samurai',
        description: 'Envuelto en Mango, con Seitán en Salsa BBQ picante, Vegadelphia y Cebollín.',
      },
      {
        name: 'Acevichado Tempura',
        description:
          'Apanado y Frito, con No Salmón de Zanahoria marinada, Palta, Vegadelphia y Toping de Salsa Acevichada.',
      },
      {
        name: 'Golden Kyoto',
        description: 'Apanado y Frito, con Not Chicken, Vegadelphia, Zanahoria y Nueces.',
      },
    ],
  },
  {
    id: 'tablas',
    title: 'Tablas (Promociones)',
    items: [
      {
        name: '30 Piezas',
        price: 15500,
        description:
          'Avocado Tofu Furay (Tofu apanado, Cebollín, Vegadelphia) • California Avocado (Palta, Zanahoria, Vegadelphia) • Furay Palmito (Palmito, Cebollín, Vegadelphia).',
      },
      {
        name: '50 Piezas',
        price: 22000,
        description:
          'Avocado Tofu (Tofu marinado, Cebollín, Vegadelphia) • California Tofu Furay (Tofu Apanado, Cebollín, Vegadelphia) • Not Sake Palmito (Palmito, Zanahoria, Vegadelphia) • Furay Seitán (Seitán, Cebollín, Vegadelphia) • Jirafa Furay (Zanahoria, Nuez, Vegadelphia).',
      },
      {
        name: '70 Piezas',
        price: 30000,
        description:
          'Avocado Palmito • Not Sake Seitán • California Tofu Furay • Furay Tofu (Marinado, Zanahoria) • Furay Seitán (Nuez) • California Avocado • Furay Avocado.',
      },
    ],
    extraInfo: [
      'INCLUYE Palitos y una Salsa a elección por roll: Soya o Teriyaki.',
      'PUEDES PEDIR FURAY cualquier roll de las Tablas por +$1.000.',
    ],
  },
  {
    id: 'extras',
    title: 'Cambios y Agregados',
    items: [
      {
        name: 'Agregados Simples',
        price: 1000,
        description: 'Zanahoria, Cebollín, Pepino, Vegadelphia.',
      },
      {
        name: 'Agregados Especiales',
        price: 1500,
        description:
          'Seitán, Tofu marinado, Tofu Furay, Nueces, Palta, Palmito, Salsa Acevichada, Salsa de Maracuya, Salsa de Pimentón Asado.',
      },
    ],
  },
];

export const CONTACT_INFO = {
  phone: '+56 9 8841 2401',
  location: 'José Narciso Aguirre 0249, local 2, El Quisco',
  subtitle: 'Gastronomía Plant based',
  hours: 'Atendemos desde las 13hrs 🌟',
  service: 'Mesas y Delivery',
  history: 'Desde el 2018',
  instagram: '@lajirafaveggie',
};
