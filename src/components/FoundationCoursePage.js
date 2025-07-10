import React from 'react';
import './CoursePage.css';

const FoundationCoursePage = () => {
  return (
    <div className="course-page">
      <nav className="course-nav">
        <a href="/" className="back-link">← Back to Home</a>
      </nav>
      <header className="course-header">
        <h1>CLAT Foundation Course 2026</h1>
        <p>Build a strong foundation for CLAT 2026 with expert guidance and practice.</p>
      </header>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <p>This course focuses on building basics and fundamentals required for CLAT.</p>
      </section>

      <section className="course-features">
        <h2>Key Features</h2>
        <ul>
          <li>Conceptual Clarity</li>
          <li>Regular Practice Tests</li>
          <li>Interactive Sessions</li>
          <li>Study Material & Notes</li>
          <li>Mentorship Support</li>
        </ul>
      </section>

      <section className="course-eligibility">
        <h2>Eligibility & Duration</h2>
        <p>Open to beginners. Duration: 4 months.</p>
      </section>

      <section className="course-cta">
        <button className="book-now">Book Now</button>
        <button className="get-call-back">Get a Call Back</button>
      </section>
    </div>
  );
};

export default FoundationCoursePage;
