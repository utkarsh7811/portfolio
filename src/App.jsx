import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StatusBar from './components/StatusBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <StatusBar />
    </div>
  );
}

export default App;
