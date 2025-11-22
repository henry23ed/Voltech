import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LearnmorePage from './pages/LearnmorePage';

function App() {
  return (
    <Router>
      {/* Ensure hash-based URL triggers navigation on mount */}
      <HashRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/learnmore" element={<LearnmorePage />} />
      </Routes>
    </Router>
  );
}

function HashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash || '';
    // Expecting format '#/path'
    if (hash.startsWith('#/')) {
      const path = hash.slice(1); // '/path'
      // navigate to the path so routes render correctly
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default App;
