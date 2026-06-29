import { Link } from 'react-router-dom';
import type { PastShow } from '../../types';
import './ShowCard.css';

interface Props {
  show: PastShow;
}

const CATEGORY_LABELS: Record<PastShow['category'], string> = {
  concert: 'Concert',
  opera:   'Operă',
  theater: 'Teatru',
  dance:   'Dans',
  other:   'Eveniment',
};

export default function ShowCard({ show }: Props) {
  return (
    <Link to={`/archive/${show.id}`} className="show-card" aria-label={`Vezi detalii pentru ${show.title}`}>
      <div className="show-card__image-wrap">
        <img src={show.coverImage} alt={show.title} className="show-card__image" loading="lazy" />
        <span className="show-card__category gold-label">{CATEGORY_LABELS[show.category]}</span>
      </div>
      <div className="show-card__body">
        <h3 className="show-card__title">{show.title}</h3>
        <p className="show-card__meta">
          <span>{show.date}</span>
          <span className="show-card__dot">·</span>
          <span>{show.city}</span>
        </p>
        <span className="show-card__cta">Vezi Spectacolul →</span>
      </div>
    </Link>
  );
}
