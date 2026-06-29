import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './assets/pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App