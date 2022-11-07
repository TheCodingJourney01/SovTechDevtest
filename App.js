import React from 'react';
import Navbar from '../src/componets/Navbar.jsx';
import About from './componets/About.jsx';
import Home from './componets/Home.jsx';

import Skills from './componets/Skills.jsx';





function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      
    </div>
  );
}

export default App;
// export SET NODE_OPTIONS=--openssl-legacy-provider && 