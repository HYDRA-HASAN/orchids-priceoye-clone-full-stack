export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  specs?: string[];
}

export const products: Product[] = [
  {
    id: 'iphone-15-pro-max',
    name: 'Apple iPhone 15 Pro Max',
    price: 469999,
    originalPrice: 499999,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    category: 'Mobile',
    specs: ['6.7" Display', 'A17 Pro Chip', '256GB Storage', '48MP Camera']
  },
  {
    id: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    price: 379999,
    originalPrice: 409999,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    category: 'Mobile',
    specs: ['6.8" AMOLED', 'Snapdragon 8 Gen 3', '12GB RAM', '200MP Camera']
  },
  {
    id: 'xiaomi-14-pro',
    name: 'Xiaomi 14 Pro',
    price: 189999,
    originalPrice: 219999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    category: 'Mobile',
    specs: ['6.73" Display', 'Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera']
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    price: 159999,
    originalPrice: 179999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    category: 'Mobile',
    specs: ['6.82" AMOLED', 'Snapdragon 8 Gen 3', '16GB RAM', '50MP Camera']
  },
  {
    id: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    price: 249999,
    originalPrice: 279999,
    image: 'https://images.unsplash.com/photo-1598618443855-232ee0f819f2?w=500&q=80',
    category: 'Mobile',
    specs: ['6.7" OLED', 'Google Tensor G3', '12GB RAM', '50MP Camera']
  },
  {
    id: 'vivo-x100-pro',
    name: 'Vivo X100 Pro',
    price: 179999,
    originalPrice: 199999,
    image: 'https://images.unsplash.com/photo-1592286927505-0b0b2b3f2b85?w=500&q=80',
    category: 'Mobile',
    specs: ['6.78" AMOLED', 'Dimensity 9300', '16GB RAM', '50MP Camera']
  },
  {
    id: 'oppo-find-x7',
    name: 'OPPO Find X7 Ultra',
    price: 169999,
    originalPrice: 189999,
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&q=80',
    category: 'Mobile',
    specs: ['6.82" AMOLED', 'Snapdragon 8 Gen 3', '16GB RAM', '50MP Camera']
  },
  {
    id: 'realme-gt-5-pro',
    name: 'Realme GT 5 Pro',
    price: 119999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&q=80',
    category: 'Mobile',
    specs: ['6.78" AMOLED', 'Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera']
  },
  {
    id: 'infinix-note-40-pro',
    name: 'Infinix Note 40 Pro',
    price: 54999,
    originalPrice: 64999,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80',
    category: 'Mobile',
    specs: ['6.78" AMOLED', 'Dimensity 7020', '12GB RAM', '108MP Camera']
  },
  {
    id: 'tecno-phantom-x2',
    name: 'Tecno Phantom X2 Pro',
    price: 89999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80',
    category: 'Mobile',
    specs: ['6.8" AMOLED', 'Dimensity 9000', '12GB RAM', '50MP Camera']
  },
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    price: 49999,
    originalPrice: 54999,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500',
    category: 'Earbuds',
    specs: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe Charging', '30h Battery']
  },
  {
    id: 'samsung-buds-pro-3',
    name: 'Samsung Galaxy Buds3 Pro',
    price: 39999,
    originalPrice: 44999,
    image: 'https://images.unsplash.com/photo-1590658165737-15a047b7a0da?w=500',
    category: 'Earbuds',
    specs: ['ANC', '360 Audio', 'Wireless Charging', '28h Battery']
  },
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    price: 139999,
    originalPrice: 159999,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
    category: 'Smart Watch',
    specs: ['Always-On Display', 'S9 Chip', 'Blood Oxygen', '18h Battery']
  },
  {
    id: 'samsung-watch-6',
    name: 'Samsung Galaxy Watch6 Classic',
    price: 89999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500',
    category: 'Smart Watch',
    specs: ['AMOLED Display', 'Rotating Bezel', 'Health Tracking', '40h Battery']
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 14" M3',
    price: 449999,
    originalPrice: 489999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'Laptop',
    specs: ['14" Liquid Retina XDR', 'M3 Chip', '16GB RAM', '512GB SSD']
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    price: 319999,
    originalPrice: 359999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    category: 'Laptop',
    specs: ['15.6" OLED', 'Intel i7-13700H', '16GB RAM', '1TB SSD']
  }
];
