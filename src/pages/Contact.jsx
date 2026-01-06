import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Contact Us</h1>
              <p className="lead mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <p className="mb-4">
                For general inquiries, please reach out to us at{' '}
                <a href="mailto:hello@helio.app">hello@helio.app</a>
              </p>
              <p className="mb-4">
                For support questions, please visit our{' '}
                <a href="/refunds-and-support">Refunds and Support</a> page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact

