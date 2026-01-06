import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RefundsAndSupport = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Refunds and Support</h1>
              <div className="mb-5">
                <h2 className="h4 mb-3">Refund Policy</h2>
                <p className="mb-3">
                  If you are not satisfied with your purchase, we offer a refund
                  within 30 days of your purchase date.
                </p>
                <p className="mb-3">
                  To request a refund, please contact us at{' '}
                  <a href="mailto:support@helio.app">support@helio.app</a> with
                  your purchase details.
                </p>
                <p>
                  Refunds will be processed to the original payment method within
                  5-10 business days.
                </p>
              </div>
              <div className="mb-5">
                <h2 className="h4 mb-3">Support</h2>
                <p className="mb-3">
                  Need help? We're here for you. Our support team is available to
                  assist with any questions or issues you may have.
                </p>
                <p className="mb-3">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@helio.app">support@helio.app</a>
                </p>
                <p className="mb-3">
                  <strong>Response Time:</strong> We aim to respond to all support
                  inquiries within 24-48 hours.
                </p>
                <p>
                  For general questions, you can also visit our{' '}
                  <a href="/contact">Contact</a> page.
                </p>
              </div>
              <div>
                <h2 className="h4 mb-3">Frequently Asked Questions</h2>
                <div className="mb-3">
                  <h5 className="h6">How do I reset my password?</h5>
                  <p className="text-muted">
                    Use the "Forgot Password" link on the login page, or contact
                    support for assistance.
                  </p>
                </div>
                <div className="mb-3">
                  <h5 className="h6">Can I use Helio on multiple devices?</h5>
                  <p className="text-muted">
                    Yes, Helio syncs across all your devices so you can access your
                    data anywhere.
                  </p>
                </div>
                <div>
                  <h5 className="h6">Is my data secure?</h5>
                  <p className="text-muted">
                    Yes, we take data security seriously. Your information is
                    encrypted and stored securely. See our{' '}
                    <a href="/privacy-policy">Privacy Policy</a> for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default RefundsAndSupport

