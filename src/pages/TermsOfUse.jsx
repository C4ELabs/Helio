import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Terms of Use</h1>
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <div className="mb-4">
                <h2 className="h4 mb-3">Acceptance of Terms</h2>
                <p>
                  By accessing and using Helio, you accept and agree to be bound by
                  the terms and provision of this agreement.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Use License</h2>
                <p>
                  Permission is granted to temporarily use Helio for personal,
                  non-commercial purposes. This is the grant of a license, not a
                  transfer of title.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Disclaimer</h2>
                <p>
                  The materials on Helio are provided on an 'as is' basis. Helio
                  makes no warranties, expressed or implied, and hereby disclaims
                  and negates all other warranties.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="h4 mb-3">Limitations</h2>
                <p>
                  In no event shall Helio or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit,
                  or due to business interruption) arising out of the use or
                  inability to use Helio.
                </p>
              </div>
              <p className="text-muted small">
                This is a placeholder terms of use document. Complete terms will be
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

export default TermsOfUse

