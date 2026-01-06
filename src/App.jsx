import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingAlt from './pages/LandingAlt'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import RefundsAndSupport from './pages/RefundsAndSupport'
import Waitlist from './pages/Waitlist'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-alt" element={<LandingAlt />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refunds-and-support" element={<RefundsAndSupport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

