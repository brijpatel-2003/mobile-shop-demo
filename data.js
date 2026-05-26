// ============================================================
// City Gold Mobile Store — Mock Data
// ============================================================

const PHONES = [
  // ── FLAGSHIP ──────────────────────────────────────────────
  {
    id: 1, brand: 'Apple', name: 'iPhone 16 Pro Max',
    price: 189900, originalPrice: 199900, discount: 5,
    category: 'flagship', badge: 'Best Seller', trending: true,
    gradient: 'linear-gradient(145deg,#1c1c1e 0%,#3a3a3c 60%,#1c1c1e 100%)',
    accentColor: '#6366f1',
    specs: { display: '6.9" Super Retina XDR OLED', processor: 'Apple A18 Pro Chip',
      ram: '8GB RAM', storage: '256GB', camera: '48MP Triple Camera (ProRAW)',
      battery: '4685 mAh', rating: 4.9, reviews: 1247 }
  },
  {
    id: 2, brand: 'Samsung', name: 'Galaxy S25 Ultra',
    price: 129999, originalPrice: 149999, discount: 13,
    category: 'flagship', badge: 'New Launch', trending: true,
    gradient: 'linear-gradient(145deg,#0d1b4a 0%,#1a3a7a 60%,#0d47a1 100%)',
    accentColor: '#06b6d4',
    specs: { display: '6.9" QHD+ Dynamic AMOLED 2X', processor: 'Snapdragon 8 Elite',
      ram: '12GB RAM', storage: '256GB', camera: '200MP Quad Camera System',
      battery: '5000 mAh', rating: 4.8, reviews: 987 }
  },
  {
    id: 3, brand: 'OnePlus', name: 'OnePlus 13',
    price: 69999, originalPrice: 74999, discount: 7,
    category: 'flagship', badge: 'Top Rated', trending: false,
    gradient: 'linear-gradient(145deg,#7f0000 0%,#c62828 60%,#b71c1c 100%)',
    accentColor: '#ef4444',
    specs: { display: '6.82" BOE LTPO AMOLED 120Hz', processor: 'Snapdragon 8 Elite',
      ram: '12GB RAM', storage: '256GB', camera: '50MP Hasselblad Triple Camera',
      battery: '6000 mAh', rating: 4.8, reviews: 756 }
  },
  {
    id: 4, brand: 'Nothing', name: 'Nothing Phone 3',
    price: 59999, originalPrice: 64999, discount: 8,
    category: 'flagship', badge: 'Trending', trending: true,
    gradient: 'linear-gradient(145deg,#0d0d0d 0%,#1c1c1c 60%,#2a2a2a 100%)',
    accentColor: '#e0e0e0',
    specs: { display: '6.77" LTPO OLED 120Hz', processor: 'Snapdragon 8s Gen 3',
      ram: '12GB RAM', storage: '256GB', camera: '50MP Dual Camera (Essential)',
      battery: '5000 mAh', rating: 4.7, reviews: 534 }
  },
  // ── MID-RANGE ─────────────────────────────────────────────
  {
    id: 5, brand: 'Samsung', name: 'Galaxy A55 5G',
    price: 34999, originalPrice: 39999, discount: 13,
    category: 'mid-range', badge: 'Popular', trending: false,
    gradient: 'linear-gradient(145deg,#0a1628 0%,#1565c0 60%,#0d47a1 100%)',
    accentColor: '#3b82f6',
    specs: { display: '6.6" FHD+ Super AMOLED 120Hz', processor: 'Exynos 1480',
      ram: '8GB RAM', storage: '128GB', camera: '50MP Triple Camera OIS',
      battery: '5000 mAh', rating: 4.5, reviews: 432 }
  },
  {
    id: 6, brand: 'Vivo', name: 'Vivo V40 Pro 5G',
    price: 35999, originalPrice: 39999, discount: 10,
    category: 'mid-range', badge: '', trending: false,
    gradient: 'linear-gradient(145deg,#2d006e 0%,#6a1b9a 60%,#4a148c 100%)',
    accentColor: '#a855f7',
    specs: { display: '6.78" AMOLED 120Hz LTPO', processor: 'Snapdragon 7 Gen 3',
      ram: '8GB RAM', storage: '256GB', camera: '50MP ZEISS Dual Camera',
      battery: '5000 mAh', rating: 4.4, reviews: 321 }
  },
  {
    id: 7, brand: 'Oppo', name: 'Reno 13 Pro 5G',
    price: 36999, originalPrice: 42999, discount: 14,
    category: 'mid-range', badge: 'Value King', trending: false,
    gradient: 'linear-gradient(145deg,#003300 0%,#2e7d32 60%,#1b5e20 100%)',
    accentColor: '#22c55e',
    specs: { display: '6.83" AMOLED 120Hz', processor: 'MediaTek Dimensity 8350',
      ram: '12GB RAM', storage: '256GB', camera: '50MP Triple AI Camera',
      battery: '5600 mAh', rating: 4.5, reviews: 287 }
  },
  {
    id: 8, brand: 'Xiaomi', name: 'Xiaomi 14 Civi',
    price: 33999, originalPrice: 37999, discount: 11,
    category: 'mid-range', badge: '', trending: false,
    gradient: 'linear-gradient(145deg,#6d2400 0%,#f57c00 60%,#e65100 100%)',
    accentColor: '#f97316',
    specs: { display: '6.55" AMOLED 144Hz', processor: 'Snapdragon 8s Gen 3',
      ram: '12GB RAM', storage: '256GB', camera: '50MP Leica Triple Camera',
      battery: '4700 mAh', rating: 4.6, reviews: 412 }
  },
  // ── BUDGET ────────────────────────────────────────────────
  {
    id: 9, brand: 'Xiaomi', name: 'Redmi Note 14 Pro 5G',
    price: 22999, originalPrice: 25999, discount: 12,
    category: 'budget', badge: 'Value Pick', trending: false,
    gradient: 'linear-gradient(145deg,#6d1800 0%,#d84315 60%,#bf360c 100%)',
    accentColor: '#fb923c',
    specs: { display: '6.67" AMOLED 120Hz', processor: 'MediaTek Dimensity 7300',
      ram: '8GB RAM', storage: '128GB', camera: '200MP Triple Camera',
      battery: '5500 mAh', rating: 4.4, reviews: 678 }
  },
  {
    id: 10, brand: 'Samsung', name: 'Galaxy A35 5G',
    price: 22999, originalPrice: 26999, discount: 15,
    category: 'budget', badge: 'Best Budget', trending: false,
    gradient: 'linear-gradient(145deg,#003060 0%,#0277bd 60%,#01579b 100%)',
    accentColor: '#38bdf8',
    specs: { display: '6.6" FHD+ Super AMOLED', processor: 'Exynos 1380',
      ram: '6GB RAM', storage: '128GB', camera: '50MP Triple Camera',
      battery: '5000 mAh', rating: 4.3, reviews: 543 }
  },
  {
    id: 11, brand: 'Vivo', name: 'Vivo Y300 Plus 5G',
    price: 18999, originalPrice: 21999, discount: 14,
    category: 'budget', badge: '', trending: false,
    gradient: 'linear-gradient(145deg,#1a005e 0%,#4527a0 60%,#311b92 100%)',
    accentColor: '#8b5cf6',
    specs: { display: '6.67" AMOLED 120Hz', processor: 'Snapdragon 695 5G',
      ram: '8GB RAM', storage: '128GB', camera: '50MP Dual Camera',
      battery: '6500 mAh', rating: 4.3, reviews: 312 }
  },
  {
    id: 12, brand: 'Oppo', name: 'Oppo A3 Pro 5G',
    price: 19999, originalPrice: 22999, discount: 13,
    category: 'budget', badge: '', trending: false,
    gradient: 'linear-gradient(145deg,#002820 0%,#00695c 60%,#004d40 100%)',
    accentColor: '#10b981',
    specs: { display: '6.67" AMOLED 120Hz', processor: 'MediaTek Dimensity 7050',
      ram: '8GB RAM', storage: '256GB', camera: '64MP Triple Camera',
      battery: '5100 mAh', rating: 4.2, reviews: 245 }
  }
];

