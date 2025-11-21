import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import Button from './Button';

const InstagramFeed: React.FC = () => {
  // Simulated post data
  const posts = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-20 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <Instagram className="text-gold-500 w-8 h-8 mb-4" />
          <h2 className="font-serif text-3xl text-white mb-2">Siga @innovare.joiass</h2>
          <p className="text-neutral-400">Acompanhe as novidades e inspirações diárias.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {posts.map((id) => (
            <a 
              key={id} 
              href="https://instagram.com/innovare.joiass" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-neutral-800 block"
            >
              <img 
                src={`https://picsum.photos/seed/insta${id}/300/300`} 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="text-white fill-white w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://instagram.com/innovare.joiass" target="_blank" rel="noopener noreferrer">
             <Button>Siga no Instagram</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;