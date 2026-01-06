import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact-content">
                <h1 className="contact-heading">Contact Us</h1>
                <p className="contact-intro">
                  Have questions or feedback? We'd love to hear from you.
                </p>
                <div className="contact-info">
                  <p className="contact-text">
                    For support questions, please visit our{' '}
                    <a href="/refunds-and-support" className="contact-link">Refunds and Support</a> page.
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

export default Contact

