import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h1 className="display-1 fw-bold mb-4">404</h1>
              <h2 className="h3 mb-4">Page Not Found</h2>
              <p className="lead mb-4">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound

