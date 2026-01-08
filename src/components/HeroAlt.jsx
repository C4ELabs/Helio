import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/Hero_Image_2.png'

const HeroAlt = () => {
  const [shouldLoadImage, setShouldLoadImage] = useState(false)
  const imageContainerRef = useRef(null)

  // Lazy load background image when it comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadImage(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '100px' }
    )

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current)
    }

    // Fallback: load after delay if not in viewport quickly
    const timer = setTimeout(() => {
      setShouldLoadImage(true)
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="hero-alt-section">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Left: Text */}
          <div className="col-12 col-lg-6">
            <div className="hero-alt-content-wrapper">
              <h1 className="hero-alt-heading">
                Consistency shouldn't<br />feel this hard.
              </h1>
              <div className="hero-alt-text-content">
                <p>
                  HelioCoach is a supplement compliance app designed for real life - missed days, travel, and all.
                </p>
                <p className="fw-medium">
                  You're not broken. Most tools just aren't built <br />for reality.
                </p>
              </div>
              <div className="hero-alt-cta-section">
                <Link
                  to="/waitlist"
                  className="btn btn-primary hero-alt-btn"
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
              ref={imageContainerRef}
              className={`hero-alt-image ${shouldLoadImage ? 'hero-alt-image-loaded' : 'hero-alt-image-placeholder'}`}
              style={shouldLoadImage ? { 
                '--hero-image-url': `url(${heroImage})`
              } : undefined}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAlt

