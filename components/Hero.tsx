import React, { useEffect, useState } from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop" 
          alt="Joia de luxo" 
          className="w-full h-full object-cover opacity-60" 
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        <RevealOnScroll direction="down" delay={0.1} width="100%">
          <div className="flex flex-col items-center mb-6">
             <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold-500 mb-4"></div>
             <span className="text-gold-400 uppercase tracking-[0.5em] text-xs md:text-sm font-bold">
              Exclusividade & Sofisticação
             </span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.3} width="100%">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            A beleza do <br/>
            <span className="italic text-gold-gradient font-light">requinte</span> em você.
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.5} width="100%">
          <p className="font-sans text-neutral-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-shadow-sm">
            Joias exclusivas, elegantes e feitas para eternizar momentos únicos. 
            Descubra o brilho que combina com sua essência.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.7} direction="up">
          <a href="#collections" onClick={(e) => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}}>
            <Button className="shadow-[0_0_40px_rgba(234,179,8,0.3)]">Conheça a Coleção</Button>
          </a>
        </RevealOnScroll>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70 animate-pulse">
        <span className="text-[10px] uppercase tracking-widest text-gold-500">Role para ver</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;