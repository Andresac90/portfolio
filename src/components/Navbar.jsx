// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import linkedinIcon from '../assets/icons/InBug-Black.png';
import githubIcon from '../assets/icons/github-mark.svg'; 
import itchioIcon from '../assets/icons/itchio-logo-textless-black.svg';
import resumePDF from '../assets/resume/Resume_Andres_Acevedo_Game_Dev_Level_Design.pdf'; 

function Navbar({ scrolled, currentView }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [inProjectsSection, setInProjectsSection] = useState(false);

  // Scroll-spy: on the home page, highlight "Projects" once the projects
  // section reaches the upper part of the screen.
  useEffect(() => {
    if (currentView.type !== 'home') return;

    const update = () => {
      const section = document.getElementById('projects');
      if (!section) return;
      setInProjectsSection(section.getBoundingClientRect().top <= window.innerHeight * 0.4);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [currentView.type]);

  const activeLink =
    currentView.type === 'project' || inProjectsSection ? 'projects' : 'home';

  const handleHomeClick = () => {
    navigate('/portfolio/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    if (location.pathname === '/portfolio/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/portfolio/#projects');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button 
          className="nav-logo-wrapper"
          onClick={handleHomeClick}
        >
          <div className="nav-logo">Andres Acevedo</div>
          <div className="nav-subtitle">Game Developer</div>
        </button>
        
        <div className="nav-links">
          <button
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={handleProjectsClick}
          >
            Projects
          </button>
        </div>

        <div className="nav-right">
          <a 
            href={resumePDF}
            download="Andres_Acevedo_Resume.pdf"
            className="resume-button"
          >
            Resume
          </a>
          
          <div className="nav-social">
            <a href="https://www.linkedin.com/in/andresacep/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/Andresac90" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://andresac90.itch.io/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Itch.io">
              <img src={itchioIcon} alt="Itch.io" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;