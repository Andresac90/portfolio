// src/components/Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import linkedinIcon from '../assets/icons/InBug-Black.png';
import githubIcon from '../assets/icons/github-mark.svg'; 
import itchioIcon from '../assets/icons/itchio-logo-textless-black.svg';
import resumePDF from '../assets/resume/ResumeGameDev_Andres.pdf'; 

function Navbar({ scrolled, currentView }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate('/portfolio/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    if (location.pathname === '/portfolio/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/portfolio/');
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
          <div className="nav-subtitle">Game Programmer</div>
        </button>
        
        <div className="nav-links">
          <button
            className={`nav-link ${currentView.type === 'home' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className="nav-link"
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