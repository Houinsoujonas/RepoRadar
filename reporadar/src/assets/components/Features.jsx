import './Features.css'

const liste = [
  {
    icon: '🔍',
    titre: 'Recherche rapide',
    desc: 'Trouve n\'importe quel repo en tapant son nom. Résultats instantanés.'
  },
  {
    icon: '🏷️',
    titre: 'Filtre par langage',
    desc: 'Filtre les repos par JavaScript, Python, CSS et bien d\'autres langages.'
  },
  {
    icon: '⭐',
    titre: 'Tes favoris',
    desc: 'Marque les repos qui t\'intéressent et retrouve-les en un clic.'
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <p className="section-label">Fonctionnalités</p>
      <h2 className="section-title">Tout ce dont tu as besoin</h2>
      <div className="features-grid">
        {liste.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.titre}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features