// src/pages/ProjectPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import '../styles/ProjectPage.css';

function ProjectPage({ project, setCurrentView }) {
  if (!project) {
    return (
      <div className="project-page">
        <div className="project-container">
          <p>Project not found.</p>
          <button 
            className="back-button"
            onClick={() => setCurrentView({ type: 'home' })}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-container">
        <button 
          className="back-button"
          onClick={() => setCurrentView({ type: 'home' })}
        >
          ← Back to Projects
        </button>

        <div className="project-header">
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-description">{project.fullDescription}</p>
        </div>

        <div className="project-media-large">
          {project.videoUrl ? (
            <video 
              className="project-video-large"
              src={project.videoUrl}
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <img 
              className="project-image-large"
              src={project.imageUrl} 
              alt={project.title}
            />
          )}
        </div>

        <div className="project-details">
          <div className="project-detail-section">
            <h2 className="detail-title">Role</h2>
            <p className="detail-text">{project.role}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="detail-title">Technologies</h2>
            <div className="project-tags-large">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag-large">{tag}</span>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="project-detail-section">
              <h2 className="detail-title">Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <div className="project-detail-section">
              <h2 className="detail-title">Achievements</h2>
              <ul className="achievements-list">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="achievement-item">{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {project.links && (
            <div className="project-detail-section">
              <h2 className="detail-title">Links</h2>
              <div className="project-links">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub →
                  </a>
                )}
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.itchio && (
                  <a 
                    href={project.links.itchio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Play on Itch.io →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="project-gallery">
            <h2 className="detail-title">Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.map((item, index) => (
                <div key={index} className="gallery-item">
                  {item.type === 'video' ? (
                    <video 
                      className="gallery-video"
                      src={item.url}
                      controls
                      loop
                      muted
                    />
                  ) : (
                    <img 
                      className="gallery-image"
                      src={item.url} 
                      alt={`${project.title} screenshot ${index + 1}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;