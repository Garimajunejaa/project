import React, { useState } from 'react';
import './CrashCourseSection.css';

const CrashCourseSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just mark as submitted
    setSubmitted(true);
  };

  return (
    <section className="crash-course-section">
      <h2>CLAT Crash Course 2026</h2>
      <div className="limited-time-banner">Limited Time Offer!</div>
      <div className="pricing">Price: ₹15,000</div>
      <ul className="features-list">
        <li>2 Classes per Subject</li>
        <li>Expert Mentorship</li>
        <li>Regular Mock Tests</li>
        <li>Interactive Sessions</li>
      </ul>
      <div className="schedule">
        <p><strong>Start Date:</strong> 1st July 2026</p>
        <p><strong>Duration:</strong> 3 Months</p>
      </div>

      {!submitted ? (
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <h3>Register / Inquiry Form</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          Thank you for your inquiry! We will get back to you soon.
        </div>
      )}
    </section>
  );
};

export default CrashCourseSection;
