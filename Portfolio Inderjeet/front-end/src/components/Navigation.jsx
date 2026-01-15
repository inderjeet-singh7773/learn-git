import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

// ✅ Resume import (src/assets se)
import resumePdf from '../assets/resume/resume.pdf';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* ✅ LOGO (NO href="#") */}
        <button
          onClick={scrollToTop}
          className="text-2xl font-bold text-gray-900"
        >
          Portfolio
        </button>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* ✅ Resume Download */}
          <a
            href={resumePdf}
            download="Inderjeet_Resume.pdf"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-900"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 py-4">
          <div className="flex flex-col gap-4 px-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-left"
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Resume */}
            <a
              href={resumePdf}
              download="Inderjeet_Resume.pdf"
              className="flex items-center gap-2 text-blue-600 font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
