import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Project';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;