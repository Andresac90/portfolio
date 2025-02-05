/* ProjectDetail.jsx
   File: ProjectDetail.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React, { useState } from 'react';
import '../styles/ProjectDetail.css';

export default function ProjectDetail({ project, onBack }) {
  const [isClosing, setIsClosing] = useState(false);

  // When the Back button is clicked, trigger the slide-out animation and then call onBack.
  const handleBack = () => {
    setIsClosing(true);
    setTimeout(() => {
      onBack();
    }, 500); // Delay matches the CSS animation duration.
  };

  // Render media based on its type: YouTube, video, gif, or image.
  const renderMedia = () => {
    if (project.media.type === 'youtube') {
      return (
        <div className="youtube-container">
          <iframe
            className="youtube-iframe"
            src={project.media.url}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else if (project.media.type === 'video') {
      return (
        <video className="project-media" controls>
          <source src={project.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      // For both "image" and "gif" types, render an <img>.
      return (
        <img src={project.media.url} alt={project.title} className="project-media" />
      );
    }
  };

  return (
    <div className={`project-detail ${isClosing ? 'slide-out' : 'slide-in'}`}>
      <button className="back-button" onClick={handleBack}>← Back to Projects</button>
      <div className="project-detail-content">
        {renderMedia()}
        <p>{project.description}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Engine & Platforms:</strong> {project.engineAndPlatforms}</p>
        <p><strong>Outcome:</strong> {project.outcome}</p>
        {/* Optional itch.io button */}
        {project.itchioLink && (
          <a
            href={project.itchioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="itchio-button"
          >
            View on itch.io
          </a>
        )}
      </div>
    </div>
  );
}
