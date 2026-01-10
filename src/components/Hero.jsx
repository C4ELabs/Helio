import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/Suppliments image.jpeg'

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [shouldLoadImage, setShouldLoadImage] = useState(false)
  const imageRef = useRef(null)
  
  const imageSrc = heroImage

  // Lazy load image when it comes into viewport or after initial render
  useEffect(() => {
    // Load image after a short delay to prioritize essential content
    const timer = setTimeout(() => {
      setShouldLoadImage(true)
    }, 100)

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadImage(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="hero-section-main">
      <div className="container">
        <div className="row justify-content-center align-items-center hero-row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="hero-content-wrapper">
              <h1 className="hero-heading fw-bold" style={{ color: '#ffffff' }}>
                Consistency shouldn't feel this hard.
              </h1>
              <p className="hero-subtext" style={{ color: '#ffffff' }}>
                HelioCoach is a supplement compliance app designed for real life - missed days, travel, and all.
              </p>
              <Link
                to="/waitlist"
                className="btn join-waitlist-btn"
              >
                Join Waitlist
              </Link>
              <p className="hero-microcopy">
                You're not broken. Most tools just aren't built for reality.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="hero-image-wrapper" ref={imageRef}>
              {shouldLoadImage && imageSrc && !imageError ? (
                <img
                  src={imageSrc}
                  alt="Supplements in glass containers"
                  className={`img-fluid rounded hero-image ${imageLoaded ? 'hero-image-loaded' : 'hero-image-loading'}`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
              <div
                className="d-flex align-items-center justify-content-center rounded hero-image"
                style={{
                  width: '100%',
                  minHeight: '400px',
                  backgroundColor: '#e8ecf5',
                  color: '#496fb6',
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
