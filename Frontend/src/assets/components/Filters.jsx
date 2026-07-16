import './Filters.css'

const langages = ['Tous', 'JavaScript', 'Python', 'CSS']

function Filters({ langageActif, onLangage, triActif, onTri }) {
  return (
    <div className="filters">
      <span className="filter-label">Langage :</span>
      {langages.map(lang => (
        <button
          key={lang}
          className={`filter-btn ${langageActif === lang ? 'active' : ''}`}
          onClick={() => onLangage(lang)}
        >
          {lang}
        </button>
      ))}
      <select
        className="sort-select"
        value={triActif}
        onChange={(e) => onTri(e.target.value)}
      >
        <option value="stars">⭐ Plus d'étoiles</option>
        <option value="recent">🕐 Plus récents</option>
      </select>
    </div>
  )
}

export default Filters