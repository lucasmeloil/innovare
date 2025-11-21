import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form */}
          <div className="w-full lg:w-1/2 bg-neutral-900/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
            <h2 className="font-serif text-3xl text-white mb-2">Entre em Contato</h2>
            <p className="text-neutral-400 mb-8 font-light">Preencha o formulário abaixo e entraremos em contato em breve.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Nome</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600" placeholder="Seu nome completo" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">E-mail</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Telefone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600" placeholder="(79) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600 resize-none" placeholder="Gostaria de saber mais sobre..."></textarea>
              </div>
              <div className="pt-4">
                <Button type="submit">Enviar Mensagem</Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-12">
              <h2 className="font-serif text-4xl text-white mb-6">Visite Nossa Loja</h2>
              <p className="text-neutral-300 font-light leading-relaxed max-w-md">
                Venha tomar um café conosco e conhecer nossas peças pessoalmente. 
                Teremos o prazer em atendê-lo com toda a atenção que você merece.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Endereço</h4>
                  <p className="text-neutral-400 font-light">Rua das Joias, 123, Centro</p>
                  <p className="text-neutral-400 font-light">Itabaiana - SE, 49500-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Contato</h4>
                  <p className="text-neutral-400 font-light">(79) 99999-9999</p>
                  <p className="text-neutral-400 font-light">contato@innovarejoias.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Horário</h4>
                  <p className="text-neutral-400 font-light">Seg - Sex: 09:00 - 18:00</p>
                  <p className="text-neutral-400 font-light">Sáb: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;