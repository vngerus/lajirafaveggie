export interface Ingredient {
  name: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  priceString?: string;
  ingredients?: string[];
  note?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  baseInfo?: string;
  extraInfo?: string[];
}

export interface DailySpecial {
  day: string;
  dayShort: string;
  dish: string;
  side?: string;
  price: number;
}

export type ViewState = 'home' | 'veggie' | 'sushi';
