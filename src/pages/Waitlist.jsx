import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { supabase } from '../lib/supabase'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    
    if (validateEmail(email)) {
      setIsValid(true)
      setIsLoading(true)
      
      try {
        if (!supabase) {
          setErrorMessage('Database connection not configured. Please contact support.')
          setIsLoading(false)
          return
        }

        // Insert email into Supabase waitlist table
        const { data, error } = await supabase
          .from('waitlist')
          .insert([{ 
            email: email.toLowerCase().trim(),
            created_at: new Date().toISOString()
          }])
          .select()
        
        if (error) {
          // Check if it's a duplicate email error
          if (error.code === '23505' || error.message.includes('duplicate')) {
            setErrorMessage('This email is already on the waitlist.')
            setIsValid(false)
          } else {
            setErrorMessage('Something went wrong. Please try again later.')
            console.error('Error submitting email:', error)
          }
          setIsLoading(false)
          return
        }
        
        // Success - email stored in database
        // Now invoke the edge function to send welcome email
        try {
          const { data: functionData, error: functionError } = await supabase.functions.invoke('send-waitlist-email', {
            body: { email: email.toLowerCase().trim() },
          })
          
          if (functionError) {
            // Log error but don't fail the submission - email is already in database
            console.error('Error sending welcome email:', functionError)
            console.error('Function error details:', JSON.stringify(functionError, null, 2))
          } else {
            console.log('Welcome email sent successfully:', functionData)
          }
        } catch (functionError) {
          // Log error but don't fail the submission
          console.error('Error invoking email function:', functionError)
          console.error('Function error details:', JSON.stringify(functionError, null, 2))
        }
        
        setIsSubmitted(true)
        setIsLoading(false)
        setTimeout(() => setIsSubmitted(false), 5000)
      } catch (error) {
        console.error('Error submitting email:', error)
        setErrorMessage('Something went wrong. Please try again later.')
        setIsLoading(false)
      }
    } else {
      setIsValid(false)
      setErrorMessage('Please enter a valid email address.')
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
    <>
      <Navbar />
      <section className="waitlist-section py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="waitlist-card">
                <div className="text-center mb-5">
                  <h1 className="display-5 fw-bold mb-3" style={{ color: '#4870b8' }}>
                    Join the Waitlist
                  </h1>
                  <p className="lead text-muted">
                    Be the first to know when Helio launches. We'll notify you as soon as it's ready.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control form-control-lg ${!isValid ? 'is-invalid' : ''} ${isSubmitted ? 'is-valid' : ''}`}
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleChange}
                      required
                      disabled={isLoading || isSubmitted}
                    />
                    {errorMessage && (
                      <div className="invalid-feedback d-block">
                        {errorMessage}
                      </div>
                    )}
                    {!isValid && !errorMessage && (
                      <div className="invalid-feedback">
                        Please enter a valid email address.
                      </div>
                    )}
                    {isSubmitted && (
                      <div className="valid-feedback d-block">
                        ✓ Successfully added to waitlist! We'll be in touch soon.
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className="btn btn-primary btn-lg w-100" 
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    style={{ minHeight: '50px' }}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : isSubmitted ? (
                      '✓ Joined!'
                    ) : (
                      'Join the Waitlist'
                    )}
                  </button>
                </form>
                
                <div className="text-center">
                  <p className="text-muted small mb-0">
                    No spam. No selling your data. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Waitlist

