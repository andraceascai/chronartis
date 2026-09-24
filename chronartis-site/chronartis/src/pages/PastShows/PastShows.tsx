import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ShowCard from '../../components/ShowCard/ShowCard';
import { api } from '../../lib/api';
import { categoryInfo, type CategoryKey } from '../../lib/showFormat';
import type { ArhivaDb } from '../../types/db';
import './PastShows.css';

const ALL = 'all' as const;
type Filter = typeof ALL | CategoryKey;

const FILTERS: { label: string; value: Filter }[] = [
  { label: "Toate", value: "all" },
  { label: "Concert", value: "concert" },
  { label: "Evenimente", value: "eveniment" },
  { label: "Teatru", value: "theater" },
];

type Status = 'loading' | 'ready' | 'error';

export default function PastShows() {
  const [activeFilter, setActiveFilter] = useState<Filter>(ALL);
  const [shows, setShows] = useState<ArhivaDb[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let cancelled = false;

    api
      .get<ArhivaDb[]>('/arhiva')
      .then((res) => {
        if (!cancelled) {
          setShows(res.data);
          setStatus('ready');
        }
      })
      .catch((error) => {
        console.error('Eroare la citirea arhivei:', error);
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = activeFilter === ALL
    ? shows
    : shows.filter(s => categoryInfo(s.categorie).key === activeFilter);

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

          {status === 'error' && (
            <p className="past-shows__empty">
              Nu am putut încărca arhiva. Încearcă din nou puțin mai târziu.
            </p>
          )}

          <div className="past-shows__grid">
            {filtered.map(show => (
              <ShowCard key={show._id} show={show} />
            ))}
          </div>

          {status === 'ready' && filtered.length === 0 && (
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
