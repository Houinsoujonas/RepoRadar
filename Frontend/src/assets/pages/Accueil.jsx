import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Faq from '../components/Faq'
import Connexion from '../components/Connexion'
import Footer from '../components/Footer'

function Accueil() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Connexion />
      <Footer />
    </div>
  )
}

export default Accueil