import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Privacy Policy</h1>
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <div className="mb-4">
                <h2 className="h4 mb-3">Introduction</h2>
                <p>
                  At Helio, we are committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard your
                  information when you use our application.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as
                  when you create an account, use our services, or contact us for
                  support.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve
                  our services, and to communicate with you about your account and
                  our services.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information at any time. You can also opt out of certain
                  communications from us.
                </p>
              </div>
              <p className="text-muted small">
                This is a placeholder privacy policy. A complete policy will be
                provided when Helio launches.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

