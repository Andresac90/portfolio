/* ProjectCarousel.jsx
   File: ProjectCarousel.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import '../styles/ProjectCarousel.css';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Cycle through projects every 3 seconds (adjust the timing as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // When the carousel item is clicked, navigate to the Projects page with the selected project's ID
  const handleClick = () => {
    const project = projectsData[currentIndex];
    navigate(`/projects?projectId=${project.id}`);
  };

  const project = projectsData[currentIndex];

  return (
    <div className="carousel-container" onClick={handleClick}>
      {/* The key forces the component to re-mount each time the currentIndex changes */}
      <div key={currentIndex} className="carousel-item">
        <div className="carousel-title">{project.title}</div>
        <img src={project.thumbnail} alt={project.thumbnail} className="carousel-image" />
        
      </div>
    </div>
  );
}
