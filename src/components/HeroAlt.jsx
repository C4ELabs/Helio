import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/Hero_Image_2.png'

const HeroAlt = () => {
  const [shouldLoadImage, setShouldLoadImage] = useState(false)
  const [isAppleDevice, setIsAppleDevice] = useState(false)
  const imageContainerRef = useRef(null)
  const sectionRef = useRef(null)

  // Detect Apple devices on mount
  useEffect(() => {
    if (typeof navigator === 'undefined') return
    
    const userAgent = navigator.userAgent || ''
    const platform = navigator.platform || ''
    const vendor = navigator.vendor || ''
    
    // Check multiple indicators
    const checks = [
      /Mac|iPhone|iPad|iPod/i.test(userAgent),
      /Mac|iPhone|iPad|iPod/i.test(platform),
      /MacIntel|MacPPC|Mac68K/i.test(platform),
      /Apple/i.test(vendor),
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Mac/i.test(platform))
    ]
    
    const isApple = checks.some(check => check === true)
    
    console.log('🔍 Device detection:', {
      userAgent,
      platform,
      vendor,
      maxTouchPoints: navigator.maxTouchPoints,
      isApple,
      checks
    })
    
    setIsAppleDevice(isApple)
    
    // Apply class immediately
    if (sectionRef.current) {
      if (isApple) {
        sectionRef.current.classList.add('apple-device')
        sectionRef.current.setAttribute('data-apple-device', 'true')
        console.log('✅ Apple device class applied to section element')
        console.log('✅ Section classes:', sectionRef.current.className)
        console.log('✅ Section data-attr:', sectionRef.current.getAttribute('data-apple-device'))
      } else {
        sectionRef.current.classList.remove('apple-device')
        sectionRef.current.removeAttribute('data-apple-device')
        console.log('❌ Not an Apple device - class removed')
      }
    }
  }, [])

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
    <section ref={sectionRef} className={`hero-alt-section${isAppleDevice ? ' apple-device' : ''}`}>
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
                  HelioCoach is a supplement compliance app designed for real life - missed days, travel, and all. You're not broken. Most tools just aren't built for reality.
                </p>
              </div>
              <div className="hero-alt-cta-section">
                <Link
                  to="/waitlist"
                  className="btn join-waitlist-btn hero-alt-btn"
                >
                  Join Waitlist
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

