"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Search, ArrowRight, X, CheckCircle, MessageCircle, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SOLAR_IMG = "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=900&h=600&fit=crop&auto=format";
const BLACK_WIRES = "https://images.unsplash.com/photo-1687038520579-8d8f24721267?w=900&h=600&fit=crop&auto=format";
const WIRE_PILE = "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?w=900&h=600&fit=crop&auto=format";
const COPPER_COIL = "https://images.unsplash.com/photo-1613031595478-de64daa4b8f9?w=900&h=600&fit=crop&auto=format";
const ORANGE_WIRES = "https://images.unsplash.com/photo-1717386255785-59c670564341?w=900&h=600&fit=crop&auto=format";
const HERO_BG = ORANGE_WIRES;

const WHATSAPP_BASE = 'https://wa.me/923063366401?text=';

const products = [
  {
    id: 'solar-4mm',
    category: 'solar',
    name: 'NPC Solar DC Cable 4mm²',
    shortSpec: '4mm² · UV Resistant · 1500V DC',
    specs: ['4mm² cross section', 'UV-stabilised PVC jacket', 'Rated 1500V DC', 'Temp. range –40°C to +90°C', 'Suitable for rooftop & ground-mount'],
    image: SOLAR_IMG,
    description: 'Single-core DC cable engineered for solar photovoltaic systems. UV-stabilised insulation ensures long outdoor service life in Pakistan\'s harsh climate.',
  },
  {
    id: 'solar-6mm',
    category: 'solar',
    name: 'NPC Solar DC Cable 6mm²',
    shortSpec: '6mm² · UV Resistant · 1500V DC',
    specs: ['6mm² cross section', 'UV-stabilised PVC jacket', 'Rated 1500V DC', 'Low resistance — reduces energy loss', 'Suitable for larger solar arrays'],
    image: SOLAR_IMG,
    description: 'Heavier-gauge solar DC cable for larger installations where minimising voltage drop is critical. Same UV-resistant construction as the 4mm² model.',
  },
  {
    id: 'house-1mm',
    category: 'house',
    name: 'NPC House Wire 1mm²',
    shortSpec: '1mm² · PVC Insulated · 450/750V',
    specs: ['1mm² copper conductor', 'PVC insulation', 'Rated 450/750V', 'Heat-resistant to 70°C', 'Available: red, black, green, blue, yellow'],
    image: BLACK_WIRES,
    description: 'Standard house wiring cable for light-duty residential circuits — lighting, fan wiring, and socket runs.',
  },
  {
    id: 'house-15mm',
    category: 'house',
    name: 'NPC House Wire 1.5mm²',
    shortSpec: '1.5mm² · PVC Insulated · 450/750V',
    specs: ['1.5mm² copper conductor', 'PVC insulation', 'Rated 450/750V', 'Heat-resistant to 70°C', 'Multi-colour available'],
    image: BLACK_WIRES,
    description: 'Mid-gauge residential wire suitable for power sockets and general-purpose circuits throughout the home.',
  },
  {
    id: 'house-25mm',
    category: 'house',
    name: 'NPC House Wire 2.5mm²',
    shortSpec: '2.5mm² · PVC Insulated · 450/750V',
    specs: ['2.5mm² copper conductor', 'Thicker PVC insulation', 'Rated 450/750V', 'Suitable for AC and high-load circuits'],
    image: BLACK_WIRES,
    description: 'Heavy residential wire for air-conditioner feeds and higher-current circuits where safety and durability are paramount.',
  },
  {
    id: 'auto-primary',
    category: 'auto',
    name: 'NPC Auto Primary Wire',
    shortSpec: 'Flexible · 60V · PVC Insulated',
    specs: ['Stranded copper conductor', 'PVC insulation', 'Rated 60V DC', 'Heat-resistant to 80°C', 'Vibration-resistant stranding'],
    image: WIRE_PILE,
    description: 'General-purpose automotive wire for 12V/24V vehicle electrical systems. Flexible stranding handles engine-bay vibration without fatigue cracking.',
  },
  {
    id: 'auto-battery',
    category: 'auto',
    name: 'NPC Battery Cable (Auto)',
    shortSpec: 'Heavy-Duty · Flexible · High Amp',
    specs: ['High-strand copper conductor', 'Thick PVC jacket', 'Rated for high-current battery circuits', 'Available in 16mm², 25mm², 35mm²', 'Red/Black colour coding'],
    image: WIRE_PILE,
    description: 'Heavy-duty battery interconnect cable for vehicles. High strand count for maximum flexibility during installation.',
  },
  {
    id: 'wapda-aerial',
    category: 'wapda',
    name: 'NPC Aerial Bunch Cable (ABC)',
    shortSpec: 'Overhead · Insulated · 0.6/1kV',
    specs: ['XLPE insulated cores', 'Rated 0.6/1kV', 'Messenger wire included', 'Suitable for 11kV distribution', 'Weather and UV resistant'],
    image: COPPER_COIL,
    description: 'Aerial Bundled Cable for overhead power distribution on LV lines. Reduces line losses and outperforms bare conductors in humid conditions.',
  },
];

