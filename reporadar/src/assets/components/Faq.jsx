import { useState } from 'react'
import './Faq.css'

const questions = [
  {
    q: "C'est quoi RepoRadar ?",
    r: "RepoRadar est un explorateur de dépôts GitHub tendance. Il te permet de découvrir les projets open-source les plus populaires du moment."
  },
  {
    q: "Les données sont-elles en temps réel ?",
    r: "Pour l'instant les données sont simulées — elles représentent des repos populaires réels mais ne sont pas mises à jour en direct."
  },
  {
    q: "Comment sauvegarder mes favoris ?",
    r: "Clique sur l'étoile ★ sur n'importe quelle carte. Tes favoris sont accessibles depuis la page Favoris dans la navbar."
  },
  {
    q: "C'est gratuit ?",
    r: "Oui, RepoRadar est entièrement gratuit et open-source."
  },
]

function Faq() {
  const [ouvert, setOuvert] = useState(null)

  function toggle(index) {
    setOuvert(ouvert === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <p className="section-label">❓ FAQ</p>
      <h2 className="section-title">Questions fréquentes</h2>
      {questions.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggle(index)}
          >
            {item.q}
            <span>{ouvert === index ? '－' : '＋'}</span>
          </button>
          {ouvert === index && (
            <div className="faq-answer">{item.r}</div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Faq