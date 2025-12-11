import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
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
    { name: '12 Món Ngon', href: '#mon-ngon' },
    { name: 'Food Map', href: '#food-map' },
    { name: 'Câu Chuyện', href: '#cau-chuyen' },
    { name: 'Liên Hệ', href: '#lien-he' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hanoi-bg/95 shadow-md py-2 backdrop-blur-md' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center group">
           <div className={`w-10 h-10 bg-hanoi-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl mr-3 group-hover:bg-hanoi-gold transition-colors ${!isScrolled && 'md:bg-white md:text-hanoi-red'}`}>
              H
           </div>
           <span className={`font-serif font-bold text-xl md:text-2xl tracking-wide ${isScrolled ? 'text-hanoi-red' : 'text-hanoi-red md:text-white'} drop-shadow-sm`}>
             Hà Nội Trên Mâm
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm tracking-widest uppercase hover:text-hanoi-gold transition-colors ${
                isScrolled ? 'text-hanoi-brown' : 'text-white shadow-black drop-shadow-md'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-hanoi-red"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-hanoi-red' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-hanoi-bg border-t border-stone-200 shadow-xl md:hidden flex flex-col p-4 animate-[slideDown_0.3s_ease-out]">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-hanoi-brown font-medium border-b border-stone-100 last:border-0 hover:bg-amber-50 hover:text-hanoi-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;