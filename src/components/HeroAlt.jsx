import { Link } from 'react-router-dom'
import heroImage from '../assets/images/Hero_Image_2.png'

const HeroAlt = () => {
  return (
    <section className="hero-alt-section">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Left: Text */}
          <div className="col-12 col-lg-6">
            <div className="hero-alt-content-wrapper">
              <h1 className="hero-alt-heading">
                Consistency shouldn't feel this hard.
              </h1>
              <div className="hero-alt-text-content">
                <p className="mb-2">
                  HelioCoach is a supplement compliance app designed for real life - missed days, travel, and all.
                </p>
                <p className="mb-0 fw-medium">
                  You're not broken. Most tools just aren't built for reality.
                </p>
              </div>
              <div className="hero-alt-cta-section">
                <Link
                  to="/waitlist"
                  className="btn btn-primary hero-alt-btn mb-2"
                >
                  Join the waitlist
                </Link>
                <p className="hero-alt-microcopy mb-0">
                  No spam. Early access when we launch.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image - extends to edge */}
          <div className="col-12 col-lg-6 p-0">
            <div 
              className="hero-alt-image"
              style={{ 
                '--hero-image-url': `url(${heroImage})`
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAlt

