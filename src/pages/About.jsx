import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">About Helio</h1>
              <p className="lead mb-4">
                Helio is a supplement compliance app designed for real life-missed
                days, travel, and all.
              </p>
              <p className="mb-4">
                We understand that consistency shouldn't feel this hard. That's why
                we built Helio to adapt to how your days actually unfold, so missed
                mornings don't derail weeks of progress.
              </p>
              <p className="mb-4">
                Our mission is to help people stay consistent with their supplements
                without the guilt, shame, or rigid schedules that most apps impose.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About

