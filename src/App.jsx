import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1e293b', color: '#64748b' }}>
        <p>&copy; 2026 Shyam Jee Rai. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;