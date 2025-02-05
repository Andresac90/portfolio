/* Projects.jsx (excerpt)
   File: Projects.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Projects.css';
import projectsData from '../data/projectsData';
import ProjectDetail from '../components/ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = params.get('projectId');
    if (projectId) {
      const project = projectsData.find(p => String(p.id) === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [location.search]);

  const openDetail = (project) => {
    setSelectedProject(project);
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section">
      <h1>{selectedProject ? selectedProject.title : "My Projects"}</h1>
      {!selectedProject ? (
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openDetail(project)}>
              {/* Use the dedicated thumbnail for the grid view */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-image"
              />
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <ProjectDetail project={selectedProject} onBack={closeDetail} />
      )}
    </section>
  );
};

export default Projects;
