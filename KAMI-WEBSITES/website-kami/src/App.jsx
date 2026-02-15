import ColorBends from './assets/components/ColorBends.jsx';
import Header from './assets/components/Header.jsx'
import CTA from './assets/components/call-to-action.jsx';
import Footer from './assets/components/Footer.jsx';
import './App.css'
import React from 'react';

function App() {
    return(
    <div className="w-screen h-screen relative overflow-hidden bg-black">
        <Header className="relative"/>
          <ColorBends className="fixed inset-0"
              colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
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
              color=""
           />
           <CTA/>
           <Footer/>
    </div>
    );
}

export default App
