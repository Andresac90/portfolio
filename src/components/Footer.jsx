import React from 'react';
import '../styles/Footer.css';
import linkedinIcon from '../assets/icons/InBug-Black.png';
import githubIcon from '../assets/icons/github-mark.svg'; 
import itchioIcon from '../assets/icons/itchio-logo-textless-black.svg';
import resumePDF from '../assets/resume/ResumeGameDev_Andres.pdf'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Andres Acevedo</h3>
            <p className="footer-title">Game Programmer</p>
          </div>
          
          <div className="footer-right">
            <a 
              href={resumePDF}
              download="Andres_Acevedo_Resume.pdf"
              className="footer-resume-button"
            >
              Resume
            </a>
            
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/andresacep/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
              </a>
              <a href="https://github.com/Andresac90" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" width="24" height="24" />
              </a>
              <a href="https://andresac90.itch.io/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Itch.io">
                <img src={itchioIcon} alt="Itch.io" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Andres Acevedo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;