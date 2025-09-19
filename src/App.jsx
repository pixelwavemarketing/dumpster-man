import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import ServiceArea from './pages/ServiceArea.jsx';
import ServiceAreas from './pages/ServiceAreas.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PerformanceMonitor from './components/PerformanceMonitor.jsx';
import SEOOptimizer from './components/SEOOptimizer.jsx';
import StickyCallButton from './components/StickyCallButton.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './styles/buttons.css';
import './styles/layouts.css';
import './styles/navigation.css';
import './styles/mobile.css';
import './styles/sticky-button.css';

function App() {
  useEffect(() => {
    // Prevent duplicate chatbot scripts
    if (window.chatbotLoaded) return;
    
    const script = document.createElement('script');
    script.src = 'https://ai-chatbot-p.netlify.app/embed.js';
    script.setAttribute('data-width', '380px');
    script.setAttribute('data-height', '520px');
    script.setAttribute('data-button-color', '#059669');
    script.setAttribute('data-button-text', 'Ask About Dumpsters');
    script.async = true;
    
    script.onload = () => {
      window.chatbotLoaded = true;
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Don't remove the script on unmount to prevent reload issues
      // The chatbot should persist across route changes
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PerformanceMonitor />
        <SEOOptimizer />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dumpster-sizes" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:area" element={<ServiceArea />} />
          </Routes>
          <Footer />
          <StickyCallButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
