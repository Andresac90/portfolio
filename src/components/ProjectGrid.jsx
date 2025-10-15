// src/components/ProjectGrid.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
import '../styles/ProjectGrid.css';

function ProjectGrid({ setCurrentView }) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          A collection of my game development work
        </p>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setCurrentView={setCurrentView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;
