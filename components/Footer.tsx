import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
           <h2 className="font-serif text-3xl text-white tracking-wider mb-2">INNOVARE</h2>
           <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold-500">Jóias</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8 mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400">
            <li><a href="#hero" className="hover:text-gold-400 transition-colors">Início</a></li>
            <li><a href="#about" className="hover:text-gold-400 transition-colors">Sobre</a></li>
            <li><a href="#collections" className="hover:text-gold-400 transition-colors">Coleções</a></li>
            <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Depoimentos</a></li>
            <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contato</a></li>
          </ul>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors transform hover:scale-110">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-light">
          <p>&copy; {new Date().getFullYear()} Innovare Jóias. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">Política de Privacidade</a>
            <span className="text-neutral-800">|</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;