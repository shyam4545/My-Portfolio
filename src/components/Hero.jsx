import React, { useState } from 'react';
import { personalData } from '../data';
import { FaTimes } from 'react-icons/fa'; // Added for the close button

const Hero = () => {
  // State to track if the profile picture is clicked and open full-screen
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="hero-section" style={{ textAlign: 'center', marginTop: '40px' }}>
      
      {/* --- PROFILE PICTURE --- */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="/profile.jpg" // Make sure this matches your image name in the public folder!
          alt="Shyam Jee Rai" 
          className="my-hero-image"
          onClick={() => setIsImageOpen(true)} // Opens the modal on click
          title="Click to view full image"
        />
      </div>

      <h1 className="hero-title">{personalData.name}</h1>
      <h3 className="hero-subtitle">
        {personalData.role}
      </h3>
      
      {/* Button Container */}
      <div style={{ 
        marginTop: '30px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap', 
        gap: '20px' 
      }}>
        <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="hero-btn">
          GitHub
        </a>
        
        <a 
          href="/ressume.pdf" 
          download 
          className="hero-btn" 
          style={{ 
            background: 'white', 
            color: '#8b5cf6', 
            border: '2px solid #8b5cf6',
            boxShadow: 'none'
          }}
        >
          Resume
        </a>
        
        <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="hero-btn">
          LinkedIn
        </a>
      </div>

      {/* --- FULL SCREEN MODAL (LIGHTBOX) --- */}
      {isImageOpen && (
        <div className="lightbox-overlay" onClick={() => setIsImageOpen(false)}>
          <button className="close-modal-btn" onClick={() => setIsImageOpen(false)}>
            <FaTimes />
          </button>
          <img 
            src="/profile.jpg" 
            alt="Full Screen Profile" 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the modal
          />
        </div>
      )}

    </section>
  );
};

export default Hero;