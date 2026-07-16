import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Apropos.css'

function Apropos() {
  return (
    <div>
      <Navbar />

      <section className="apropos">
        <p className="section-label">À propos</p>
        <h1>L'histoire derrière RepoRadar</h1>
        <p className="apropos-intro">
          RepoRadar est né d'une envie simple : rendre la découverte
          de projets open-source plus rapide et plus agréable.
        </p>

        <div className="apropos-content">
          <h2>Le projet</h2>
          <p>
            RepoRadar est un projet personnel développé dans le cadre
            de ma formation en développement web. L'objectif
            est de créer un explorateur de dépôts GitHub tendance, avec
            des filtres, une recherche, et un système de favoris.
          </p>

          <h2>Les technologies</h2>
          <p>
            Ce projet est construit avec React pour le frontend, et
            Node.js + Express + MongoDB pour le backend. C'est l'occasion
            pour moi d'apprendre le routing, la gestion d'état, et la
            connexion à une base de données.
          </p>

          <h2>Le développeur</h2>
          <p>
            Je m'appelle HOUINSOU Jonas, étudiant en développement web .
             Je construis ce projet pas à pas, en apprenant chaque notion au fur et à mesure.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Apropos