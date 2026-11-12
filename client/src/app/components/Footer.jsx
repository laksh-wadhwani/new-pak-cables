"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import npcLogo from '../../../public/images/npc-logo.png';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/sanvo', label: t('nav.sanvo') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="text-white mt-0" style={{ backgroundColor: 'var(--npc-navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-2">
            <Image src={npcLogo} alt="New Pak Cables" className="h-12 mb-3 brightness-0 invert w-auto" />
            <p className="text-sm mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-copper)', letterSpacing: '0.04em' }}>
              تعمیر سے تعبیر تک
            </p>
            <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>From Construction to Realization</p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t('home.about.desc')}
            </p>
            {/* <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <Facebook size={16} />, href: '#' },
                { icon: <Instagram size={16} />, href: '#' },
                { icon: <Youtube size={16} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--npc-copper)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-copper)' }}>
              {t('footer.links')}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--npc-copper)' }}>
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--npc-copper)' }} />
                <div className='flex flex-col'>
                  <span className="text-sm font-black" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('contact.mainAddress.title')}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('contact.mainAddress')}</span>
                </div>
              </li>
               <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--npc-copper)' }} />
                <div className='flex flex-col'>
                  <span className="text-sm font-black" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('contact.branchAddress.title')}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('contact.branchAddress')}</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} style={{ color: 'var(--npc-copper)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>+92327-3366444</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} style={{ color: 'var(--npc-copper)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>support@newpakcables.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('footer.copyright')}</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t('brand.tm')}</p>
        </div>
      </div>
    </footer>
  );
}
