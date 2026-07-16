import './RepoCard.css'

const couleurLangage = {
  JavaScript: '#f0b429',
  Python: '#3572a5',
  CSS: '#563d7c'
}

function RepoCard({ repo, isFavori, onToggleFavori }) {
  return (
    <div className={`repo-card ${isFavori ? 'favorited' : ''}`}>
      <div className="card-header">
        <div>
          <div className="repo-name">{repo.name}</div>
          <div className="repo-owner">{repo.owner} / {repo.name}</div>
        </div>
        <button
          className={`fav-btn ${isFavori ? 'on' : ''}`}
          onClick={() => onToggleFavori(repo.id)}
        >
          {isFavori ? '★' : '☆'}
        </button>
      </div>

      <p className="repo-desc">{repo.description}</p>

      <div className="card-footer">
        <span>
          <span
            className="lang-dot"
            style={{ background: couleurLangage[repo.language] }}
          ></span>
          {repo.language}
        </span>
        <span>⭐ {repo.stars.toLocaleString()}</span>
        <span>🍴 {repo.forks.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default RepoCard