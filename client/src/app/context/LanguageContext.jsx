"use client";

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

const translations = {
  'nav.home': { en: 'Home', ur: 'ہوم' },
  'nav.about': { en: 'About', ur: 'ہمارے بارے میں' },
  'nav.products': { en: 'Products', ur: 'مصنوعات' },
  'nav.sanvo': { en: 'SANVO', ur: 'سانوو' },
  'nav.contact': { en: 'Contact', ur: 'رابطہ' },
  'nav.quote': { en: 'Get a Quote', ur: 'قیمت جانیں' },

  'brand.tagline.en': { en: 'From Construction to Realization', ur: 'From Construction to Realization' },
  'brand.tagline.ur': { en: 'تعمیر سے تعبیر تک', ur: 'تعمیر سے تعبیر تک' },
  'brand.tm': { en: 'T.M. No. 877655', ur: 'T.M. No. 877655' },

  'home.hero.title': { en: 'Premium Quality Cables & Electrical Solutions', ur: 'اعلیٰ معیار کے تاریں اور برقی حل' },
  'home.hero.subtitle': { en: 'Trusted wire manufacturer serving Sindh and beyond.', ur: 'سندھ اور اس سے آگے خدمت کرنے والے قابل اعتماد تار صانع۔' },
  'home.hero.cta': { en: 'Explore Products', ur: 'مصنوعات دیکھیں' },
  'home.hero.cta2': { en: 'Contact Us', ur: 'رابطہ کریں' },

  'home.trust.power': { en: 'Reliable Power', ur: 'قابل اعتماد بجلی' },
  'home.trust.quality': { en: 'Premium Quality', ur: 'اعلیٰ معیار' },
  'home.trust.supply': { en: 'Nationwide Supply', ur: 'ملک گیر سپلائی' },
  'home.trust.trademark': { en: 'Trademark Registered', ur: 'رجسٹرڈ برانڈ' },

  'home.about.title': { en: 'About New Pak Cables', ur: 'نیو پاک کیبلز کے بارے میں' },
  'home.about.desc': { en: 'We are leading manufacturers of high-quality electrical cables and wires. Our products serve residential, commercial, industrial, and renewable energy sectors with unmatched reliability.', ur: 'ہم اعلیٰ معیار کی برقی تاروں اور کیبلز کے معروف صانع ہیں۔ ہماری مصنوعات رہائشی، تجارتی، صنعتی اور قابل تجدید توانائی کے شعبوں میں بے مثال معتبریت فراہم کرتی ہیں۔' },

  'home.products.title': { en: 'Our Product Range', ur: 'ہماری مصنوعات کی رینج' },
  'home.products.solar': { en: 'Solar Cables', ur: 'سولر تاریں' },
  'home.products.solar.desc': { en: 'UV resistant cables for solar installations', ur: 'شمسی تنصیبات کے لیے UV مزاحم تاریں' },
  'home.products.house': { en: 'House Wiring', ur: 'گھریلو تاریں' },
  'home.products.house.desc': { en: 'Safe and reliable residential wiring solutions', ur: 'محفوظ اور قابل اعتماد رہائشی وائرنگ حل' },
  'home.products.auto': { en: 'Auto Wires', ur: 'آٹو تاریں' },
  'home.products.auto.desc': { en: 'Durable wires for automotive applications', ur: 'آٹوموٹو ایپلی کیشنز کے لیے پائیدار تاریں' },
  'home.products.wapda': { en: 'WAPDA Cables', ur: 'واپڈا تاریں' },
  'home.products.wapda.desc': { en: 'Heavy-duty cables for power distribution', ur: 'بجلی کی تقسیم کے لیے بھاری ڈیوٹی تاریں' },

  'home.why.title': { en: 'Why Choose New Pak Cables?', ur: 'نیو پاک کیبلز کیوں؟' },
  'home.why.capacity': { en: 'Manufacturing Capacity', ur: 'تیاری کی صلاحیت' },
  'home.why.capacity.desc': { en: 'In-house production with modern extrusion machinery and quality raw materials.', ur: 'جدید مشینری اور معیاری خام مال کے ساتھ اندرونی پیداوار۔' },
  'home.why.distribution': { en: 'Nationwide Distribution', ur: 'ملک گیر تقسیم' },
  'home.why.distribution.desc': { en: 'Supplying dealers and electricians across Sindh and Pakistan.', ur: 'سندھ اور پاکستان بھر میں ڈیلرز اور الیکٹریشنز کو سپلائی۔' },
  'home.why.materials': { en: 'Durable Materials', ur: 'پائیدار مواد' },
  'home.why.materials.desc': { en: 'Pure copper conductors with high-grade PVC insulation for lasting performance.', ur: 'دیرپا کارکردگی کے لیے خالص تانبے کے موصلات اور اعلیٰ درجے کی PVC موصلیت۔' },
  'home.why.support': { en: 'Customer Support', ur: 'کسٹمر سپورٹ' },
  'home.why.support.desc': { en: 'Responsive team available for bulk orders, technical queries, and after-sale support.', ur: 'بلک آرڈرز، تکنیکی سوالات، اور فروخت کے بعد سپورٹ کے لیے ذمہ دار ٹیم۔' },

  'home.dealer.title': { en: 'Become a Dealer or Distributor', ur: 'ڈیلر یا ڈسٹری بیوٹر بنیں' },
  'home.dealer.desc': { en: "Join Pakistan's growing network of NPC dealers. Competitive margins, reliable stock, and direct factory support.", ur: 'NPC ڈیلرز کے پاکستان کے بڑھتے ہوئے نیٹ ورک میں شامل ہوں۔ مسابقتی منافع، قابل اعتماد اسٹاک، اور براہ راست فیکٹری سپورٹ۔' },
  'home.dealer.cta': { en: "Enquire Now", ur: 'ابھی پوچھیں' },

  'home.contact.title': { en: 'Visit or Contact Us', ur: 'ملیں یا رابطہ کریں' },

  'home.sanvo.title': { en: 'SANVO Electronics', ur: 'سانوو الیکٹرونکس' },
  'home.sanvo.desc': { en: 'Solar solutions by NPC Group. SANVO manufactures power electronics designed for Pakistan\'s solar energy market.', ur: 'NPC گروپ کے شمسی حل۔ سانوو پاکستان کی شمسی توانائی مارکیٹ کے لیے ڈیزائن کردہ پاور الیکٹرونکس تیار کرتی ہے۔' },
  'home.sanvo.mppt': { en: 'MPPT Controllers', ur: 'MPPT کنٹرولرز' },
  'home.sanvo.chargers': { en: 'Battery Chargers', ur: 'بیٹری چارجرز' },
  'home.sanvo.inverters': { en: 'PV Inverters', ur: 'PV انورٹرز' },

  'about.title': { en: 'About New Pak Cables', ur: 'نیو پاک کیبلز کے بارے میں' },
  'about.intro': { en: 'New Pak Cables is a trusted name in the electrical cable manufacturing industry in Ghotki, Sindh.', ur: 'نیو پاک کیبلز گھوٹکی، سندھ میں برقی کیبل مینوفیکچرنگ انڈسٹری میں ایک قابل اعتماد نام ہے۔' },
  'about.mission.title': { en: 'Our Mission', ur: 'ہمارا مشن' },
  'about.mission.desc': { en: 'To provide reliable, safe, and high-quality electrical cables that meet rigorous internal standards and exceed customer expectations.', ur: 'قابل اعتماد، محفوظ، اور اعلیٰ معیار کی برقی کیبلز فراہم کرنا جو سخت داخلی معیارات کو پورا کریں اور صارفین کی توقعات سے بڑھ کر ہوں۔' },
  'about.quality.title': { en: 'Quality Commitment', ur: 'معیار کا عزم' },
  'about.quality.desc': { en: 'All our products undergo rigorous in-house testing and quality control at every production stage. We use premium copper conductors and high-grade PVC insulation — because our customers depend on wires that last.', ur: 'ہماری تمام مصنوعات ہر پیداواری مرحلے پر سخت اندرونی جانچ اور معیار کے کنٹرول سے گزرتی ہیں۔ ہم پریمیم تانبے کے موصلات اور اعلیٰ درجے کی PVC موصلیت استعمال کرتے ہیں۔' },
  'about.range.title': { en: 'Product Range', ur: 'مصنوعات کی رینج' },
  'about.range.desc': { en: 'We manufacture every type of wire including solar cables, house wiring, auto wires, and WAPDA cables. Our range meets all electrical wiring needs across residential, automotive, and utility sectors.', ur: 'ہم ہر قسم کی تار تیار کرتے ہیں بشمول سولر کیبلز، گھریلو وائرنگ، آٹو تاریں، اور واپڈا کیبلز۔' },

  'products.title': { en: 'Our Products', ur: 'ہماری مصنوعات' },
  'products.subtitle': { en: 'Comprehensive range of electrical cables and wires for every application', ur: 'ہر ایپلی کیشن کے لیے برقی کیبلز اور تاروں کی جامع رینج' },
  'products.search': { en: 'Search products…', ur: 'مصنوعات تلاش کریں…' },
  'products.all': { en: 'All Products', ur: 'تمام مصنوعات' },
  'products.solar.title': { en: 'Solar Cables', ur: 'سولر کیبلز' },
  'products.solar.desc': { en: 'UV resistant, weather-proof cables for solar panel installations. Available in various gauges and lengths.', ur: 'UV مزاحم، موسم سے محفوظ کیبلز خاص طور پر سولر پینل کی تنصیبات کے لیے۔' },
  'products.house.title': { en: 'House Wiring Cables', ur: 'گھریلو وائرنگ کیبلز' },
  'products.house.desc': { en: 'Safe, insulated cables for residential electrical installations. Suitable for all home wiring needs.', ur: 'رہائشی برقی تنصیبات کے لیے محفوظ، موصل کیبلز۔' },
  'products.auto.title': { en: 'Auto Wires', ur: 'آٹو تاریں' },
  'products.auto.desc': { en: 'Flexible, durable wires for automotive applications. Heat resistant and vibration proof.', ur: 'آٹوموٹو ایپلی کیشنز کے لیے لچکدار، پائیدار تاریں۔' },
  'products.wapda.title': { en: 'WAPDA Cables', ur: 'واپڈا کیبلز' },
  'products.wapda.desc': { en: 'Heavy-duty cables for power distribution and transmission. Built for high voltage and current loads.', ur: 'بجلی کی تقسیم اور ترسیل کے لیے بھاری ڈیوٹی کیبلز۔' },
  'products.features': { en: 'Key Features', ur: 'اہم خصوصیات' },
  'products.feature.quality': { en: 'Premium Quality Materials', ur: 'پریمیم معیار کا مواد' },
  'products.feature.tested': { en: 'Rigorously Tested', ur: 'سختی سے جانچا گیا' },
  'products.feature.certified': { en: 'Quality Compliant', ur: 'معیار کے مطابق' },
  'products.feature.durable': { en: 'Long Lasting Durability', ur: 'دیرپا پائیداری' },
  'products.request.quote': { en: 'Request Quote', ur: 'قیمت طلب کریں' },
  'products.coming.soon': { en: 'Full specifications coming soon', ur: 'مکمل تفصیلات جلد آئیں گی' },
  'products.coming.desc': { en: 'Contact us for current availability and pricing.', ur: 'موجودہ دستیابی اور قیمت کے لیے ہم سے رابطہ کریں۔' },
  'products.get.details': { en: 'Get Details', ur: 'تفصیلات لیں' },
  'products.whatsapp': { en: 'WhatsApp for Price', ur: 'واٹس ایپ پر قیمت لیں' },

  'sanvo.title': { en: 'SANVO Electronics', ur: 'سانوو الیکٹرونکس' },
  'sanvo.subtitle': { en: 'Solar Solutions by NPC Group', ur: 'NPC گروپ کے شمسی حل' },
  'sanvo.intro': { en: 'SANVO Electronics is our dedicated solar electronics brand — a related but distinct identity under the NPC Group. We manufacture a focused lineup of three products built for Pakistan\'s solar market.', ur: 'سانوو الیکٹرونکس ہمارا سولر الیکٹرونکس برانڈ ہے — NPC گروپ کے تحت ایک متعلقہ لیکن الگ شناخت۔' },
  'sanvo.mppt.title': { en: 'MPPT Solar Controller', ur: 'MPPT سولر کنٹرولر' },
  'sanvo.mppt.desc': { en: 'Maximum Power Point Tracking controller for optimal solar energy harvesting. Intelligent charging algorithms with LCD readout and full protection suite.', ur: 'زیادہ سے زیادہ توانائی کی کٹائی کے لیے MPPT کنٹرولر۔ LCD ڈسپلے اور مکمل تحفظ کے ساتھ۔' },
  'sanvo.chargers.title': { en: 'Battery Charger', ur: 'بیٹری چارجر' },
  'sanvo.chargers.desc': { en: 'Smart multi-stage battery charger compatible with all common battery types. Built-in over-charge protection and LED indicator panel.', ur: 'تمام عام بیٹری اقسام کے ساتھ مطابقت پذیر سمارٹ ملٹی اسٹیج بیٹری چارجر۔' },
  'sanvo.inverters.title': { en: 'PV Inverter', ur: 'PV انورٹر' },
  'sanvo.inverters.desc': { en: 'Photovoltaic inverter with touch-button control panel. Converts DC solar power to clean AC output with high efficiency and smart monitoring.', ur: 'ٹچ بٹن کنٹرول پینل کے ساتھ PV انورٹر۔ DC سولر پاور کو کلین AC آؤٹ پٹ میں تبدیل کرتا ہے۔' },
  'sanvo.tech.title': { en: 'Built for Pakistan\'s Solar Market', ur: 'پاکستان کی شمسی توانائی مارکیٹ کے لیے' },
  'sanvo.tech.desc': { en: 'Designed to handle the voltage and temperature conditions common across Pakistan — tested for reliability in the field.', ur: 'پاکستان بھر میں عام وولٹیج اور درجہ حرارت کے حالات کو سنبھالنے کے لیے ڈیزائن کیا گیا۔' },
  'contact.title': { en: 'Contact Us', ur: 'ہم سے رابطہ کریں' },
  'contact.subtitle': { en: 'Get in touch for orders, pricing, and dealer enquiries', ur: 'آرڈرز، قیمتوں اور ڈیلر استفسارات کے لیے رابطہ کریں' },
  'contact.info.title': { en: 'Contact Information', ur: 'رابطہ کی معلومات' },
  'contact.mainAddress.title': { en: 'Main and Factory Address', ur: 'مرکزی دفتر اور فیکٹری کا پتہ' },
  'contact.mainAddress': { en: 'New Pak Cables, Besides Suzuki Motors Showroom, Bypass Ghotki, Sindh', ur: 'نیو پاک کیبلز، سوزوکی موٹرز شو روم کے پاس، بائی پاس گھوٹکی، سندھ' },
  'contact.branchAddress.title': { en: 'Branch Office', ur: 'برانچ آفس' },
  'contact.branchAddress': { en: 'Office no. 609, Hussain Trade Centre, New Chali, Karachi, Sindh', ur: 'آفس نمبر 609، حسین ٹریڈ سینٹر، نئی چالی، کراچی، سندھ۔' },
  'contact.form.title': { en: 'Send us a message', ur: 'ہمیں پیغام بھیجیں' },
  'contact.form.name': { en: 'Your Name', ur: 'آپ کا نام' },
  'contact.form.email': { en: 'Email Address', ur: 'ای میل ایڈریس' },
  'contact.form.phone': { en: 'Phone Number', ur: 'فون نمبر' },
  'contact.form.subject': { en: 'Subject', ur: 'موضوع' },
  'contact.form.message': { en: 'Message', ur: 'پیغام' },
  'contact.form.submit': { en: 'Send Message', ur: 'پیغام بھیجیں' },
  'contact.whatsapp': { en: 'Chat on WhatsApp', ur: 'واٹس ایپ پر چیٹ کریں' },

  'footer.links': { en: 'Quick Links', ur: 'فوری روابط' },
  'footer.follow': { en: 'Follow Us', ur: 'ہمیں فالو کریں' },
  'footer.copyright': { en: '© 2026 New Pak Cables. All rights reserved.', ur: '© 2026 نیو پاک کیبلز۔ تمام حقوق محفوظ ہیں۔' },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ur' ? 'rtl' : 'ltr'} className={language === 'ur' ? 'font-urdu' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
