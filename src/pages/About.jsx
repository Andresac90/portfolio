/* About.jsx
   File: About.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src="/assets/profile.jpg"  // Make sure this image exists in your public assets folder.
          alt="Andres Acevedo"
          className="profile-image"
        />
        <div className="about-text">
          {/* Option 1: Add the emoji next to your name */}
          <h2>Mario Andres Acevedo Pico</h2>
          <p>
            I am a dedicated Game Developer with a strong foundation in both game design and gameplay programming.
            My journey has taken me through diverse educational and professional experiences, and I am committed to
            creating games that are both engaging and innovative. I continuously strive to learn and incorporate the latest
            technologies to enhance gameplay and user experience.
          </p>
          <p>
            Currently I'm studying an advanced diploma in Game Programming at Centennial College. 
          </p>
          {/* Option 2: Alternatively, add the emoji in your location */}
          <p>
            @Toronto, Ontario 🇨🇦
          </p>
          <a
            href="/assets/resume.pdf"  // Place your resume PDF in your public assets folder.
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Download My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
