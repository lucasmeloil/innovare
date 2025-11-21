import React from 'react';
import { CollectionItem } from '../types';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';

const collections: CollectionItem[] = [
  { id: 1, title: 'Anéis', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Colares', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Relógios', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Pulseiras', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop' },
];

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-32 bg-neutral-950 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/20 skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Coleções <span className="text-gold-500">Exclusivas</span></h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="w-24 h-[2px] bg-gold-500 mx-auto relative overflow-hidden">
               <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
            </div>
            <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg font-light">
              Explore nossa seleção curada das peças mais desejadas da estação, feitas para quem entende o valor dos detalhes.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.1} direction="up">
              <div className="group relative h-[450px] overflow-hidden cursor-pointer border border-white/5 hover:border-gold-500/50 transition-colors duration-500 rounded-sm">
                {/* Card Image */}
                <div className="w-full h-full overflow-hidden bg-neutral-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Animated Frame */}
                <div className="absolute inset-4 border border-gold-500/0 group-hover:border-gold-500/70 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none z-20"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold-200 transition-colors">{item.title}</h3>
                  <div className="w-12 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full mb-4"></div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-x-[-20px] group-hover:translate-x-0">
                    <span className="text-xs text-gold-400 uppercase tracking-widest font-bold">Ver Peças</span>
                    <ArrowRight size={14} className="text-gold-400" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-20">
           <RevealOnScroll delay={0.4}>
             <Button variant="outline">Ver Todas as Joias</Button>
           </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Collections;