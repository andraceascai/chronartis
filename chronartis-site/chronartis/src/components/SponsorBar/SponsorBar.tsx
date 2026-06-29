import type { Sponsor } from "../../types";
import "./SponsorBar.css";

interface Props {
  sponsors: Sponsor[];
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
              aria-label={`Visit ${sponsor.name}`}
              title={sponsor.name}
            >
              <img
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="sponsor-bar__logo"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
