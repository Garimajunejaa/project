import React from 'react';
import './CoursePage.css';

const CoursePage = () => {
  return (
    <div className="course-page">
      <nav className="course-nav">
        <a href="/" className="back-link">← Back to Home</a>
      </nav>
      <header className="course-header">
        <h1>CLAT Full Course 2026</h1>
        <p>Comprehensive preparation for CLAT 2026 with mentorship, mocks, and live sessions.</p>
      </header>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <p>This course covers all subjects required for CLAT with expert guidance and practice tests.</p>
      </section>

      <section className="course-features">
        <h2>Key Features</h2>
        <ul>
          <li>Expert Mentorship</li>
          <li>Regular Mock Tests</li>
          <li>Live Interactive Sessions</li>
          <li>Study Material & Notes</li>
          <li>Performance Analysis</li>
        </ul>
      </section>

      <section className="course-eligibility">
        <h2>Eligibility & Duration</h2>
        <p>Open to all aspirants. Duration: 6 months.</p>
      </section>

      <section className="course-cta">
        <button className="book-now">Book Now</button>
        <button className="get-call-back">Get a Call Back</button>
      </section>
    </div>
  );
};

export default CoursePage;
