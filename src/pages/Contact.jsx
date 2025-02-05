/* Contact.jsx
   File: Contact.jsx
   Student: Andres Acevedo
   StudentID: 12345678
   Date: 2025-02-04
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Handle changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission: capture data and redirect to Home
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Optionally, clear the form data
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });
    // Redirect to Home page after submission
    navigate('/');
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>My Contact Information</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:andresacevedopico@gmail.com">andresacevedopico@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +1 (437) 441-3869
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andresacep" target="_blank" rel="noopener noreferrer">Andres Acevedo</a>
          </p>
          <p>
            <strong>itch.io:</strong> <a href="https://andresac90.itch.io/" target="_blank" rel="noopener noreferrer">andresac90.itch.io</a>
          </p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Contact Number:
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
