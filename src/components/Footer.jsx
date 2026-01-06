import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section mt-auto">
      <div className="container">
        <div className="row g-4 g-lg-5 mb-4">
          <div className="col-md-6">
            <h5 className="footer-heading mb-3">Explore</h5>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/blog" className="footer-link">
                Blog
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="footer-heading mb-3">Resources</h5>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="footer-link">
                Terms of Use
              </Link>
              <Link to="/refunds-and-support" className="footer-link">
                Refunds and Support
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-copyright">
              &copy; {currentYear} Helio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

