// src/components/ProjectCard.jsx
import React, { useRef, useState } from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project, setCurrentView }) {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleClick = () => {
    setCurrentView({ type: 'project', projectId: project.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && project.videoUrl && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error('Error playing video:', err);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current && project.videoUrl && !videoError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', project.videoUrl, e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', project.videoUrl);
  };

  // Determine what to show
  const hasVideo = project.videoUrl && !videoError;
  const hasImage = project.imageUrl;
  const showVideo = hasVideo && isHovering;
  const showImage = hasImage && (!hasVideo || !isHovering);

  return (
    <div 
      className="project-card" 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-media">
        {/* Show image when not hovering or as fallback */}
        {showImage && (
          <img 
            className="project-image"
            src={project.imageUrl} 
            alt={project.title}
            style={{ display: showVideo ? 'none' : 'block' }}
          />
        )}
        
        {/* Show video when hovering (if available) */}
        {hasVideo && (
          <video 
            ref={videoRef}
            className="project-video"
            src={project.videoUrl}
            loop
            muted
            playsInline
            preload="auto"
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            style={{ display: showVideo ? 'block' : 'none' }}
          />
        )}

        {/* Show placeholder if nothing is available */}
        {!hasImage && !hasVideo && (
          <div className="project-placeholder">
            No media available
          </div>
        )}

        {/* Show overlay only if there's no video */}
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