function ProductModal({ product, onClose }) {
  const { t } = useLanguage();
  const msg = encodeURIComponent(`Hi New Pak Cables, I'd like a quote for: ${product.name}`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(12,35,64,0.75)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 sm:h-64 bg-slate-200 rounded-t-2xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{ color: 'var(--npc-navy)' }}
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-0 left-0 px-4 pb-4 text-white">
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: 'var(--npc-copper)', fontFamily: 'var(--font-heading)' }}>
              {product.category === 'solar' ? 'Solar Cables' : product.category === 'house' ? 'House Wiring' : product.category === 'auto' ? 'Auto Wires' : 'WAPDA Cables'}
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.2 }}>{product.name}</h2>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-relaxed mb-5 font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.72 }}>{product.description}</p>

          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>
            Specifications
          </h3>
          <ul className="space-y-2 mb-6">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--npc-copper)' }} />
                <span className="text-sm" style={{ color: 'var(--npc-navy)' }}>{spec}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-xl text-sm font-normal mb-6" style={{ backgroundColor: 'rgba(216,90,48,0.06)', borderLeft: '3px solid var(--npc-copper)', color: 'var(--npc-navy)', opacity: 0.8 }}>
            Full spec sheet available on request. Contact us for bulk pricing and lead times.
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${WHATSAPP_BASE}${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body)' }}
            >
              <MessageCircle size={16} />
              {t('products.whatsapp')}
            </a>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
            >
              {t('products.request.quote')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ category }) {
  const { t } = useLanguage();
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(216,90,48,0.08)' }}>
        <Package className="w-10 h-10" style={{ color: 'var(--npc-copper)', opacity: 0.5 }} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        {t('products.coming.soon')}
      </h3>
      <p className="text-sm font-normal mb-5" style={{ color: 'var(--npc-navy)', opacity: 0.6, maxWidth: '340px' }}>
        {t('products.coming.desc')}
      </p>
      <a
        href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi, I'm looking for ${category} cables. Can you help?`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white"
        style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body)' }}
      >
        <MessageCircle size={15} />
        Ask on WhatsApp
      </a>
    </div>
  );
}

export default function Products() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { key: 'all', label: t('products.all') },
    { key: 'solar', label: t('products.solar.title') },
    { key: 'house', label: t('products.house.title') },
    { key: 'auto', label: t('products.auto.title') },
    { key: 'wapda', label: t('products.wapda.title') },
  ];

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortSpec.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="relative text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-800">
          <img src={HERO_BG} alt="New Pak Cables wire products" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,35,64,0.92) 0%, rgba(24,95,165,0.75) 100%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            {t('products.title')}
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-normal" style={{ color: 'rgba(186,213,255,0.9)' }}>
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Filter bar + search ───────────────────────────────── */}
      <section className="sticky top-20 z-30 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex gap-1.5 flex-wrap flex-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: activeCategory === cat.key ? 'var(--npc-navy)' : 'rgba(12,35,64,0.06)',
                    color: activeCategory === cat.key ? 'white' : 'var(--npc-navy)',
                    fontWeight: activeCategory === cat.key ? 600 : 400,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--npc-navy)', opacity: 0.4 }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('products.search')}
                className="w-full pl-9 pr-3 py-2 rounded-lg text-sm outline-none"
                style={{ border: '1.5px solid rgba(0,0,0,0.12)', color: 'var(--npc-navy)', fontFamily: 'var(--font-body)' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--npc-blue)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product grid ─────────────────────────────────────── */}
      <section className="py-10 sm:py-14" style={{ backgroundColor: '#F2F5F9', minHeight: '420px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left"
                  style={{ border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="relative h-44 bg-slate-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,35,64,0.5) 0%, transparent 60%)' }} />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium mb-1 uppercase tracking-wider" style={{ color: 'var(--npc-copper)', fontFamily: 'var(--font-heading)' }}>
                      {product.category === 'solar' ? 'Solar' : product.category === 'house' ? 'House Wiring' : product.category === 'auto' ? 'Auto' : 'WAPDA'}
                    </p>
                    <h3 className="text-sm font-semibold mb-1.5 leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs font-normal mb-4" style={{ color: 'var(--npc-navy)', opacity: 0.6 }}>{product.shortSpec}</p>
                    <div
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-white text-center transition-colors"
                      style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
                    >
                      {t('products.request.quote')}
                    </div>
                  </div>
                </button>
              ))
            ) : searchTerm ? (
              <div className="col-span-full flex flex-col items-center py-20 text-center">
                <Search className="w-12 h-12 mb-4" style={{ color: 'var(--npc-navy)', opacity: 0.2 }} />
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)', opacity: 0.5 }}>
                  No products match "{searchTerm}"
                </p>
              </div>
            ) : (
              <EmptyState category={categories.find(c => c.key === activeCategory)?.label || activeCategory} />
            )}
          </div>

          {filtered.length > 0 && (
            <div className="mt-10 text-center p-5 rounded-2xl" style={{ backgroundColor: 'rgba(12,35,64,0.05)', border: '1px dashed rgba(12,35,64,0.2)' }}>
              <p className="text-sm font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.65 }}>
                Full specifications coming soon — <Link href="/contact" className="font-medium underline" style={{ color: 'var(--npc-blue)' }}>contact us</Link> for current availability, custom gauges, and bulk pricing.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 text-white" style={{ background: 'linear-gradient(135deg, var(--npc-navy) 0%, var(--npc-blue) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Need Custom Solutions?</h2>
          <p className="text-base sm:text-lg mb-8 font-normal" style={{ color: 'rgba(186,213,255,0.9)' }}>
            We offer customised cable solutions for specific gauges, lengths, and applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_BASE + encodeURIComponent("Hi New Pak Cables, I need a custom cable solution.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body)' }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
            >
              Contact Our Team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
