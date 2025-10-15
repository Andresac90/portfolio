import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { projectsData } from './data/projects';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState({ type: 'home' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scrolled effect on home page
      if (currentView.type === 'home') {
        setScrolled(window.scrollY > 50);
      } else {
        // Always keep navbar in scrolled state on project pages
        setScrolled(true);
      }
    };
    
    handleScroll(); // Call immediately to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView.type) {
      case 'project':
        const project = projectsData.find(p => p.id === currentView.projectId);
        return (
          <ProjectPage
            project={project}
            setCurrentView={setCurrentView}
          />
        );
      default:
        return <HomePage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        scrolled={scrolled}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      {renderView()}
    </div>
  );
}

export default App;