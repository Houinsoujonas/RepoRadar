import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⭐ <span>Repo</span>Radar
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/repos">Explorer</Link></li>
      </ul>
      <a href="/#connexion" className="btn-nav">
        Commencer
      </a>
    </nav>
  )
}

export default Navbar