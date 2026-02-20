import React from 'react';
import { personalData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2>Technical Skills</h2>
      <div className="skills-wrapper">
        {personalData.skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <skill.icon className="skill-icon" style={{ color: skill.color }} />
            <span style={{ fontWeight: '600' }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;