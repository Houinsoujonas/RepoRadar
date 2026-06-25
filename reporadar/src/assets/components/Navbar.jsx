import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ favCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ⭐ <span>Repo</span>Radar
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Tendance</Link></li>
        <li>
          <Link to="/favorites">
            Favoris {favCount > 0 && <span className="fav-count">{favCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar