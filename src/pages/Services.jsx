/* Services.jsx
   File: Services.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React from 'react';
import '../styles/Services.css';

export default function Services() {
  return (
    <section className="services-section">
      <h1>My Services</h1>
      <div className="services-container">
        <div className="service-card">
          {/* <img
            src="/assets/service-game-dev.jpg"
            alt="Game Development"
            className="service-image"
          /> */}
          <h2>Game Development</h2>
          <p>
            From concept to launch, I develop engaging games that combine innovative design with robust programming.
          </p>
        </div>
        <div className="service-card">
          {/* <img
            src="/assets/service-app-dev.jpg"
            alt="Mobile App Development"
            className="service-image"
          /> */}
          <h2>Mobile App Development</h2>
          <p>
            I build intuitive mobile apps that provide a seamless user experience across platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
