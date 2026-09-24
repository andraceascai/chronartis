import { useState } from 'react';
import type { SpectacolDb } from '../../types/db';
import { categoryInfo, formatDate } from '../../lib/showFormat';
import ImageLightbox from '../ImageLightbox/ImageLightbox';
import './UpcomingShowCard.css';

interface Props {
  show: SpectacolDb;
}

export default function UpcomingShowCard({ show }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <article className="upcoming-card">
      <button
        type="button"
        className="upcoming-card__image-wrap"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Vezi afișul mărit pentru ${show.titlu}`}
      >
        <img src={show.afis} alt={show.titlu} className="upcoming-card__image" loading="lazy" />
        <span className="upcoming-card__category gold-label">{categoryInfo(show.categorie).label}</span>
        <span className="upcoming-card__zoom-hint" aria-hidden="true">
          <ZoomIcon />
        </span>
      </button>

      {lightboxOpen && (
        <ImageLightbox
          src={show.afis}
          alt={show.titlu}
          onClose={() => setLightboxOpen(false)}
        />
      )}

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

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="20" y2="20" />
      <line x1="10.5" y1="7.5" x2="10.5" y2="13.5" />
      <line x1="7.5" y1="10.5" x2="13.5" y2="10.5" />
    </svg>
  );
}
