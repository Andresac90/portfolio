// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default HomePage;