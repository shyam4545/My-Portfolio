import React, { useState } from 'react';
import { personalData } from '../data';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const Experience = () => {
  // State for full-screen image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // State for expanding/collapsing extra photos
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isPdf = (url) => typeof url === 'string' && url.endsWith('.pdf');

  return (
    <section id="experience" className="container">
      <h2>Experience & Achievements</h2>
      <div className="timeline">
        {personalData.experiences.map((exp) => {
          const isExpanded = expandedIds.includes(exp.id);
          
          // Smartly handle whether 'exp.image' is an array, a string, or empty
          const imageArray = Array.isArray(exp.image) ? exp.image : (exp.image ? [exp.image] : []);
          
          const mainImage = imageArray.length > 0 ? imageArray[0] : null;
          const hasMoreImages = imageArray.length > 1;

          return (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                {exp.icon ? <exp.icon /> : null}
              </div>
              
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{exp.role}</h3>
                <p style={{ fontWeight: 'bold', color: '#6366f1' }}>{exp.company} | {exp.duration}</p>
                <p style={{ marginTop: '10px', color: '#475569', marginBottom: '15px' }}>{exp.desc}</p>
                
                {/* --- MAIN MEDIA (1st Photo or PDF) --- */}
                {isPdf(mainImage) ? (
                  <a href={mainImage} target="_blank" rel="noreferrer" className="cert-btn">
                    📄 View Certificate (PDF)
                  </a>
                ) : mainImage ? (
                  <img 
                    src={mainImage} 
                    alt={exp.role} 
                    className="exp-photo exp-photo-clickable"
                    onClick={() => setSelectedImage(mainImage)}
                  />
                ) : null}

                {/* --- VIEW MORE BUTTON --- */}
                {hasMoreImages && !isPdf(mainImage) && (
                   <button className="view-more-btn" onClick={() => toggleExpand(exp.id)}>
                     {isExpanded ? (
                       <><FaChevronUp /> Show Less</>
                     ) : (
                       <><FaChevronDown /> View {imageArray.length - 1} More Photos</>
                     )}
                   </button>
                )}

                {/* --- EXTRA PHOTOS GRID --- */}
                {isExpanded && hasMoreImages && (
                  <div className="additional-photos-grid">
                    {imageArray.slice(1).map((img, idx) => (
                       <img 
                         key={idx} 
                         src={img} 
                         alt={`${exp.role} extra ${idx}`} 
                         className="exp-photo exp-photo-clickable"
                         style={{ marginTop: 0, height: '150px', objectFit: 'cover' }}
                         onClick={() => setSelectedImage(img)}
                       />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <img 
            src={selectedImage} 
            alt="Full Screen" 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Experience;