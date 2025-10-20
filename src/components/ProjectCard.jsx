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
    // Use preview video if available, otherwise fall back to main video
    const videoToPlay = project.videoPreviewUrl || project.videoUrl;
    if (videoRef.current && videoToPlay && !videoError) {
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
    if (videoRef.current && (project.videoPreviewUrl || project.videoUrl) && !videoError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', project.videoPreviewUrl || project.videoUrl, e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', project.videoPreviewUrl || project.videoUrl);
  };

  // Use preview video for card, fall back to main video if no preview
  const cardVideoUrl = project.videoPreviewUrl || project.videoUrl;
  
  // Determine what to show
  const hasVideo = cardVideoUrl && !videoError;
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
        
        {/* Show preview video when hovering (if available) */}
        {hasVideo && (
          <video 
            key={`${project.id}-${cardVideoUrl}`} /* ADDED: Forces React to recreate video element for each project */
            ref={videoRef}
            className="project-video"
            src={cardVideoUrl}
            loop
            muted
            playsInline
            preload="metadata"
            poster={project.imageUrl}
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