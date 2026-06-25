import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Favorites from './assets/pages/Favorites'
import RepoDetail from './assets/pages/RepoDetail'

function App() {
  const [favoris, setFavoris] = useState([])

  function toggleFavori(id) {
    setFavoris(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home favoris={favoris} onToggleFavori={toggleFavori} />} />
        <Route path="/favorites" element={<Favorites favoris={favoris} onToggleFavori={toggleFavori} />} />
        <Route path="/repo/:id" element={<RepoDetail favoris={favoris} onToggleFavori={toggleFavori} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App