import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Us</h1>
        <p>Lorem</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>Lorem</p>
      </div>

      <div className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>

          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>CTO</p>
          </div>

          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Bob Smith</h3>
            <p>COO</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Our History</h2>
        <p>Lorem</p>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>Lorem</p>
      </div>
    </div>
  );
}