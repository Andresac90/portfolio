// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project, setCurrentView }) {
  const handleClick = () => {
    setCurrentView({ type: 'project', projectId: project.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-media">
        {project.videoUrl ? (
          <video
            className="project-video"
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="project-image"
            src={project.imageUrl}
            alt={project.title}
          />
        )}
        <div className="project-overlay">
          <span className="view-project">View Project →</span>
        </div>
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
