import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ColorBends from './assets/components/ColorBends.jsx';
import Header from './assets/components/Header.jsx';
import CTA from './assets/components/call-to-action.jsx';
import Footer from './assets/components/Footer.jsx';

import About from './assets/components/About.jsx';
import Portfolio from './assets/components/Portfolio.jsx';
import Contact from './assets/components/Contact.jsx';

import './App.css';

function App() {
  return (
    //minha tela total
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* meu fundo color bends com bg-black também do reactbits */}
      <ColorBends
        className="fixed inset-0 pointer-events-none z-1"
        colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
      />
      <Header />
      {/* o roteamento para abrir novas páginas */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CTA />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                {' '}
                <About /> <Footer />{' '}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact /> <Footer />{' '}
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <Portfolio /> <Footer />{' '}
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
