// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header with logo and authentication buttons */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Corporate Logo" className="logo-img" />
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">Login</Link>
          <Link to="/register" className="auth-button">Register</Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero-section">
        <h1>Welcome to Our Corporate Event Management System</h1>
        <p>Manage and participate in exclusive corporate events, seminars, and more. Stay updated with the latest happenings and make the most of your opportunities!</p>
        <Link to="/events" className="view-events-btn">View Events</Link>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          <div className="event-card">
            <h3>Corporate Seminar 2025</h3>
            <p>Join us for an insightful seminar on innovation in the corporate world. Stay ahead of the curve!</p>
            <button className="event-btn">RSVP Now</button>
          </div>

          <div className="event-card">
            <h3>Leadership Workshop</h3>
            <p>Enhance your leadership skills with expert-led workshops and practical activities.</p>
            <button className="event-btn">RSVP Now</button>
          </div>

          <div className="event-card">
            <h3>Annual Corporate Gala</h3>
            <p>A grand evening to celebrate corporate achievements with industry leaders and executives.</p>
            <button className="event-btn">RSVP Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Corporate Event Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
