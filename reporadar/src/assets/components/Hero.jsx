import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="badge"> GitHub Trending — Open Source</div>
      <h1>
        Découvre les repos<br />
        <span className="blue">qui montent en flèche</span>
      </h1>
      <p>
        RepoRadar te permet d'explorer les projets open-source 
        les plus populaires, de filtrer par langage et de garder 
        tes favoris en un clic.
      </p>
      <div className="hero-btns">
        <a href="#connexion" className="btn-primary">
          Commencer gratuitement
        </a>
        <a href="#features" className="btn-secondary">
          Voir les fonctionnalités
        </a>
      </div>
    </section>
  )
}

export default Hero