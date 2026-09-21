import type { SyntheticEvent } from "react";
import type { Sponsor } from "../../types";
import "./SponsorBar.css";

interface Props {
  sponsors: Sponsor[];
}

// Toate siglele primesc aceeași "suprafață" vizuală (px²), limitată de căsuța lor,
// ca un logo lat și subțire să pară la fel de mare ca unul aproape pătrat.
const LOGO_AREA = 7000;
const SLOT_W = 210;
const SLOT_H = 64;

function sizeLogo(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  const ratio = img.naturalWidth / img.naturalHeight;
  let h = Math.sqrt(LOGO_AREA / ratio);
  let w = h * ratio;
  const scale = Math.min(1, SLOT_W / w, SLOT_H / h);
  w *= scale;
  h *= scale;
  img.style.setProperty("--logo-w", `${Math.round(w)}px`);
  img.style.setProperty("--logo-h", `${Math.round(h)}px`);
}

export default function SponsorBar({ sponsors }: Props) {
  return (
    <section className="sponsor-bar">
      <div className="container">
        <p className="gold-label sponsor-bar__label">Parteneri Oficiali</p>
        <div className="gold-divider gold-divider--center gold-divider--wide" />
        <div className="sponsor-bar__grid">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-bar__item"
              aria-label={`Vizitează ${sponsor.name}`}
              title={sponsor.name}
            >
              <img
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="sponsor-bar__logo"
                onLoad={sizeLogo}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
