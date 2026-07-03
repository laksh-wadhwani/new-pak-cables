import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import './globals.css';

export const metadata = {
  title: 'New Pak Cables',
  description: 'Manufacturers of Electrical Cables & Wires — Ghotki, Sindh, Pakistan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: 'var(--npc-gray-light)' }}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
