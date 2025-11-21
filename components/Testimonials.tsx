import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    text: "Comprei meu anel de noivado na Innovare e foi perfeito. A equipe me ajudou a escolher a pedra ideal com muita paciência.",
    author: "Carla Souza",
    location: "Itabaiana",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    text: "Atendimento impecável e peças maravilhosas. Comprei um relógio para meu marido e ele amou. Recomendo de olhos fechados!",
    author: "Juliana Mendes",
    location: "Aracaju",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    text: "A qualidade das joias é surreal. Comprei um colar há dois anos e continua brilhando como novo. Minha loja favorita.",
    author: "Fernanda Oliveira",
    location: "Itabaiana",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-950 relative">
       {/* Decorative large quote */}
       <div className="absolute top-10 right-10 opacity-5 text-gold-600 pointer-events-none">
         <Quote size={200} />
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">Depoimentos</span>
          <h2 className="font-serif text-4xl text-white mt-2">O que nossas clientes dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-neutral-900/50 p-8 border border-white/5 hover:border-gold-500/30 transition-colors duration-300 group rounded-sm">
              <div className="flex justify-center mb-6">
                 <div className="p-1 border border-gold-500/50 rounded-full">
                    <img src={item.image} alt={item.author} className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                 </div>
              </div>
              <div className="mb-6 text-center">
                <div className="flex justify-center gap-1 text-gold-500 mb-3 text-xs">
                  {'★★★★★'}
                </div>
                <p className="text-neutral-300 italic font-light leading-relaxed">"{item.text}"</p>
              </div>
              <div className="text-center border-t border-white/5 pt-6">
                <h4 className="font-serif text-white text-lg">{item.author}</h4>
                <span className="text-xs text-neutral-500 uppercase tracking-wide">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;