import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
