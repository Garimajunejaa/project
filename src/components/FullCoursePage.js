import React from 'react';
import './CoursePage.css';

const FullCoursePage = () => {
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
        <div className="overview-highlight">
          <div className="highlight-item">
            <h3>100+</h3>
            <p>Mock Tests</p>
          </div>
          <div className="highlight-item">
            <h3>50+</h3>
            <p>Live Sessions</p>
          </div>
          <div className="highlight-item">
            <h3>2000+</h3>
            <p>Practice Questions</p>
          </div>
        </div>
      </section>

      <section className="course-features">
        <h2>Key Features</h2>
        <ul>
          <li>Expert Mentorship</li>
          <li>Regular Mock Tests</li>
          <li>Live Interactive Sessions</li>
          <li>Study Material & Notes</li>
          <li>Performance Analysis</li>
          <li>Personalized Feedback</li>
          <li>Flexible Timings</li>
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

export default FullCoursePage;
