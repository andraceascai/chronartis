import { useState, useEffect, useCallback } from 'react';
import type { GalleryItem } from '../../types';
import './Gallery.css';

interface Props {
  items: GalleryItem[];
}

export default function Gallery({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + items.length) % items.length : null), [items.length]);
  const next  = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % items.length : null), [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, prev, next]);

  const active = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <>
      <div className="gallery">
        {items.map((item, idx) => (
          <button
            key={item.id}
            className="gallery__thumb"
            onClick={() => setLightboxIndex(idx)}
            aria-label={`Open ${item.type === "video" ? "video" : "image"} ${idx + 1}: ${item.caption ?? ""}`}
          >
            {item.type === "video" ? (
              // #t=0.1 forțează browserul să afișeze un cadru din video ca
              // previzualizare, în loc de un dreptunghi negru
              <video
                src={`${item.url}#t=0.1`}
                className="gallery__thumb-img"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={item.url}
                alt={item.caption ?? `Photo ${idx + 1}`}
                className="gallery__thumb-img"
                loading="lazy"
              />
            )}
            {item.type === "video" && (
              <span className="gallery__play-icon" aria-hidden="true">
                ▶
              </span>
            )}
          </button>
        ))}
      </div>

      {isOpen && active && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="gallery__lb-close"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="gallery__lb-arrow gallery__lb-arrow--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="gallery__lb-arrow gallery__lb-arrow--next"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="gallery__lb-backdrop" onClick={close} />

          <figure className="gallery__lb-content">
            {active.type === "video" ? (
              // Fără autoPlay: pornește doar când vizitatorul apasă play,
              // inclusiv atunci când ajunge la el navigând cu next/prev.
              <video
                key={active.id}
                src={active.url}
                className="gallery__lb-img"
                controls
              />
            ) : (
              <img
                src={active.url}
                alt={active.caption ?? ""}
                className="gallery__lb-img"
              />
            )}
            {active.caption && (
              <figcaption className="gallery__lb-caption">
                {active.caption}
              </figcaption>
            )}
          </figure>

          <p className="gallery__lb-counter">
            {lightboxIndex! + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
