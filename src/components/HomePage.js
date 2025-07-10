import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import CrashCourseSection from './CrashCourseSection';

const coursesData = [
  {
    id: 1,
    title: 'CLAT Full Course 2026',
    description: 'Comprehensive preparation for CLAT 2026 with mentorship, mocks, and live sessions.',
    price: '₹30,000',
    route: '/full-course'
  },
  {
    id: 2,
    title: 'CLAT Foundation Course',
    description: 'Build your basics strong with our foundation course.',
    price: '₹20,000',
    route: '/foundation-course'
  },
  {
    id: 3,
    title: 'CLAT Advanced Course',
    description: 'Advanced strategies and practice for top scorers.',
    price: '₹25,000',
    route: '/advanced-course'
  },
];

const demoVideosData = [
  {
    id: 1,
    title: 'Demo Class 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Demo Class 2',
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
];

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    feedback: 'This course helped me crack CLAT with excellent scores!',
  },
  {
    id: 2,
    name: 'Anita Desai',
    feedback: 'The mentorship and mock tests were very helpful.',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    feedback: 'Highly recommend CLAT NLTI for serious aspirants.',
  },
];

const HomePage = () => {
  const [modalVideo, setModalVideo] = useState(null);
  const navigate = useNavigate();

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  const handleCourseClick = (route) => {
    navigate(route);
  };

  return (
    <div className="homepage">
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">CLAT NLTI</div>
          <ul className="nav-links">
            <li><a href="/#courses">Courses</a></li>
            <li><a href="/#crash-course">Crash Course 2026</a></li>
            <li><a href="/#demo-videos">Demo Videos</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><a href="/#contact">Contact</a></li>
           
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Welcome to CLAT NLTI</h1>
          <p>Your gateway to success in CLAT 2026</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section id="courses" className="courses-section">
        <h2>Our Courses</h2>
        <p>Explore our comprehensive courses designed to help you excel.</p>
        <div className="course-cards">
          {coursesData.map(course => (
            <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.route)} style={{cursor: 'pointer'}}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-price">{course.price}</div>
              <button className="enroll-button">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      <section id="crash-course" className="crash-course-section">
        <CrashCourseSection />
      </section>

      <section id="demo-videos" className="demo-videos-section">
        <h2>Demo Videos</h2>
        <p>Watch our demo classes to get a feel of our teaching style.</p>
        <div className="demo-videos-grid">
          {demoVideosData.map(video => (
            <div key={video.id} className="demo-video-card" onClick={() => openModal(video.videoUrl)}>
              <div className="video-thumbnail">
                <img src={`https://img.youtube.com/vi/${video.videoUrl.split('/').pop()}/0.jpg`} alt={video.title} />
                <div className="play-button">&#9658;</div>
              </div>
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
        {modalVideo && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <iframe
                width="560"
                height="315"
                src={modalVideo}
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="modal-close" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2>Student Testimonials</h2>
        <p>Hear from our successful students.</p>
        <div className="testimonial-slider">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <h2>Contact Us</h2>
        <p>Contact us for more information and registration.</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </footer>
    </div>
  );
};

export default HomePage;
