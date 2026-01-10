import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const location = useLocation()
  const isWaitlistPage = location.pathname === '/waitlist'
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white ${isWaitlistPage ? 'navbar-waitlist-page' : ''}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="HelioCoach" className="me-2" />
          <span style={{ color: '#496fb6' }}>HelioCoach</span>
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
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link 
                className="btn join-waitlist-btn" 
                to="/waitlist"
              >
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

