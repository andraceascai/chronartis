import { useEffect } from 'react';
import './ImageLightbox.css';

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

// Lightbox pentru o singură imagine (ex. afișul unui spectacol) — nu are
// grilă de miniaturi sau navigare prev/next, spre deosebire de Gallery,
// care e pentru o galerie foto întreagă.
export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={alt}>
      <button className="image-lightbox__close" onClick={onClose} aria-label="Închide">
        ✕
      </button>
      <div className="image-lightbox__backdrop" onClick={onClose} />
      <img src={src} alt={alt} className="image-lightbox__img" />
    </div>
  );
}
