import React, { useState, useEffect } from 'react';
import Parallax from 'react-springy-parallax';
import './App.css';
import Splash from './components/Splash';
import About from './components/About';
import Features from './components/Features';
import Authors from './components/Authors';
import bluedrop from './assets/images/bluedrop.gif';
import pinkrice from './assets/images/pinkrice.png';
import darkpaths from './assets/images/dark-paths.png';
import papyrusdark from './assets/images/papyrus-dark.png';

function App() {
  return (
    <Parallax useRef="parallax" pages={4} className="App">
      <Parallax.Layer
        offset={0}
        style={{
          backgroundImage: `url(${bluedrop})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Parallax.Layer
        offset={1}
        style={{
          backgroundImage: `url(${pinkrice})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      <Parallax.Layer
        offset={2}
        style={{
          backgroundImage: `url(${darkpaths})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      <Parallax.Layer
        offset={3}
        style={{
          backgroundImage: `url(${papyrusdark})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      <Parallax.Layer offset={0} speed={1}>
        <Splash />
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={1}>
        <About />
      </Parallax.Layer>

      <Parallax.Layer offset={2} speed={1}>
        <Features />
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={1}>
        <Authors />
      </Parallax.Layer>
    </Parallax>
  );
}

export default App;
