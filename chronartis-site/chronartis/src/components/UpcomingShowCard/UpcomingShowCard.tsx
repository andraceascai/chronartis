import type { UpcomingShow } from '../../types';
import './UpcomingShowCard.css';

interface Props {
  show: UpcomingShow;
}

const CATEGORY_LABELS: Record<UpcomingShow['category'], string> = {
  concert: 'Concert',
  opera:   'Operă',
  theater: 'Teatru',
  dance:   'Dans',
  other:   'Eveniment',
};

export default function UpcomingShowCard({ show }: Props) {
  return (
    <article className="upcoming-card">
      <div className="upcoming-card__image-wrap">
        <img src={show.coverImage} alt={show.title} className="upcoming-card__image" loading="lazy" />
        <span className="upcoming-card__category gold-label">{CATEGORY_LABELS[show.category]}</span>
      </div>

      <div className="upcoming-card__content">
        <h3 className="upcoming-card__title">{show.title}</h3>

        <div className="upcoming-card__meta">
          <div className="upcoming-card__meta-item">
            <CalendarIcon />
            <span>{show.date} — {show.time}</span>
          </div>
          <div className="upcoming-card__meta-item">
            <LocationIcon />
            <span>{show.venue}, {show.city}</span>
          </div>
        </div>

        <div className="gold-divider" />

        <p className="upcoming-card__description">{show.description}</p>

        <div className="upcoming-card__tickets">
          <span className="gold-label">Cumpără Bilete</span>
          <div className="upcoming-card__ticket-links">
            {show.ticketLinks.map(link => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
