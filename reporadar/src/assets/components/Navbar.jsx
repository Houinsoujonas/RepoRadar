import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Repo</span>Radar
      </div>
      <ul className="nav-links">
        <li><a href="#features">Fonctionnalités</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#connexion">Connexion</a></li>
      </ul>
      <a href="#connexion" className="btn-nav">
        Commencer →
      </a>
    </nav>
  )
}

export default Navbar