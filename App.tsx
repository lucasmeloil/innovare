import React from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-gold-500 selection:text-black overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
      <BackToTop />
    </div>
  );
}

export default App;