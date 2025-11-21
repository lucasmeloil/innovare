import React, { useEffect, useState } from 'react';
import { Home, Grid, MessageCircle, User, Heart } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
     const handleScroll = () => {
      const sections = ['hero', 'collections', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Início' },
    { id: 'collections', icon: Grid, label: 'Coleções' },
    { id: 'testimonials', icon: Heart, label: 'Clientes' },
    { id: 'contact', icon: MessageCircle, label: 'Contato' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-neutral-950/95 backdrop-blur-lg border-t border-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
                isActive ? 'text-gold-400 -translate-y-1' : 'text-neutral-500'
              }`}
            >
              <div className={`relative p-1 rounded-full transition-all duration-300 ${isActive ? 'bg-gold-500/10' : ''}`}>
                 <item.icon size={isActive ? 24 : 20} className={isActive ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' : ''} />
                 {isActive && <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-gold-500 rounded-full animate-ping"></span>}
              </div>
              <span className={`text-[10px] mt-1 font-medium tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;