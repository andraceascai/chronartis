import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Gallery from '../../components/Gallery/Gallery';
import { pastShows } from '../../data/mockData';
import './ShowDetail.css';

const CATEGORY_LABELS: Record<string, string> = {
  concert: 'Concert',
  opera:   'Operă',
  theater: 'Teatru',
  dance:   'Dans',
  other:   'Eveniment',
};

export default function ShowDetail() {
  const { showId } = useParams<{ showId: string }>();
  const show = pastShows.find(s => s.id === showId);

  if (!show) return <Navigate to="/archive" replace />;

  return (
    <>
      <Navbar />
      <main className="show-detail page-wrapper">

        {/* ─── Hero Image ────────────────────────────────────────── */}
        <div className="show-detail__hero">
          <img src={show.coverImage} alt={show.title} className="show-detail__hero-img" />
          <div className="show-detail__hero-overlay" />
          <div className="show-detail__hero-text container">
            <span className="gold-label">{CATEGORY_LABELS[show.category]}</span>
            <h1 className="show-detail__title">{show.title}</h1>
            <p className="show-detail__meta-hero">
              {show.date} · {show.venue}, {show.city}
            </p>
          </div>
        </div>

        <div className="container show-detail__body">

          {/* ─── Back Link ─────────────────────────────────────────── */}
          <Link to="/archive" className="show-detail__back">
            ← Înapoi la Arhivă
          </Link>

          <div className="show-detail__layout">

            {/* ─── Main Content ───────────────────────────────────── */}
            <article className="show-detail__content">
              <p className="show-detail__description">{show.fullDescription}</p>
            </article>

            {/* ─── Sidebar ────────────────────────────────────────── */}
            <aside className="show-detail__sidebar">
              <div className="show-detail__info-card">
                <h3 className="show-detail__info-heading">Detalii Spectacol</h3>
                <div className="gold-divider" />

                <dl className="show-detail__dl">
                  <dt>Dată</dt>
                  <dd>{show.date}</dd>

                  <dt>Locație</dt>
                  <dd>{show.venue}</dd>

                  <dt>Oraș</dt>
                  <dd>{show.city}</dd>

                  {show.director && (
                    <>
                      <dt>Regizor</dt>
                      <dd>{show.director}</dd>
                    </>
                  )}
                </dl>

                {show.cast && show.cast.length > 0 && (
                  <div className="show-detail__cast">
                    <h4 className="show-detail__cast-heading">Distribuție &amp; Ansamblu</h4>
                    <ul className="show-detail__cast-list">
                      {show.cast.map(member => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* ─── Gallery ──────────────────────────────────────────── */}
          {show.gallery.length > 0 && (
            <section className="show-detail__gallery-section">
              <div className="show-detail__gallery-header">
                <p className="gold-label">Galerie</p>
                <div className="gold-divider" />
                <h2 className="section-title">Fotografii de la Eveniment</h2>
              </div>
              <Gallery items={show.gallery} />
            </section>
          )}

        </div>
      </main>

      <footer className="page-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Chronartis — Evenimente Culturale</p>
        </div>
      </footer>
    </>
  );
}
