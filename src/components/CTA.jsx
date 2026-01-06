import { useState } from 'react'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsValid(true)
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    } else {
      setIsValid(false)
    }
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (e.target.value && !validateEmail(e.target.value)) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }

  return (
    <section id="cta" className="py-5 py-lg-6 section-spacing bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="h3 mb-4">Join the Waitlist</h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="input-group input-group-lg">
                <input
                  type="email"
                  className={`form-control ${!isValid ? 'is-invalid' : ''} ${isSubmitted ? 'is-valid' : ''}`}
                  placeholder="your@email.com"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Join the waitlist
                </button>
              </div>
              {!isValid && (
                <div className="invalid-feedback d-block mt-2">
                  Please enter a valid email address.
                </div>
              )}
              {isSubmitted && (
                <div className="valid-feedback d-block mt-2">
                  Thanks! We'll notify you when Helio is ready.
                </div>
              )}
            </form>
            <p className="text-muted small text-center mb-0">
              No spam. No selling your data. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

