import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Trigger animation
    setIsFlying(true);
    
    // Execute scroll immediately
    // We rely on the global 'scroll-smooth' class in HTML for the smooth effect
    // This is often more robust on mobile than passing behavior options to JS
    window.scrollTo(0, 0);

    // Reset animation state after the animation duration
    setTimeout(() => {
      setIsFlying(false);
    }, 1500);
  };

  return (
    <div className={`fixed bottom-24 md:bottom-10 right-6 z-[100] transition-all duration-700 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className={`group relative flex items-center justify-center w-12 h-16 focus:outline-none transition-transform duration-300 hover:-translate-y-1 ${isFlying ? 'animate-fly-up pointer-events-none' : ''}`}
        aria-label="Voltar ao topo"
      >
        {/* Jewel SVG Shape - Improved "Pointed Up" Kite Cut */}
        <svg 
          viewBox="0 0 100 130" 
          className="absolute inset-0 w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
          style={{ filter: 'drop-shadow(0px 4px 8px rgba(234, 179, 8, 0.2))' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="goldGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" /> {/* Light Gold */}
              <stop offset="40%" stopColor="#EAB308" /> {/* Rich Gold */}
              <stop offset="100%" stopColor="#854D0E" /> {/* Dark Gold */}
            </linearGradient>
            
             <linearGradient id="goldGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
          </defs>

          {/* Main Body - Elongated Diamond/Kite Pointing Up */}
          <path d="M50 0 L100 40 L50 130 L0 40 Z" fill="url(#goldGradientMain)" stroke="#713F12" strokeWidth="0.5" />
          
          {/* Facets for 3D effect */}
          {/* Top Left Facet (Brighter) */}
          <path d="M50 0 L0 40 L50 40 Z" fill="rgba(255,255,255,0.6)" />
          
          {/* Top Right Facet (Mid Bright) */}
          <path d="M50 0 L100 40 L50 40 Z" fill="rgba(255,255,255,0.4)" />
          
          {/* Bottom Left Facet (Shadowed) */}
          <path d="M50 130 L0 40 L50 40 Z" fill="rgba(0,0,0,0.15)" />
          
          {/* Bottom Right Facet (Darker Shadow) */}
          <path d="M50 130 L100 40 L50 40 Z" fill="rgba(0,0,0,0.3)" />

          {/* Center Spine Highlights */}
          <path d="M50 0 L50 130" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          <path d="M0 40 L100 40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        </svg>

        {/* Icon */}
        <div className="relative z-10 text-neutral-900 group-hover:text-neutral-950 -mt-2 transition-colors">
           <ArrowUp size={22} strokeWidth={3} />
        </div>
        
        {/* Shine/Glimmer Animation Overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1s_infinite]"></div>
        </div>
        
        {/* Sparkle Decoration */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-gold-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BackToTop;