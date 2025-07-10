import React from 'react';
import './CoursePage.css';

const AdvancedCoursePage = () => {
  return (
    <div className="course-page">
      <nav className="course-nav">
        <a href="/" className="back-link">← Back to Home</a>
      </nav>
      <header className="course-header">
        <h1>CLAT Advanced Course 2026</h1>
        <p>Advanced strategies and practice for top scorers aiming for excellence in CLAT 2026.</p>
      </header>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <p>This course is designed for aspirants who want to master advanced concepts and techniques for CLAT.</p>
      </section>

      <section className="course-features">
        <h2>Key Features</h2>
        <ul>
          <li>Advanced Problem Solving</li>
          <li>Mock Tests with Detailed Analysis</li>
          <li>Expert Mentorship</li>
          <li>Live Interactive Sessions</li>
          <li>Performance Tracking</li>
        </ul>
      </section>

      <section className="course-eligibility">
        <h2>Eligibility & Duration</h2>
        <p>For serious aspirants with basic knowledge. Duration: 5 months.</p>
      </section>

      <section className="course-cta">
        <button className="book-now">Book Now</button>
        <button className="get-call-back">Get a Call Back</button>
      </section>
    </div>
  );
};

export default AdvancedCoursePage;
