// src/components/Lightbox.jsx
import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Lightbox.css';

function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const count = images.length;
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Lock page scrolling while the lightbox is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goToNext, goToPrevious]);

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <button 
        className="lightbox-nav lightbox-prev" 
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        aria-label="Previous image"
      >
        ◂ {/* CHANGED: Different arrow character */}
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {currentImage.type === 'video' ? (
          <video
            className="lightbox-media"
            src={currentImage.url}
            controls
            autoPlay
            loop
          />
        ) : (
          <img
            className="lightbox-media"
            src={currentImage.url}
            alt={`Gallery image ${currentIndex + 1}`}
          />
        )}
        
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        className="lightbox-nav lightbox-next" 
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        aria-label="Next image"
      >
        ▸ {/* CHANGED: Different arrow character */}
      </button>
    </div>
  );
}

export default Lightbox;