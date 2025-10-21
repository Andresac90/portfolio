// src/components/ProjectCard.jsx
import React, { useRef, useState, useEffect } from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project, setCurrentView }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Detect if device is mobile/touch
    const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(mobile);

    // Only set up intersection observer on mobile
    if (mobile && cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Card is considered "centered" when mostly visible
            const ratio = entry.intersectionRatio;
            console.log(`${project.title} visibility:`, ratio);
            
            if (entry.isIntersecting && ratio >= 0.5) {
              console.log(`Playing video for ${project.title}`);
              setIsInView(true);
            } else {
              console.log(`Pausing video for ${project.title}`);
              setIsInView(false);
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1.0],
          rootMargin: '-10% 0px -10% 0px'
        }
      );

      observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [project.title]);

  // Separate effect to handle video playback based on isInView
  useEffect(() => {
    if (isMobile && isInView) {
      playVideo();
    } else if (isMobile && !isInView) {
      pauseVideo();
    }
  }, [isInView, isMobile]);

  const playVideo = () => {
    const videoToPlay = project.videoPreviewUrl || project.videoUrl;
    
    if (videoRef.current && videoToPlay && !videoError) {
      videoRef.current.play().catch(err => {
        console.error('Error playing video:', err);
      });
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    setCurrentView({ type: 'project', projectId: project.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true);
      playVideo();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
      pauseVideo();
    }
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', project.videoPreviewUrl || project.videoUrl, e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', project.videoPreviewUrl || project.videoUrl);
  };

  const cardVideoUrl = project.videoPreviewUrl || project.videoUrl;
  
  const hasVideo = cardVideoUrl && !videoError;
  const hasImage = project.imageUrl;
  
  // On mobile, show video when card is in view; on desktop, show video on hover
  const showVideo = hasVideo && (isMobile ? isInView : isHovering);
  const showImage = hasImage && !showVideo;

  return (
    <div 
      ref={cardRef}
      className="project-card" 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-media">
        {showImage && (
          <img 
            className="project-image"
            src={project.imageUrl} 
            alt={project.title}
          />
        )}
        
        {hasVideo && (
          <video 
            key={`${project.id}-${cardVideoUrl}`}
            ref={videoRef}
            className="project-video"
            src={cardVideoUrl}
            loop
            muted
            playsInline
            preload="auto"
            poster={project.imageUrl}
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            style={{ display: showVideo ? 'block' : 'none' }}
          />
        )}

        {!hasImage && !hasVideo && (
          <div className="project-placeholder">
            No media available
          </div>
        )}

        {!hasVideo && (
          <div className="project-overlay">
            <span className="view-project">View Project →</span>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;