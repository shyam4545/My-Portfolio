import React, { useState } from 'react';
import { personalData } from '../data';
import { FaGithub, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  // State for the Lightbox: tracks if it's open, the list of media, and the current index
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0
  });

  // Function to open the lightbox and load all media for that specific project
  const openLightbox = (project, clickedUrl) => {
    const mediaList = [];
    
    // 1. Add video to the list if it exists
    if (project.video) {
      mediaList.push({ type: 'video', url: project.video });
    }
    
    // 2. Add all images to the list
    if (project.images) {
      project.images.forEach(img => {
        mediaList.push({ type: 'image', url: img });
      });
    }

    // 3. Find exactly which one the user clicked so we start there
    const startingIndex = mediaList.findIndex(item => item.url === clickedUrl);

    // 4. Open the modal with this data
    setLightbox({
      isOpen: true,
      items: mediaList,
      currentIndex: startingIndex
    });
  };

  // Navigation Functions
  const nextMedia = (e) => {
    e.stopPropagation(); // Prevents the click from closing the modal
    setLightbox(prev => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, currentIndex: prev.currentIndex - 1 }));
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, items: [], currentIndex: 0 });
  };

  return (
    <section id="projects" className="container">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {personalData.projects.map((project) => (
          <div key={project.id} className="project-card">
            
            {/* --- Media Gallery (Horizontal Scroll) --- */}
            <div className="project-gallery">
              {project.video && (
                <video 
                  src={project.video} 
                  autoPlay loop muted playsInline 
                  className="gallery-item exp-photo-clickable" 
                  onClick={() => openLightbox(project, project.video)}
                  title="Click to expand video"
                />
              )}
              
              {project.images && project.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="gallery-item exp-photo-clickable" 
                  onClick={() => openLightbox(project, img)}
                  title="Click to expand image"
                />
              ))}
            </div>

            {/* --- Content Section --- */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="project-icons">
                {project.icons && project.icons.map((Icon, idx) => (
                  Icon ? <Icon key={idx} title={project.tech ? project.tech[idx] : ""} /> : null
                ))}
              </div>
              <p style={{ color: '#475569', marginBottom: '20px' }}>{project.desc}</p>
              
              <a href={project.github} target="_blank" rel="noreferrer" className="github-btn">
                <FaGithub /> View Code
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* --- FULL SCREEN MODAL WITH SLIDER --- */}
      {lightbox.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="close-modal-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          {/* Left Arrow (Only show if not on the first image) */}
          {lightbox.currentIndex > 0 && (
            <button className="slider-btn prev-btn" onClick={prevMedia}>
              <FaArrowLeft />
            </button>
          )}

          {/* Render the Current Media Item */}
          {lightbox.items[lightbox.currentIndex].type === 'video' ? (
            <video 
              src={lightbox.items[lightbox.currentIndex].url} 
              controls autoPlay 
              className="lightbox-content" 
              onClick={(e) => e.stopPropagation()} 
            />
          ) : (
            <img 
              src={lightbox.items[lightbox.currentIndex].url} 
              alt="Expanded Project" 
              className="lightbox-content" 
              onClick={(e) => e.stopPropagation()} 
            />
          )}

          {/* Right Arrow (Only show if not on the last image) */}
          {lightbox.currentIndex < lightbox.items.length - 1 && (
            <button className="slider-btn next-btn" onClick={nextMedia}>
              <FaArrowRight />
            </button>
          )}
        </div>
      )}

    </section>
  );
};

export default Projects;