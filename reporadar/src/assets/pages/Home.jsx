import { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RepoCard from '../components/RepoCard'
import repos from '../data/repos'
import './Home.css'

function Home({ favoris, onToggleFavori }) {
  const [recherche, setRecherche] = useState('')
  const [langageActif, setLangageActif] = useState('Tous')
  const [tri, setTri] = useState('stars')

  const reposFiltres = repos
    .filter(r => langageActif === 'Tous' || r.language === langageActif)
    .filter(r => r.name.toLowerCase().includes(recherche.toLowerCase()))
    .sort((a, b) => tri === 'stars' ? b.stars - a.stars : new Date(b.updatedAt) - new Date(a.updatedAt))

  return (
    <div className="home">
      <Navbar favCount={favoris.length} />

      <section className="hero">
        <div className="hero-badge">🔥 GitHub Trending — simulé</div>
        <h1>Découvre les repos<br /><span className="blue">qui montent</span></h1>
        <p>Explore les projets open-source les plus populaires, filtre par langage et garde tes favoris.</p>
      </section>

      <div className="controls">
        <SearchBar value={recherche} onChange={setRecherche} />
        <Filters
          langageActif={langageActif}
          onLangage={setLangageActif}
          triActif={tri}
          onTri={setTri}
        />
      </div>

      <p className="count-label">{reposFiltres.length} repos trouvés</p>

      <div className="repos-grid">
        {reposFiltres.map(repo => (
          <RepoCard
            key={repo.id}
            repo={repo}
            isFavori={favoris.includes(repo.id)}
            onToggleFavori={onToggleFavori}
          />
        ))}
      </div>
    </div>
  )
}

export default Home