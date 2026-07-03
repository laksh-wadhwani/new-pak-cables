"use client";

import Link from 'next/link';
import Image from 'next/image';
import sanvoLogo from '../../public/images/sanvo-logo.png';
import { Zap, Home as HomeIcon, Car, Cable, ArrowRight, Shield, CheckCircle, Factory, Truck, Wrench, Headphones } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const HERO_BG = "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1600&h=900&fit=crop&auto=format";
const FACTORY_TEAM = "https://images.unsplash.com/photo-1700727448686-b314cb5f9948?w=1200&h=800&fit=crop&auto=format";
const SOLAR_IMG = "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=800&h=600&fit=crop&auto=format";
const BLACK_WIRES = "https://images.unsplash.com/photo-1687038520579-8d8f24721267?w=800&h=600&fit=crop&auto=format";
const WIRE_PILE = "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?w=800&h=600&fit=crop&auto=format";
const COPPER_COIL = "https://images.unsplash.com/photo-1613031595478-de64daa4b8f9?w=800&h=600&fit=crop&auto=format";
const ORANGE_WIRES = "https://images.unsplash.com/photo-1717386255785-59c670564341?w=1600&h=600&fit=crop&auto=format";

const WHATSAPP_HREF = `https://wa.me/923001234567?text=${encodeURIComponent("Hi New Pak Cables, I'd like to get a quote.")}`;

