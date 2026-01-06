import { useState } from 'react'
import heroImage from '../assets/images/Suppliments image.jpeg'

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  
  const imageSrc = heroImage

  const scrollToCTA = (e) => {
    e.preventDefault()
    const ctaSection = document.getElementById('cta')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-5 py-lg-6 section-spacing bg-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#000000' }}>
              Stay consistent with supplements-even when routines change.
            </h1>
            <p className="lead mb-4" style={{ color: '#000000' }}>
              Helio adapts to how your days actually unfold, so missed mornings
              don't derail weeks of progress.
            </p>
            <button
              onClick={scrollToCTA}
              className="btn btn-primary btn-lg mb-3"
              style={{ minWidth: '200px' }}
            >
              Join the waitlist
            </button>
            <p className="text-muted small mt-3">
              You're not broken. Most tools just aren't built for reality.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              {imageSrc && !imageError ? (
                <img
                  src={imageSrc}
                  alt="Supplements in glass containers"
                  className="img-fluid rounded hero-image"
                  onError={() => setImageError(true)}
                />
              ) : (
              <div
                className="d-flex align-items-center justify-content-center rounded hero-image"
                style={{
                  width: '100%',
                  minHeight: '400px',
                  backgroundColor: '#efe2e7',
                  color: '#9b4b65',
                  fontSize: '14px',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <div>
                  <p className="mb-2 fw-semibold">Hero Image Placeholder</p>
                  <p className="mb-0 small">
                    Add hero-herbs.jpg (herbs and olive oil in glass containers) to src/assets/images/
                  </p>
                  <p className="mb-0 small mt-2 text-muted">
                    Then uncomment the import statement at the top of this file
                  </p>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
