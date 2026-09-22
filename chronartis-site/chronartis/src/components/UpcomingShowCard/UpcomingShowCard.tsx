import type { SpectacolDb } from '../../types/db';
import './UpcomingShowCard.css';

interface Props {
  show: SpectacolDb;
}

// Categoria vine liberă din baza de date (fără validare la nivel de schemă),
// deci acceptăm orice text și afișăm o etichetă cunoscută dacă o recunoaștem.
const CATEGORY_LABELS: Record<string, string> = {
  concert: 'Concert',
  teatru: 'Teatru',
  theater: 'Teatru',
  eveniment: 'Eveniment',
  opera: 'Operă',
  dans: 'Dans',
  other: 'Eveniment',
};

function categoryLabel(categorie: string) {
  return CATEGORY_LABELS[categorie?.toLowerCase()] ?? categorie;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function UpcomingShowCard({ show }: Props) {
  return (
    <article className="upcoming-card">
      <div className="upcoming-card__image-wrap">
        <img src={show.afis} alt={show.titlu} className="upcoming-card__image" loading="lazy" />
        <span className="upcoming-card__category gold-label">{categoryLabel(show.categorie)}</span>
      </div>

      <div className="upcoming-card__content">
        <h3 className="upcoming-card__title">{show.titlu}</h3>

        <div className="upcoming-card__meta">
          <div className="upcoming-card__meta-item">
            <CalendarIcon />
            <span>{formatDate(show.data)} — ora {show.ora}</span>
          </div>
          <div className="upcoming-card__meta-item">
            <LocationIcon />
            <span>{show.locatie}</span>
          </div>
        </div>

        <div className="gold-divider" />

        <p className="upcoming-card__description">{show.descriere}</p>

        {show.linkuriBilete?.length > 0 && (
          <div className="upcoming-card__tickets">
            <span className="gold-label">Cumpără Bilete</span>
            <div className="upcoming-card__ticket-links">
              {show.linkuriBilete.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  {link.platforma}
                </a>
              ))}
            </div>
          </div>
        )}
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
