// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';
import profilePhoto from '../assets/photo/profile-photo.jpg'; 

function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile">
            <img src={profilePhoto} alt="Andrés Acevedo" className="hero-photo" />
          </div>
          <div className="hero-text">
            <p className="hero-description">
              Game programmer specializing in systems and gameplay programming, focused on 
              writing efficient, clean code and tackling new challenges in game development.
            </p>
            <button 
              className="hero-cta"
              onClick={scrollToProjects}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      <div 
        className="hero-scroll-indicator"
        onClick={scrollToProjects}
        style={{ cursor: 'pointer' }}
      >
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default HeroSection;