// MainRouter.jsx
// File: MainRouter.jsx
// Student: Andres Acevedo
// StudentID: 12345678
// Date: 2025-02-04

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects'; // renamed for consistency
import Layout from './components/Layout';

const MainRouter = () => {
  return (
    <Routes>
      {/* The Layout component acts as a wrapper for all routes */}
      <Route path="/" element={<Layout />}>
        {/* The index route will render Home on the "/" path */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
