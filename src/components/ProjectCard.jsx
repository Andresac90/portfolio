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
  // The preview video is only downloaded once the user shows interest
  // (hover on desktop, scrolled into view on mobile). Until then, only the
  // lightweight cover image is loaded.
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const cardVideoUrl = project.videoPreviewUrl || project.videoUrl;
  const hasVideo = Boolean(cardVideoUrl) && !videoError;
  const hasImage = Boolean(project.imageUrl);
  const isActive = isMobile ? isInView : isHovering;

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const mobile = isTouchDevice && window.innerWidth <= 768;
    setIsMobile(mobile);

    const card = cardRef.current;
    if (!mobile || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1.0], rootMargin: '-20% 0px -20% 0px' }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isActive && hasVideo) setShouldLoadVideo(true);
  }, [isActive, hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {
        // Autoplay can be blocked (e.g. low-power mode); the cover image stays visible.
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, shouldLoadVideo]);

  const handleClick = () => {
    navigate(`/portfolio/project/${project.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showVideo = hasVideo && isActive && videoReady;

  return (
    <div
      ref={cardRef}
      className="project-card"
      role="link"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      onFocus={() => !isMobile && setIsHovering(true)}
      onBlur={() => !isMobile && setIsHovering(false)}
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => !isMobile && setIsHovering(false)}
    >
      <div className="project-media">
        {hasImage && (
          <img
            className="project-image"
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
        )}

        {hasVideo && shouldLoadVideo && (
          <video
            ref={videoRef}
            className={`project-video${showVideo ? ' is-visible' : ''}`}
            src={cardVideoUrl}
            loop
            muted
            playsInline
            preload="auto"
            onPlaying={() => setVideoReady(true)}
            onError={() => setVideoError(true)}
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
