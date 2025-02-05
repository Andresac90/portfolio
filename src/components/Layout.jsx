/* Layout.jsx
   File: Layout.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          {/* Custom Logo: a simple shape with your initials */}
          <div className="custom-logo">AA</div>
        </div>
        <div className="header-content h1">
          <h1>Andres Acevedo</h1>
        </div>
        <div className="header-content h2">
          <h2>Game Developer</h2>
        </div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <hr />
      </header>
      <main className="main-content">
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Andres Acevedo. All rights reserved.</p>
      </footer>
    </>
  );
}
