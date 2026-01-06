import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Helio" className="me-2" />
          <span>Helio</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/#features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#testimonials">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/waitlist">
                Join Waitlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