const ACCESSORIES = [
  { id: 1, name: 'AirPods Pro (2nd Gen)', brand: 'Apple', price: 24900, originalPrice: 26900, discount: 7, category: 'earphones', icon: 'fa-headphones', gradient: 'linear-gradient(145deg,#1c1c1e,#3a3a3c)', desc: 'Active Noise Cancellation, Adaptive Audio, MagSafe' },
  { id: 2, name: 'Galaxy Buds3 Pro', brand: 'Samsung', price: 17999, originalPrice: 19999, discount: 10, category: 'earphones', icon: 'fa-headphones', gradient: 'linear-gradient(145deg,#0d1b4a,#1565c0)', desc: '360 Audio, AI Live Translate, 30hr battery' },
  { id: 3, name: '65W SUPERVOOC Charger', brand: 'Oppo', price: 1299, originalPrice: 1799, discount: 28, category: 'chargers', icon: 'fa-bolt', gradient: 'linear-gradient(145deg,#003300,#2e7d32)', desc: 'SuperVOOC, Universal USB-C, Flash Charge' },
  { id: 4, name: '45W USB-C Super Fast', brand: 'Samsung', price: 1799, originalPrice: 2499, discount: 28, category: 'chargers', icon: 'fa-bolt', gradient: 'linear-gradient(145deg,#0d1b4a,#1565c0)', desc: 'Super Fast Charging 2.0, All USB-C devices' },
  { id: 5, name: 'Galaxy Watch Ultra', brand: 'Samsung', price: 62999, originalPrice: 69999, discount: 10, category: 'smartwatch', icon: 'fa-clock', gradient: 'linear-gradient(145deg,#1a1a2e,#2c3e50)', desc: 'Titanium Build, Advanced Health Monitoring' },
  { id: 6, name: 'Apple Watch Series 10', brand: 'Apple', price: 44900, originalPrice: 46900, discount: 4, category: 'smartwatch', icon: 'fa-clock', gradient: 'linear-gradient(145deg,#1c1c1e,#2c2c2e)', desc: "Thinnest Apple Watch, Crash Detection, ECG" },
  { id: 7, name: '20000mAh Power Bank', brand: 'Xiaomi', price: 1999, originalPrice: 2999, discount: 33, category: 'powerbank', icon: 'fa-battery-full', gradient: 'linear-gradient(145deg,#6d1800,#d84315)', desc: '33W Fast Charging, Dual Output, LED Display' },
  { id: 8, name: 'Premium Silicone Case', brand: 'Spigen', price: 799, originalPrice: 1299, discount: 38, category: 'cases', icon: 'fa-shield-alt', gradient: 'linear-gradient(145deg,#1a1a1a,#2d2d2d)', desc: 'MilSpec Drop Protection, Soft-touch finish' }
];

const REVIEWS = [
  { id: 1, name: 'Rahul Patel', location: 'Mehsana', rating: 5, text: 'Best mobile shop in Mehsana! Got my iPhone 16 Pro at an amazing price. Staff is super helpful and genuine products only. Highly recommend City Gold Mobile Store to everyone!', avatar: 'RP', date: '2 days ago', phone: 'iPhone 16 Pro Max' },
  { id: 2, name: 'Priya Shah', location: 'Unjha', rating: 5, text: 'Excellent service! Bought Samsung Galaxy S25 Ultra here. They gave me the best price and set everything up for me. You won\'t find better service in all of North Gujarat!', avatar: 'PS', date: '1 week ago', phone: 'Samsung Galaxy S25 Ultra' },
  { id: 3, name: 'Amit Desai', location: 'Visnagar', rating: 5, text: 'Outstanding experience! The staff knows everything about every phone. Got exactly what I needed within my budget. City Gold Mobile is the real deal in Mehsana!', avatar: 'AD', date: '2 weeks ago', phone: 'OnePlus 13' },
  { id: 4, name: 'Sneha Modi', location: 'Mehsana', rating: 5, text: 'Best deals and 100% genuine products! Bought AirPods Pro at the city\'s best price. Service is fast and they always have all the latest phones in stock.', avatar: 'SM', date: '3 weeks ago', phone: 'AirPods Pro' },
  { id: 5, name: 'Kiran Joshi', location: 'Becharaji', rating: 5, text: 'Trust is everything and City Gold has earned it over 15 years. Been their customer since college. Never had any issues whatsoever. Best mobile store in entire North Gujarat!', avatar: 'KJ', date: '1 month ago', phone: 'Xiaomi 14 Civi' },
  { id: 6, name: 'Dhruv Trivedi', location: 'Mehsana', rating: 5, text: 'Went to buy a budget phone and came out with the perfect recommendation fitting my needs. Staff is genuinely helpful, not pushy at all. 5 stars always!', avatar: 'DT', date: '1 month ago', phone: 'Redmi Note 14 Pro' }
];

const NOTIFICATIONS = [
  { name: 'Raj from Mehsana', action: 'just bought', item: 'iPhone 16 Pro Max', time: '2 min ago' },
  { name: 'Meera from Visnagar', action: 'enquired about', item: 'Samsung S25 Ultra', time: '5 min ago' },
  { name: 'Suresh from Unjha', action: 'just bought', item: 'OnePlus 13', time: '8 min ago' },
  { name: 'Anita from Mehsana', action: 'just bought', item: 'Nothing Phone 3', time: '12 min ago' },
  { name: 'Vikram from Kheralu', action: 'enquired about', item: 'AirPods Pro', time: '15 min ago' }
];
