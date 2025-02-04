import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="header">
      <h1 style={{
        color: 'white',
        fontSize: '24px',
        margin: '0',
        padding: '0'
      }}>THE DUMPSTER MAN</h1>
      <div className="nav-links">
        <a href="/" className="nav-link">HOME</a>
        <a href="/sizes" className="nav-link">SIZES</a>
        <a href="/contact" className="nav-link">CONTACT</a>
      </div>
    </div>
  )
}

export default Navigation 