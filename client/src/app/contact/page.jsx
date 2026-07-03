"use client";

import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Package } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '923063366401';
const WHATSAPP_MSG = encodeURIComponent("Hi New Pak Cables, I'd like to get in touch.");
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subjects = [
    'Product Enquiry',
    'Bulk / Wholesale Order',
    'Dealer / Distributor Enquiry',
    'SANVO Electronics',
    'Custom Cable Requirement',
    'Other',
  ];

  return (
    <div className="bg-white">
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="text-white py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, var(--npc-navy) 0%, var(--npc-blue) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-normal" style={{ color: 'rgba(186,213,255,0.9)' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* ── WhatsApp CTA bar ──────────────────────────────────── */}
      <div className="py-4" style={{ backgroundColor: '#25D366' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-medium text-sm">
              Prefer a quick chat? WhatsApp us directly for fast replies.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 flex-shrink-0"
              style={{ color: '#25D366', fontFamily: 'var(--font-body)' }}
            >
              <WhatsAppIcon size={16} />
              {t('contact.whatsapp')}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {/* Left: Info + Map */}
            <div>
              <h2 className="text-2xl sm:text-3xl mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)' }}>
                {t('contact.info.title')}
              </h2>

              <div className="space-y-5 mb-8">
                {[
                  {
                    bg: 'rgba(216,90,48,0.1)', icon: <MapPin className="w-5 h-5" />, iconColor: 'var(--npc-copper)',
                    label: t('contact.address.title'), lines: [t('contact.address')],
                  },
                  {
                    bg: 'rgba(24,95,165,0.1)', icon: <Phone className="w-5 h-5" />, iconColor: 'var(--npc-blue)',
                    label: 'Phone', lines: ['+92306-3366401', '+92300-3295707'],
                  },
                  {
                    bg: 'rgba(216,90,48,0.1)', icon: <Mail className="w-5 h-5" />, iconColor: 'var(--npc-copper)',
                    label: 'Email', lines: ['support@newpakcables.com'],
                  },
                  {
                    bg: 'rgba(24,95,165,0.1)', icon: <Clock className="w-5 h-5" />, iconColor: 'var(--npc-blue)',
                    label: 'Business Hours', lines: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg }}>
                      <span style={{ color: item.iconColor }}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--npc-navy)' }}>{item.label}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.68 }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded map */}
              <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '260px', border: '1px solid rgba(0,0,0,0.08)' }}>
                <iframe
                  title="New Pak Cables — Bypass Ghotki, Sindh"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=69.28%2C27.99%2C69.34%2C28.02&layer=mapnik&marker=28.005%2C69.31"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--npc-navy)', opacity: 0.45 }}>
                Map © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap contributors</a>
              </p>
            </div>

            {/* Right: Form */}
            <div>
              <div className="p-6 sm:p-8 rounded-2xl shadow-sm" style={{ backgroundColor: '#F8F9FB', borderTop: '4px solid var(--npc-copper)' }}>
                <h2 className="text-xl sm:text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-navy)' }}>
                  {t('contact.form.title')}
                </h2>

                {submitted && (
                  <div className="mb-5 p-4 rounded-xl text-white text-sm font-medium" style={{ backgroundColor: 'var(--npc-blue)' }}>
                    ✓ Message sent! We'll reply within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', type: 'text', label: t('contact.form.name') },
                    { id: 'email', type: 'email', label: t('contact.form.email') },
                    { id: 'phone', type: 'tel', label: t('contact.form.phone') },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs font-medium mb-1.5" style={{ color: 'var(--npc-navy)' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white outline-none transition-all text-sm"
                        style={{ border: '1.5px solid rgba(0,0,0,0.12)', color: 'var(--npc-navy)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--npc-blue)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
                      />
                    </div>
                  ))}

                  {/* Subject dropdown */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--npc-navy)' }}>
                      {t('contact.form.subject')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white outline-none transition-all text-sm"
                      style={{ border: '1.5px solid rgba(0,0,0,0.12)', color: formData.subject ? 'var(--npc-navy)' : 'rgba(12,35,64,0.45)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--npc-blue)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
                    >
                      <option value="" disabled>Select a subject…</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--npc-navy)' }}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white outline-none resize-none transition-all text-sm"
                      style={{ border: '1.5px solid rgba(0,0,0,0.12)', color: 'var(--npc-navy)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--npc-blue)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-3.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-sm text-sm"
                    style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
                  >
                    {t('contact.form.submit')}
                  </button>

                  <div className="text-center pt-1">
                    <span className="text-xs font-normal" style={{ color: 'var(--npc-navy)', opacity: 0.5 }}>or</span>
                  </div>

                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                    style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body)' }}
                  >
                    <WhatsAppIcon size={16} />
                    {t('contact.whatsapp')}
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────── */}
      <section className="py-10 sm:py-14" style={{ backgroundColor: '#F2F5F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white p-8 sm:p-12 rounded-2xl shadow-xl" style={{ background: 'linear-gradient(135deg, var(--npc-copper) 0%, #B84820 100%)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { icon: <MessageCircle className="w-7 h-7 mx-auto mb-3" />, title: 'Quick Response', desc: 'We reply to all enquiries within 24 hours' },
                { icon: <Users className="w-7 h-7 mx-auto mb-3" />, title: 'Expert Team', desc: 'Technical assistance from our specialists' },
                { icon: <Package className="w-7 h-7 mx-auto mb-3" />, title: 'Bulk Orders', desc: 'Special pricing for wholesale and large quantities' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ opacity: 0.85 }}>{item.icon}</div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-sm font-normal" style={{ opacity: 0.88 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
