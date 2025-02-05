/* Home.jsx
   File: Home.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 
import ProjectCarousel from '../components/ProjectCarousel';

export default function Home() {
  return (
    <section className="welcome-section">
      <h1>Welcome to My Game Development Portfolio!</h1>
      <p>
        Hello and welcome! I’m Andres Acevedo, a passionate game developer dedicated to creating immersive and innovative gaming experiences.
      </p>
      <p className="mission-statement">
        My mission is to craft games that inspire, entertain, and push the boundaries of interactive storytelling.
      </p>
      <p>
        Explore my portfolio to learn more about my work and background.
      </p>
      <div className="home-buttons">
        <Link to="/about" className="btn about-btn">
          Learn More About Me
        </Link>
        <Link to="/projects" className="btn projects-btn">
          View All Projects
        </Link>
      </div>
      {/* The single-item project carousel that cycles through projects */}
      <ProjectCarousel />
    </section>
  );
}
