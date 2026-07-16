import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import RepoCard from '../components/RepoCard'
import repos from '../../data/repos'
import './Repos.css'

function Repos() {
  const [recherche, setRecherche] = useState('')
  const [langageActif, setLangageActif] = useState('Tous')
  const [tri, setTri] = useState('stars')
  const [favoris, setFavoris] = useState([])

  function toggleFavori(id) {
    setFavoris(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const reposFiltres = repos
    .filter(r => langageActif === 'Tous' || r.language === langageActif)
    .filter(r => r.name.toLowerCase().includes(recherche.toLowerCase()))
    .sort((a, b) =>
      tri === 'stars'
        ? b.stars - a.stars
        : new Date(b.updatedAt) - new Date(a.updatedAt)
    )

  return (
    <div>
      <Navbar />

      <section className="repos-page">
        <p className="section-label">GitHub Trending</p>
        <h1>Découvre les repos qui montent</h1>

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
              onToggleFavori={toggleFavori}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Repos