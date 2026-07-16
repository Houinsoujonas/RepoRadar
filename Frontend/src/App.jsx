import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './assets/pages/Accueil'
import Apropos from './assets/pages/Apropos'
import Contact from './assets/pages/Contact'
import Repos from './assets/pages/Repos'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/repos" element={<Repos />} />
        R
      </Routes>
    </BrowserRouter>
  )
}

export default App