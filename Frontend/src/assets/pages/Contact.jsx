import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />

      <section className="contact">
        <p className="section-label">Contact</p>
        <h1>Discutons de ton projet</h1>
        <p className="contact-intro">
          Une question, une suggestion, ou envie de collaborer ?
          Écris-moi un message.
        </p>

        <form className="contact-form">
          <div className="input-group">
            <label>Nom</label>
            <input type="text" placeholder="Ton nom" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="ton@email.com" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Ton message..." rows="5"></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default Contact