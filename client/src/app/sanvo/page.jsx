"use client";

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, MessageCircle, Zap, Battery, Power, Touchpad } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import sanvoLogo from '../../../public/images/sanvo-logo.png';

const HERO_BG = "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=1600&h=900&fit=crop&auto=format";
const SOLAR_AUTUMN = "https://images.unsplash.com/photo-1763114613273-ec505136d03a?w=1200&h=900&fit=crop&auto=format";
const SOLAR_RESIDENTIAL = "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?w=1200&h=900&fit=crop&auto=format";
const SOLAR_ROOF = "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=1200&h=900&fit=crop&auto=format";

const WHATSAPP_BASE = 'https://wa.me/923063366401?text=';

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Sanvo() {
  const { t } = useLanguage();

  const products = [
    {
      img: SOLAR_ROOF,
      icon: <Power className="w-7 h-7" />,
      title: t('sanvo.inverters.title'),
      desc: t('sanvo.inverters.desc'),
      accent: 'var(--sanvo-amber)',
      highlight: {
        icon: <Touchpad className="w-5 h-5" />,
        label: 'Touch-Button Control Panel',
        detail: 'Modern touch-panel interface — intuitive control, clean industrial design.',
      },
      specs: [
        'Pure sine wave AC output',
        'High conversion efficiency (≥93%)',
        'Touch-button control panel',
        'Overload & short-circuit protection',
        'LCD status display',
      ],
      whatsapp: WHATSAPP_BASE + encodeURIComponent('Hi SANVO/New Pak Cables, I\'d like details on the PV Inverter.'),
    },
    {
      img: SOLAR_AUTUMN,
      icon: <Zap className="w-7 h-7" />,
      title: t('sanvo.mppt.title'),
      desc: t('sanvo.mppt.desc'),
      accent: 'var(--sanvo-green)',
      highlight: null,
      specs: [
        'Advanced MPPT algorithm',
        'LCD display with real-time data',
        'Over-voltage, over-current, reverse protection',
        'Wide input voltage range',
        'Compatible with sealed, gel, and flooded batteries',
      ],
      whatsapp: WHATSAPP_BASE + encodeURIComponent('Hi SANVO/New Pak Cables, I\'d like details on the MPPT Solar Controller.'),
    },
    {
      img: SOLAR_RESIDENTIAL,
      icon: <Battery className="w-7 h-7" />,
      title: t('sanvo.chargers.title'),
      desc: t('sanvo.chargers.desc'),
      accent: 'var(--sanvo-amber)',
      highlight: null,
      specs: [
        'Multi-stage intelligent charging',
        'LED indicator panel',
        'Over-charge and over-discharge protection',
        'Compatible with 12V / 24V systems',
        'Universal battery type support',
      ],
      whatsapp: WHATSAPP_BASE + encodeURIComponent('Hi SANVO/New Pak Cables, I\'d like details on the Battery Charger.'),
    },
  ];

  return (
    <div style={{ backgroundColor: '#FAFBFA' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#0B2E1E' }}>
          <img src={HERO_BG} alt="SANVO solar energy" className="w-full h-full object-cover" style={{ opacity: 0.28 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,46,30,0.96) 0%, rgba(29,158,117,0.5) 60%, rgba(11,46,30,0.92) 100%)' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Image src={sanvoLogo} alt="SANVO Electronics" className="w-52 sm:w-72 mx-auto mb-7 drop-shadow-xl h-auto" />
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(239,159,39,0.18)', border: '1px solid rgba(239,159,39,0.4)', color: '#EF9F27' }}
          >
            Solar Electronics Division — NPC Group
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            {t('sanvo.title')}
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-normal" style={{ color: 'rgba(170,235,208,0.88)' }}>
            {t('sanvo.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14" style={{ backgroundColor: 'var(--sanvo-surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--sanvo-dark)', opacity: 0.78 }}>
            {t('sanvo.intro')}
          </p>
        </div>
      </section>

      {/* ── Product showcase ──────────────────────────────────── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-14">
            {products.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg"
                style={{ border: '1px solid rgba(29,158,117,0.14)', backgroundColor: 'white' }}
              >
                <div
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ minHeight: '360px' }}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '360px' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: product.accent === 'var(--sanvo-amber)'
                        ? 'linear-gradient(135deg, rgba(239,159,39,0.22) 0%, rgba(11,46,30,0.12) 100%)'
                        : 'linear-gradient(135deg, rgba(29,158,117,0.22) 0%, rgba(11,46,30,0.12) 100%)',
                    }}
                  />
                  <div
                    className="absolute top-5 left-5 p-3 rounded-xl text-white shadow-lg"
                    style={{ backgroundColor: product.accent }}
                  >
                    {product.icon}
                  </div>
                  {product.highlight && (
                    <div className="absolute bottom-5 left-5 right-5">
                      <div
                        className="flex items-center gap-3 p-3.5 rounded-xl text-white"
                        style={{ backgroundColor: 'rgba(11,46,30,0.82)', border: '1px solid rgba(239,159,39,0.5)', backdropFilter: 'blur(8px)' }}
                      >
                        <span style={{ color: '#EF9F27', flexShrink: 0 }}>{product.highlight.icon}</span>
                        <div>
                          <p className="text-xs font-semibold" style={{ color: '#EF9F27', fontFamily: 'var(--font-heading)' }}>{product.highlight.label}</p>
                          <p className="text-xs font-normal mt-0.5" style={{ color: 'rgba(170,235,208,0.85)' }}>{product.highlight.detail}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`p-8 sm:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{
                    borderLeft: index % 2 === 0 ? `4px solid ${product.accent}` : 'none',
                    borderRight: index % 2 === 1 ? `4px solid ${product.accent}` : 'none',
                  }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: product.accent }}
                  >
                    SANVO Electronics
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl mb-4"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--sanvo-dark)' }}
                  >
                    {product.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-7 font-normal" style={{ color: 'var(--sanvo-dark)', opacity: 0.72 }}>
                    {product.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--sanvo-green)' }} />
                        <span className="text-sm" style={{ color: 'var(--sanvo-dark)' }}>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                      style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body)' }}
                    >
                      <WhatsAppIcon size={16} />
                      Get Details
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                      style={{ backgroundColor: product.accent === 'var(--sanvo-amber)' ? 'var(--sanvo-amber)' : 'var(--sanvo-green)', fontFamily: 'var(--font-body)' }}
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Pakistan ────────────────────────────────── */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: 'var(--sanvo-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--sanvo-dark)' }}>
              {t('sanvo.tech.title')}
            </h2>
            <p className="text-base max-w-3xl mx-auto font-normal" style={{ color: 'var(--sanvo-dark)', opacity: 0.72 }}>
              {t('sanvo.tech.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'High Efficiency', desc: 'Maximum energy conversion, minimal losses in heat.', color: 'var(--sanvo-green)' },
              { title: 'Multi-Layer Protection', desc: 'Over-charge, over-discharge, short-circuit, and reverse polarity protection built in.', color: 'var(--sanvo-amber)' },
              { title: 'Field-Tested', desc: 'Tested for voltage fluctuations and temperature extremes common across Pakistan.', color: 'var(--sanvo-green)' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm" style={{ borderTop: `3px solid ${item.color}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.color === 'var(--sanvo-green)' ? 'rgba(29,158,117,0.1)' : 'rgba(239,159,39,0.1)' }}>
                  <Zap className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-base mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--sanvo-dark)' }}>{item.title}</h3>
                <p className="text-sm font-normal" style={{ color: 'var(--sanvo-dark)', opacity: 0.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 text-white" style={{ backgroundColor: 'var(--sanvo-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Residential Solar Systems', desc: 'Complete power solutions for home solar installations', color: 'green' },
              { title: 'Commercial Projects', desc: 'Scalable solutions for business and industrial use', color: 'amber' },
              { title: 'Off-Grid Systems', desc: 'Reliable power for remote and off-grid locations', color: 'green' },
              { title: 'Backup Power', desc: 'Emergency power solutions for critical applications', color: 'amber' },
              { title: 'Agricultural Use', desc: 'Solar solutions for farming and irrigation', color: 'green' },
              { title: 'Telecom Towers', desc: 'Power backup for communication infrastructure', color: 'amber' },
            ].map((app, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: app.color === 'green' ? 'rgba(29,158,117,0.14)' : 'rgba(239,159,39,0.14)',
                  borderLeft: `3px solid ${app.color === 'green' ? 'var(--sanvo-green)' : 'var(--sanvo-amber)'}`,
                }}
              >
                <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{app.title}</h4>
                <p className="text-xs font-normal" style={{ color: app.color === 'green' ? 'rgba(170,235,208,0.8)' : 'rgba(255,222,150,0.8)' }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 text-white" style={{ background: 'linear-gradient(135deg, var(--sanvo-amber) 0%, #C47A10 50%, var(--sanvo-green) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            Interested in SANVO Products?
          </h2>
          <p className="text-base mb-2 font-normal" style={{ opacity: 0.92 }}>
            Contact NPC Group for SANVO technical specifications, pricing, and dealer enquiries.
          </p>
          <p className="text-sm mb-8 font-normal" style={{ opacity: 0.7 }}>
            Besides Suzuki Motors Showroom, Bypass Ghotki · info@newpakcables.com
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_BASE + encodeURIComponent("Hi, I'm interested in SANVO Electronics products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-lg"
              style={{ color: 'var(--sanvo-dark)', fontFamily: 'var(--font-body)' }}
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ border: '2px solid rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
