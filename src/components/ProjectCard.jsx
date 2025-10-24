// src/components/ProjectCard.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      return isTouchDevice && isSmallScreen;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);

    if (mobile && cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setIsInView(true);
            } else {
              setIsInView(false);
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1.0],
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, []);

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
    navigate(`/portfolio/project/${project.id}`);
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