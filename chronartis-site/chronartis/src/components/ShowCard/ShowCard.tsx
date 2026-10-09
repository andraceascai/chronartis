import { Link } from 'react-router-dom';
import type { ArhivaDb } from '../../types/db';
import { categoryInfo, formatDate } from '../../lib/showFormat';
import './ShowCard.css';

interface Props {
  show: ArhivaDb;
}

export default function ShowCard({ show }: Props) {
  // Preferăm slug-ul scris de mână ("id") — dacă lipsește (documente mai
  // vechi, necompletate încă), rămâne _id-ul din Mongo ca rezervă.
  const slug = show.id || show._id;

  return (
    <Link to={`/arhiva/${slug}`} className="show-card" aria-label={`Vezi detalii pentru ${show.titlu}`}>
      <div className="show-card__image-wrap">
        <img src={show.afis} alt={show.titlu} className="show-card__image" loading="lazy" />
        <span className="show-card__category gold-label">{categoryInfo(show.categorie).label}</span>
      </div>
      <div className="show-card__body">
        <h3 className="show-card__title">{show.titlu}</h3>
        <p className="show-card__meta">
          <span>{formatDate(show.data)}</span>
          <span className="show-card__dot">·</span>
          <span>{show.locatie}</span>
        </p>
        <span className="show-card__cta">Vezi Spectacolul →</span>
      </div>
    </Link>
  );
}
