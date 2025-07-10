import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FullCoursePage from './components/FullCoursePage';
import FoundationCoursePage from './components/FoundationCoursePage';
import AdvancedCoursePage from './components/AdvancedCoursePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/full-course" element={<FullCoursePage />} />
          <Route path="/foundation-course" element={<FoundationCoursePage />} />
          <Route path="/advanced-course" element={<AdvancedCoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
