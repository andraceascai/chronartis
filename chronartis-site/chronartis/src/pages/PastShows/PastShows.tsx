import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ShowCard from '../../components/ShowCard/ShowCard';
import { pastShows } from '../../data/mockData';
import type { ShowCategory } from '../../types';
import './PastShows.css';

const ALL = 'all' as const;
type Filter = typeof ALL | ShowCategory;

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'Toate',   value: 'all' },
  { label: 'Concert', value: 'concert' },
  { label: 'Operă',   value: 'opera' },
  { label: 'Teatru',  value: 'theater' },
  { label: 'Dans',    value: 'dance' },
];

export default function PastShows() {
  const [activeFilter, setActiveFilter] = useState<Filter>(ALL);

  const filtered = activeFilter === ALL
    ? pastShows
    : pastShows.filter(s => s.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="page-wrapper past-shows">
        <div className="container">
          <header className="past-shows__header">
            <p className="gold-label">Arhivă</p>
            <div className="gold-divider" />
            <h1 className="page-title">Spectacole Trecute</h1>
            <p className="past-shows__subtitle">
              O cronică a serilor care au emoționat, provocat și încântat publicul din toată România.
            </p>
          </header>

          <div className="past-shows__filters" role="group" aria-label="Filter by category">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`past-shows__filter-btn ${activeFilter === f.value ? 'past-shows__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="past-shows__grid">
            {filtered.map(show => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="past-shows__empty">Niciun spectacol găsit pentru această categorie.</p>
          )}
        </div>
      </main>
      <PageFooter />
    </>
  );
}

function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Chronartis — Evenimente Culturale</p>
      </div>
    </footer>
  );
}
