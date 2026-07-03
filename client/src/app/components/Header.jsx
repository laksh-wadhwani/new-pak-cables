"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import npcLogo from '../../../public/images/npc-logo.svg';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '923001234567';
const WHATSAPP_MSG = encodeURIComponent("Hi New Pak Cables, I'm interested in your products.");
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/sanvo', label: t('nav.sanvo') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ borderBottom: '3px solid var(--npc-copper)', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src={npcLogo} alt="New Pak Cables" className="h-14 sm:h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="px-3 lg:px-4 py-2 rounded-md transition-all text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  color: isActive(link.path) ? 'var(--npc-copper)' : 'var(--npc-navy)',
                  backgroundColor: isActive(link.path) ? 'rgba(216,90,48,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="hidden sm:block px-3 py-1.5 rounded-md text-sm font-medium transition-colors border"
              style={{ color: 'var(--npc-blue)', borderColor: 'var(--npc-blue)', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--npc-blue)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--npc-blue)'; }}
            >
              {language === 'en' ? 'اردو' : 'English'}
            </button>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 shadow-sm"
              style={{ backgroundColor: 'var(--npc-copper)', fontFamily: 'var(--font-body)' }}
            >
              {t('nav.quote')}
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: 'var(--npc-navy)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  color: isActive(link.path) ? 'var(--npc-copper)' : 'var(--npc-navy)',
                  backgroundColor: isActive(link.path) ? 'rgba(216,90,48,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-3 pb-1">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                className="flex-1 py-2 rounded-md text-sm font-medium border text-center"
                style={{ color: 'var(--npc-blue)', borderColor: 'var(--npc-blue)' }}
              >
                {language === 'en' ? 'اردو' : 'English'}
              </button>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-md text-sm font-semibold text-white text-center"
                style={{ backgroundColor: 'var(--npc-copper)' }}
              >
                {t('nav.quote')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
