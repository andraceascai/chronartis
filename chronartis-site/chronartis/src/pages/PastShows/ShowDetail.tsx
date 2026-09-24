import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Gallery from '../../components/Gallery/Gallery';
import { api } from '../../lib/api';
import { categoryInfo, formatDate } from '../../lib/showFormat';
import type { ArhivaDb } from '../../types/db';
import './ShowDetail.css';

type Status = 'loading' | 'ready' | 'error';

export default function ShowDetail() {
  const { showId } = useParams<{ showId: string }>();
  const [show, setShow] = useState<ArhivaDb | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setShow(null);

    api
      .get<ArhivaDb>(`/arhiva/${showId}`)
      .then((res) => {
        if (!cancelled) {
          setShow(res.data);
          setStatus('ready');
        }
      })
      .catch((error) => {
        console.error('Eroare la citirea spectacolului:', error);
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [showId]);

  if (status === 'error') return <Navigate to="/archive" replace />;
  if (!show) return null;

  const gallery = show.galerie.map((item, idx) => ({
    id: item._id ?? String(idx),
    type: item.tip,
    url: item.url,
    caption: item.descriere,
  }));

  return (
    <>
      <Navbar />
      <main className="show-detail page-wrapper">

        {/* ─── Hero Image ────────────────────────────────────────── */}
        <div className="show-detail__hero">
          <img src={show.afis} alt={show.titlu} className="show-detail__hero-img" />
          <div className="show-detail__hero-overlay" />
          <div className="show-detail__hero-text container">
            <span className="gold-label">{categoryInfo(show.categorie).label}</span>
            <h1 className="show-detail__title">{show.titlu}</h1>
            <p className="show-detail__meta-hero">
              {formatDate(show.data)} · {show.locatie}, {show.oras}
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
              <p className="show-detail__description">{show.descriere}</p>
            </article>

            {/* ─── Sidebar ────────────────────────────────────────── */}
            <aside className="show-detail__sidebar">
              <div className="show-detail__info-card">
                <h3 className="show-detail__info-heading">Detalii Spectacol</h3>
                <div className="gold-divider" />

                <dl className="show-detail__dl">
                  <dt>Dată</dt>
                  <dd>{formatDate(show.data)}</dd>

                  <dt>Locație</dt>
                  <dd>{show.locatie}</dd>

                  <dt>Oraș</dt>
                  <dd>{show.oras}</dd>

                  {show.regizor && (
                    <>
                      <dt>Regizor</dt>
                      <dd>{show.regizor}</dd>
                    </>
                  )}
                </dl>

                {show.distributie && show.distributie.length > 0 && (
                  <div className="show-detail__cast">
                    <h4 className="show-detail__cast-heading">Distribuție &amp; Ansamblu</h4>
                    <ul className="show-detail__cast-list">
                      {show.distributie.map(member => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* ─── Gallery ──────────────────────────────────────────── */}
          {gallery.length > 0 && (
            <section className="show-detail__gallery-section">
              <div className="show-detail__gallery-header">
                <p className="gold-label">Galerie</p>
                <div className="gold-divider" />
                <h2 className="section-title">Fotografii de la Eveniment</h2>
              </div>
              <Gallery items={gallery} />
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
