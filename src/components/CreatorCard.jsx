import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <article className="creator-card">
      {creator.imageURL && (
        <div className="creator-image-container">
          <img 
            src={creator.imageURL} 
            alt={creator.name}
            className="creator-image"
          />
        </div>
      )}
      <div className="creator-content">
        <h3 className="creator-name">{creator.name}</h3>
        <div className="creator-actions">
          <Link to={`/creators/${creator.id}`}>
            <button className="icon-button" aria-label="View details">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </Link>
          <Link to={`/edit/${creator.id}`}>
            <button className="icon-button" aria-label="Edit creator">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
