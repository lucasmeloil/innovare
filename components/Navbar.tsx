import React, { useState, useEffect } from 'react';
import { ShoppingBag, Diamond, Instagram, Facebook, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Navbar transparency on scroll and Body lock
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'collections', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      // Timeout allows the menu closing animation to start before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  };

  const navLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Coleções', id: 'collections' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`fixed w-full z-[60] transition-all duration-700 ease-luxury border-b ${
          scrolled || isMenuOpen
            ? 'bg-neutral-950/90 backdrop-blur-xl py-3 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="group flex items-center gap-3 relative z-[70]">
             <div className="relative w-10 h-10 flex items-center justify-center">
                <div className={`absolute inset-0 border border-gold-500 rotate-45 transition-transform duration-700 ${isMenuOpen ? 'rotate-180 scale-110 bg-gold-500/10' : 'group-hover:rotate-180 group-hover:scale-110 group-hover:bg-gold-500/10'}`}></div>
                <div className="absolute inset-0 border border-white/20 rotate-45 scale-75 transition-transform duration-700 group-hover:-rotate-90"></div>
                <Diamond size={18} className="text-gold-400 relative z-10 animate-pulse" />
             </div>
             <div className="flex flex-col">
               <span className="text-2xl font-serif text-white tracking-wider group-hover:text-gold-gradient transition-all">INNOVARE</span>
               <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold-500 text-center group-hover:tracking-[0.5em] transition-all duration-500">Jóias</span>
             </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative py-2 group ${
                  activeSection === link.id ? 'text-gold-400' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full shadow-[0_0_10px_rgba(234,179,8,0.8)]' : 'w-0 group-hover:w-1/2'
                }`}></span>
              </a>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-6 relative z-[70]">
            {/* Desktop Bag */}
            <div className="hidden md:block">
               <button className="text-white hover:text-gold-400 transition-colors">
                  <ShoppingBag className="w-6 h-6" />
               </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-[6px] group focus:outline-none z-[80]"
              aria-label="Menu"
            >
              <span className={`block w-8 h-[2px] bg-gold-400 rounded-full transition-all duration-500 ease-luxury ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-gold-400 rounded-full transition-all duration-500 ease-luxury ml-auto group-hover:w-8 ${isMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
              <span className={`block w-8 h-[2px] bg-gold-400 rounded-full transition-all duration-500 ease-luxury ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-3xl transition-all duration-[1000ms] ease-luxury flex flex-col justify-center items-center ${
          isMenuOpen ? 'opacity-100 visible clip-circle-in' : 'opacity-0 invisible clip-circle-out'
        }`}
        style={{
            clipPath: isMenuOpen ? 'circle(150% at top right)' : 'circle(0% at top right)',
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #EAB308 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none"></div>

        <div className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`font-serif text-4xl md:text-5xl text-white hover:text-gold-400 transition-all duration-500 transform group flex items-center gap-4 ${
                isMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-sm'
              }`}
              style={{ transitionDelay: `${150 + (index * 100)}ms` }}
            >
              <span className="w-0 group-hover:w-8 h-[1px] bg-gold-500 transition-all duration-300"></span>
              {link.name}
              <span className="w-0 group-hover:w-8 h-[1px] bg-gold-500 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Menu Footer */}
        <div className={`absolute bottom-20 flex flex-col items-center gap-6 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
           <div className="flex gap-8">
              <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300"><Instagram size={28} /></a>
              <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300"><Facebook size={28} /></a>
              <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300"><Twitter size={28} /></a>
           </div>
           <p className="text-xs text-neutral-500 uppercase tracking-widest">Itabaiana - Sergipe</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;