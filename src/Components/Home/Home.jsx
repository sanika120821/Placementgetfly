import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Placement Portal</h1>
        <p>Your gateway to a successful career</p>
      </div>

      <div className="intro-section">
        <h2>About Us</h2>
        <p>
          Placement Portal is designed to connect students with top employers and help them find their dream jobs. Our platform provides a comprehensive solution for job searching, application tracking, and career resources.
        </p>
      </div>

      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Job Listings</h3>
            <p>Explore a wide range of job opportunities from various companies across different industries.</p>
          </div>
          <div className="feature">
            <h3>Application Tracking</h3>
            <p>Keep track of your job applications and stay updated on their status through our user-friendly dashboard.</p>
          </div>
          <div className="feature">
            <h3>Career Resources</h3>
            <p>Access valuable resources including resume tips, interview preparation, and career advice to help you succeed.</p>
          </div>
          <div className="feature">
            <h3>Notifications</h3>
            <p>Receive timely notifications about new job postings, interview schedules, and important updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
