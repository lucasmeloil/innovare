import React from 'react';
import { Gem, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23EAB308\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Composition */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 border border-gold-500/30 translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/innovareAbout/600/800" 
                alt="Nossa loja" 
                className="w-full h-full object-cover relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 p-6 border border-gold-500/20 shadow-xl z-20 max-w-xs">
                <p className="font-serif text-gold-400 italic text-xl">"Elegância que transcende o tempo."</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-gold-500 text-sm tracking-[0.3em] uppercase font-bold mb-4">Sobre Nós</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Tradição e Requinte em <br/> <span className="text-gold-400">Itabaiana</span>
            </h3>
            
            <p className="text-neutral-400 font-light leading-relaxed mb-8 text-lg">
              Localizada no coração de Itabaiana/SE, a <strong className="text-white font-normal">Innovare Jóias</strong> é referência em sofisticação e atendimento personalizado. 
              Não vendemos apenas acessórios; entregamos autoestima e memórias eternizadas em metais nobres e pedras preciosas.
            </p>
            
            <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
              Cada peça é escolhida com cuidado meticuloso para refletir estilo, elegância e significado. Seja para presentear alguém especial ou para celebrar suas próprias conquistas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-3 text-gold-400">
                  <Gem size={20} />
                </div>
                <h4 className="text-white font-serif text-lg">Qualidade</h4>
                <p className="text-neutral-500 text-sm mt-1">Materiais nobres</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-3 text-gold-400">
                  <Star size={20} />
                </div>
                <h4 className="text-white font-serif text-lg">Exclusividade</h4>
                <p className="text-neutral-500 text-sm mt-1">Design único</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-3 text-gold-400">
                  <Award size={20} />
                </div>
                <h4 className="text-white font-serif text-lg">Garantia</h4>
                <p className="text-neutral-500 text-sm mt-1">Confiança total</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;