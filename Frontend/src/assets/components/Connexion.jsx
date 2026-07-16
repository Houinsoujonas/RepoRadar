import { useState } from 'react'
import './Connexion.css'

function Connexion() {
  const [mode, setMode] = useState('login')

  return (
    <section className="connexion" id="connexion">
      <p className="section-label">🔐 Accès</p>

      <div className="connexion-box">
        <div className="tabs">
          <button
            className={mode === 'login' ? 'tab active' : 'tab'}
            onClick={() => setMode('login')}
          >
            Connexion
          </button>
          <button
            className={mode === 'signup' ? 'tab active' : 'tab'}
            onClick={() => setMode('signup')}
          >
            Créer un compte
          </button>
        </div>

        {mode === 'login' ? (
          <div>
            <p className="connexion-desc">Connecte-toi pour accéder à tes favoris</p>
            <div className="input-group">
              <input type="email" placeholder="Ton adresse email ou numéro de téléphone" />
              <input type="password" placeholder="Ton mot de passe" />
            </div>
            <button className="btn-connexion">Se connecter</button>
          </div>
        ) : (
          <div>
            <p className="connexion-desc">Crée ton compte gratuitement</p>
            <div className="input-group">
              <input type="text" placeholder="Ton nom" />
              <input type="email" placeholder="Ton adresse email ou numéro de téléphone" />
              <input type="password" placeholder="Choisis un mot de passe" />
            </div>
            <button className="btn-connexion">Créer mon compte</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Connexion