// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';
import profilePhoto from '../assets/images/profile-photo.jpg'; 

function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile">
            <img src={profilePhoto} alt="Andres Acevedo" className="hero-photo" />
          </div>
          <div className="hero-text">
            <p className="hero-description">
              Game Developer specializing in gameplay systems and graphics programming. Originally from Chihuahua, Mexico 🇲🇽
              <br />
              Currently based in Toronto, Canada 🇨🇦
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