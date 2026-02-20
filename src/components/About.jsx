import React from 'react';
import { personalData } from '../data';

const About = () => {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        {personalData.about.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '15px' }}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
export default About;