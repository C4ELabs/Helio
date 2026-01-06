import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Blog</h1>
              <p className="lead">
                Our blog is coming soon. Check back for articles about supplement
                consistency, habit formation, and wellness tips.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Blog

