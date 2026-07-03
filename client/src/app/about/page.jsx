"use client";

import { Award, Shield, Package, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HERO_BG = "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?w=1600&h=800&fit=crop&auto=format";
const FACTORY_WORKERS = "https://images.unsplash.com/photo-1700727448686-b314cb5f9948?w=1200&h=800&fit=crop&auto=format";
const FACTORY_MACHINES = "https://images.unsplash.com/photo-1717386255767-52643970d483?w=1200&h=800&fit=crop&auto=format";
const WORKER_IMG = "https://images.unsplash.com/photo-1730584474338-aa8d9d186bf7?w=900&h=700&fit=crop&auto=format";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="relative text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img src={HERO_BG} alt="New Pak Cables factory" className="w-full h-full object-cover" style={{ opacity: 0.33 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,35,64,0.92) 0%, rgba(24,95,165,0.72) 100%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            {t('about.title')}
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl font-normal" style={{ color: 'rgba(186,213,255,0.9)' }}>
            {t('about.intro')}
          </p>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-9 h-9" style={{ color: 'var(--npc-copper)' }} />
                <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)' }}>
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'var(--npc-navy)', opacity: 0.72 }}>
                {t('about.mission.desc')}
              </p>
              <div
                className="p-6 rounded-xl space-y-4"
                style={{ backgroundColor: 'rgba(216,90,48,0.05)', borderLeft: '4px solid var(--npc-copper)' }}
              >
                {[
                  { title: 'Quality First', desc: 'Premium materials and rigorous testing at every stage' },
                  { title: 'Customer Satisfaction', desc: 'Exceeding expectations in every project we undertake' },
                  { title: 'Innovation', desc: 'Modern manufacturing techniques for better products' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--npc-copper)' }} />
                    <div>
                      <h4 className="font-semibold mb-0.5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--npc-navy)', opacity: 0.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-200" style={{ aspectRatio: '4/3' }}>
                <img src={WORKER_IMG} alt="New Pak Cables worker at machinery" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                style={{ borderLeft: '4px solid var(--npc-copper)' }}
              >
                <Award className="w-8 h-8" style={{ color: 'var(--npc-copper)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--npc-navy)', lineHeight: 1 }}>Quality</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">In-House Tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed factory strip ──────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img src={FACTORY_MACHINES} alt="New Pak Cables factory floor" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(12,35,64,0.72)' }}>
          <div className="text-center text-white px-4">
            <p className="text-xl sm:text-3xl uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Precision Manufacturing Since 2009
            </p>
            <p className="text-sm sm:text-base mt-2 font-normal" style={{ color: 'rgba(186,213,255,0.8)', letterSpacing: '0.08em' }}>
              Besides Suzuki Motors Showroom · Bypass Ghotki, Sindh
            </p>
          </div>
        </div>
      </div>

      {/* ── Quality Standards ─────────────────────────────────── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2F5F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg" style={{ borderTop: '4px solid var(--npc-blue)' }}>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />, label: 'Safety Focused', color: 'var(--npc-blue)' },
                    { icon: <Award className="w-10 h-10 sm:w-12 sm:h-12" />, label: 'Quality Assured', color: 'var(--npc-copper)' },
                    { icon: <Package className="w-10 h-10 sm:w-12 sm:h-12" />, label: 'Premium Materials', color: 'var(--npc-copper)' },
                    { icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />, label: 'Tested Products', color: 'var(--npc-blue)' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl"
                      style={{ backgroundColor: item.color === 'var(--npc-blue)' ? 'rgba(24,95,165,0.06)' : 'rgba(216,90,48,0.06)' }}
                    >
                      <span style={{ color: item.color, display: 'inline-flex', justifyContent: 'center' }}>{item.icon}</span>
                      <h4 className="font-medium text-sm sm:text-base mt-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>{item.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-9 h-9" style={{ color: 'var(--npc-copper)' }} />
                <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)' }}>
                  {t('about.quality.title')}
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--npc-navy)', opacity: 0.72 }}>
                {t('about.quality.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Range ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-9 h-9" style={{ color: 'var(--npc-copper)' }} />
            <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)' }}>
              {t('about.range.title')}
            </h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: 'var(--npc-navy)', opacity: 0.72 }}>
            {t('about.range.desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: t('home.products.solar'), desc: 'For renewable energy systems', color: 'var(--npc-copper)' },
              { label: t('home.products.house'), desc: 'For residential installations', color: 'var(--npc-blue)' },
              { label: t('home.products.auto'), desc: 'For automotive applications', color: 'var(--npc-copper)' },
              { label: t('home.products.wapda'), desc: 'For power distribution', color: 'var(--npc-blue)' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-sm"
                style={{
                  background: item.color === 'var(--npc-copper)'
                    ? 'linear-gradient(135deg, rgba(216,90,48,0.07) 0%, rgba(216,90,48,0.02) 100%)'
                    : 'linear-gradient(135deg, rgba(24,95,165,0.07) 0%, rgba(24,95,165,0.02) 100%)',
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <h4 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>{item.label}</h4>
                <p className="text-sm" style={{ color: 'var(--npc-navy)', opacity: 0.62 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 text-white" style={{ backgroundColor: 'var(--npc-navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Our Values</h2>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-7 h-7" />, title: 'Integrity', desc: 'Honest business practices and transparent operations' },
                  { icon: <Award className="w-7 h-7" />, title: 'Excellence', desc: 'Commitment to quality in every product we manufacture' },
                  { icon: <CheckCircle className="w-7 h-7" />, title: 'Reliability', desc: 'Dependable products and services you can trust' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--npc-copper)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{item.title}</h3>
                      <p className="text-sm" style={{ color: 'rgba(186,213,255,0.8)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-700" style={{ aspectRatio: '4/3' }}>
              <img src={FACTORY_WORKERS} alt="New Pak Cables team" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,35,64,0.3) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
