import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DumpsterSizes from './pages/Services'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'

function App() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <header className="header">
          <nav className="nav-container">
            <div className="nav-content">
              <div className="logo">The Dumpster Man</div>
              <ul className="nav-links">
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/sizes" onClick={handleLinkClick}>Dumpster Sizes</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sizes" element={<DumpsterSizes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">The Dumpster Man</h3>
              <p>Your trusted waste management solution based out of Mechanicville, NY</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="contact-links">
                <a href="tel:+15189202618" className="footer-link">
                  <span className="icon">📞</span> (518) 920-2618
                </a>
                <a href="mailto:thedumpsterman01@gmail.com" className="footer-link">
                  <span className="icon">✉️</span> TheDumpsterMan01@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <nav className="footer-nav">
                <Link to="/" onClick={handleLinkClick} className="footer-link">Home</Link>
                <Link to="/sizes" onClick={handleLinkClick} className="footer-link">Dumpster Sizes</Link>
                <Link to="/contact" onClick={handleLinkClick} className="footer-link">Contact</Link>
              </nav>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">© 2024 The Dumpster Man. All rights reserved.</p>
            <p className="built-by">
              Built by <a href="https://www.usepixelwave.com" target="_blank" rel="noopener noreferrer">Pixelwave Marketing</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
