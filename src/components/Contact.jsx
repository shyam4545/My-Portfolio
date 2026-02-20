import React from 'react';
import { personalData } from '../data';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>Get In Touch</h2>
      
      <div className="contact-wrapper">
        
        {/* --- Left Side: Info & Socials --- */}
        <div className="contact-info-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>Let's Connect</h3>
          <p style={{ color: '#475569', marginBottom: '20px' }}>
            I am currently open to internships, freelance opportunities, and project collaborations.
          </p>
          
          <p><strong>Email:</strong> <a href={`mailto:${personalData.email}`}>{personalData.email}</a></p>
          <p><strong>Phone:</strong> {personalData.phone}</p>
          
          <div className="social-icons-contact">
            <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href={personalData.socials.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={`mailto:${personalData.email}`}><FaEnvelope /></a>
          </div>
        </div>

        {/* --- Right Side: The Email Form --- */}
        <div className="contact-form-card">
          {/* Web3Forms Action URL */}
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            
            {/* PASTE YOUR ACCESS KEY HERE */}
            <input type="hidden" name="access_key" value="93a41f9f-cb7b-457b-b392-a32f587500b6" />
            
            <input type="text" name="name" placeholder="Your Name" required className="form-input" />
            <input type="email" name="email" placeholder="Your Email" required className="form-input" />
            <textarea name="message" placeholder="Write your message here..." required className="form-input form-textarea"></textarea>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;