function H(props) {
  const { as: Tag = 'h2', weight = 600, style, ...rest } = props;
  return <Tag {...rest} style={{ fontFamily: 'var(--font-heading)', fontWeight: weight, ...style }} />;
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        <div className="absolute inset-0" style={{ backgroundColor: '#0C2340' }}>
          <img src={HERO_BG} alt="New Pak Cables manufacturing facility" className="w-full h-full object-cover" style={{ opacity: 0.32 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,35,64,0.94) 0%, rgba(24,95,165,0.70) 60%, rgba(12,35,64,0.88) 100%)' }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
            <div className="max-w-3xl">
              <p className="text-2xl sm:text-3xl mb-3 font-urdu" style={{ color: 'var(--npc-copper)', fontWeight: 600 }}>
                تعمیر سے تعبیر تک
              </p>
              <p className="text-sm mb-6 tracking-widest uppercase font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                From Construction to Realization
              </p>

              <H as="h1" weight={700} className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-white">
                {t('home.hero.title')}
              </H>
              <p className="text-lg sm:text-xl mb-10 leading-relaxed font-normal" style={{ color: 'rgba(186,213,255,0.88)' }}>
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-white px-7 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-sm shadow-lg"
                  style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
                >
                  {t('home.hero.cta')}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-medium transition-all hover:bg-white hover:bg-opacity-10 text-sm"
                  style={{ border: '2px solid rgba(255,255,255,0.3)', color: 'white', fontFamily: 'var(--font-body)' }}
                >
                  {t('home.hero.cta2')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badge strip */}
        <div className="relative z-10" style={{ backgroundColor: 'rgba(8,22,44,0.9)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Zap className="w-5 h-5" />, label: t('home.trust.power') },
                { icon: <CheckCircle className="w-5 h-5" />, label: t('home.trust.quality') },
                { icon: <Truck className="w-5 h-5" />, label: t('home.trust.supply') },
                { icon: <Shield className="w-5 h-5" />, label: t('home.trust.trademark') },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-5 px-4"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
                >
                  <span style={{ color: 'var(--npc-copper)', flexShrink: 0 }}>{badge.icon}</span>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: 'rgba(255,255,255,0.82)' }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About preview ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <H className="text-3xl sm:text-4xl mb-6 leading-tight" style={{ color: 'var(--npc-navy)' }}>
                {t('home.about.title')}
              </H>
              <p className="text-base sm:text-lg leading-relaxed mb-6 font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.72 }}>
                {t('home.about.desc')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-sm"
                style={{ color: 'var(--npc-blue)', fontFamily: 'var(--font-body)' }}
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-200" style={{ aspectRatio: '4/3' }}>
                <img src={FACTORY_TEAM} alt="New Pak Cables manufacturing team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3" style={{ borderLeft: '4px solid var(--npc-copper)' }}>
                <Factory className="w-7 h-7" style={{ color: 'var(--npc-copper)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--npc-navy)', lineHeight: 1 }}>Ghotki</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">Sindh, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product categories ─────────────────────────────────── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2F5F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <H className="text-3xl sm:text-4xl mb-3" style={{ color: 'var(--npc-navy)' }}>
              {t('home.products.title')}
            </H>
            <div className="w-14 h-0.5 mx-auto" style={{ backgroundColor: 'var(--npc-copper)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: SOLAR_IMG, icon: <Zap className="w-5 h-5" />, title: t('home.products.solar'), desc: t('home.products.solar.desc') },
              { img: BLACK_WIRES, icon: <HomeIcon className="w-5 h-5" />, title: t('home.products.house'), desc: t('home.products.house.desc') },
              { img: WIRE_PILE, icon: <Car className="w-5 h-5" />, title: t('home.products.auto'), desc: t('home.products.auto.desc') },
              { img: COPPER_COIL, icon: <Cable className="w-5 h-5" />, title: t('home.products.wapda'), desc: t('home.products.wapda.desc') },
            ].map((product, index) => (
              <Link
                key={index}
                href="/products"
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-700 block"
                style={{ aspectRatio: '3/4' }}
              >
                <img src={product.img} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,35,64,0.97) 0%, rgba(12,35,64,0.45) 52%, rgba(12,35,64,0.08) 100%)' }} />
                <div className="absolute top-4 left-4 p-2 rounded-lg text-white" style={{ backgroundColor: 'var(--npc-copper)' }}>
                  {product.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <H as="h3" weight={600} className="text-white text-base mb-1.5">{product.title}</H>
                  <p className="text-xs leading-relaxed font-normal" style={{ color: 'rgba(186,213,255,0.8)' }}>{product.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--npc-copper)' }}>
                    View Products <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-lg transition-all border-2"
              style={{ color: 'var(--npc-blue)', borderColor: 'var(--npc-blue)', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--npc-blue)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--npc-blue)'; }}
            >
              Browse Full Catalogue
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full-bleed wire strip ─────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-800" style={{ height: '180px' }}>
        <img src={ORANGE_WIRES} alt="New Pak Cables — precision wires" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(12,35,64,0.70)' }}>
          <p className="text-center text-white text-sm sm:text-lg font-medium uppercase tracking-widest px-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.16em' }}>
            Manufactured with Precision &nbsp;·&nbsp; Trusted Across Pakistan
          </p>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <H className="text-3xl sm:text-4xl mb-3" style={{ color: 'var(--npc-navy)' }}>
              {t('home.why.title')}
            </H>
            <div className="w-14 h-0.5 mx-auto" style={{ backgroundColor: 'var(--npc-copper)' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Factory className="w-8 h-8" />, title: t('home.why.capacity'), desc: t('home.why.capacity.desc') },
              { icon: <Truck className="w-8 h-8" />, title: t('home.why.distribution'), desc: t('home.why.distribution.desc') },
              { icon: <Wrench className="w-8 h-8" />, title: t('home.why.materials'), desc: t('home.why.materials.desc') },
              { icon: <Headphones className="w-8 h-8" />, title: t('home.why.support'), desc: t('home.why.support.desc') },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: '#F2F5F9', borderTop: '3px solid var(--npc-copper)' }}>
                <div className="mb-4 w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(216,90,48,0.1)' }}>
                  <span style={{ color: 'var(--npc-copper)' }}>{item.icon}</span>
                </div>
                <H as="h3" weight={600} className="text-base mb-2" style={{ color: 'var(--npc-navy)' }}>{item.title}</H>
                <p className="text-sm leading-relaxed font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.68 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SANVO cross-promo ──────────────────────────────────── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--sanvo-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5 uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(29,158,117,0.12)', color: 'var(--sanvo-green)', border: '1px solid rgba(29,158,117,0.25)' }}
              >
                Solar Solutions by NPC Group
              </div>
              <Image src={sanvoLogo} alt="SANVO Electronics" className="w-40 sm:w-52 mb-5 h-auto" />
              <H className="text-2xl sm:text-3xl mb-5 leading-tight" style={{ color: 'var(--sanvo-dark)' }}>
                {t('home.sanvo.desc')}
              </H>
              <div className="space-y-2.5 mb-7">
                {[t('home.sanvo.inverters'), t('home.sanvo.mppt'), t('home.sanvo.chargers')].map((product, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-xl" style={{ backgroundColor: 'rgba(29,158,117,0.08)', borderLeft: '3px solid var(--sanvo-green)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--sanvo-green)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--sanvo-dark)' }}>{product}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/sanvo"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg text-sm"
                style={{ backgroundColor: 'var(--sanvo-green)', fontFamily: 'var(--font-body)' }}
              >
                Explore SANVO Products
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-200" style={{ aspectRatio: '4/3' }}>
                <img src={SOLAR_IMG} alt="SANVO solar energy solutions" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(29,158,117,0.2) 0%, rgba(11,46,30,0.1) 100%)' }} />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3.5 text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--sanvo-green)', lineHeight: 1 }}>3</div>
                <div className="text-xs font-medium text-gray-500 mt-1">Solar Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dealer / Distributor CTA band ────────────────────── */}
      <section className="py-12 sm:py-16 text-white" style={{ background: 'linear-gradient(135deg, var(--npc-navy) 0%, #1a3a6e 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <H as="h2" weight={700} className="text-2xl sm:text-3xl mb-2 text-white">
                {t('home.dealer.title')}
              </H>
              <p className="font-normal max-w-2xl" style={{ color: 'rgba(186,213,255,0.85)' }}>
                {t('home.dealer.desc')}
              </p>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg text-sm whitespace-nowrap"
              style={{ backgroundColor: 'var(--npc-copper)', color: 'white', fontFamily: 'var(--font-body)' }}
            >
              {t('home.dealer.cta')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact / Location preview ────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <H className="text-2xl sm:text-3xl mb-6" style={{ color: 'var(--npc-navy)' }}>
                {t('home.contact.title')}
              </H>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📍', text: t('contact.address') },
                  { icon: '📞', text: '+92 XXX XXXXXXX' },
                  { icon: '✉️', text: 'info@newpakcables.com' },
                  { icon: '🕐', text: 'Mon–Sat: 9:00 AM – 6:00 PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.75 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '280px', border: '1px solid rgba(0,0,0,0.08)' }}>
              <iframe
                title="New Pak Cables location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=69.28%2C27.99%2C69.34%2C28.02&layer=mapnik&marker=28.005%2C69.31"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
