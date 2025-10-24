// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { projectsData } from './data/projects';
import './App.css';

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectPage = location.pathname.includes('/project/');

  useEffect(() => {
    const handleScroll = () => {
      if (!isProjectPage) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const setCurrentView = (view) => {
    if (view.type === 'home') {
      navigate('/portfolio/');
    } else if (view.type === 'project') {
      navigate(`/portfolio/project/${view.projectId}`);
    }
  };

  return (
    <div className="app">
      <Navbar
        scrolled={scrolled}
        currentView={{ type: isProjectPage ? 'project' : 'home' }}
        setCurrentView={setCurrentView}
      />
      <Routes>
        <Route path="/portfolio/" element={<HomePage setCurrentView={setCurrentView} />} />
        <Route path="/portfolio/project/:projectId" element={<ProjectPageWrapper setCurrentView={setCurrentView} />} />
      </Routes>
    </div>
  );
}

function ProjectPageWrapper({ setCurrentView }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Convert projectId from string to number for comparison
  const project = projectsData.find(p => p.id === parseInt(projectId, 10));

  if (!project) {
    navigate('/portfolio/');
    return null;
  }

  return <ProjectPage project={project} setCurrentView={setCurrentView} />;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;