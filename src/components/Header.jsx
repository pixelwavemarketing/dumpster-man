import { Link } from 'react-router-dom';
import '../App.css';
import siteConfig from '../config/siteConfig.js';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h1>{siteConfig.company.name}</h1>
          </Link>
        </div>
        <nav className="nav-links">
          {siteConfig.navigation.map((item, index) => (
            <Link key={index} to={item.path}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header; 