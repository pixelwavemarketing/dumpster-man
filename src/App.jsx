import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PerformanceMonitor from './components/PerformanceMonitor.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './styles/buttons.css';
import './styles/layouts.css';
import './styles/navigation.css';
import './styles/mobile.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PerformanceMonitor />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dumpster-sizes" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
