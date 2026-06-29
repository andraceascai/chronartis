import Navbar from "../../components/Navbar/Navbar";
import SponsorBar from "../../components/SponsorBar/SponsorBar";
import { socialLinks, sponsors } from "../../data/mockData";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content container">
          <p className="gold-label fade-in">București, România</p>
          <h1 className="hero__title fade-in-2">
            Unde cultura
            <br />
            <em>Își găsește vocea</em>
          </h1>
          <div className="gold-divider gold-divider--wide fade-in-3" />
          <p className="hero__subtitle fade-in-3">
            Creăm experiențe culturale extraordinare: concerte, operă,
            <br />
            teatru și dans, pentru publicul care caută excepționalul.
          </p>
          <div className="hero__actions fade-in-3">
            <a href="/upcoming" className="btn-gold btn-gold-filled">
              Ce urmează
            </a>
            <a href="/archive" className="btn-gold">
              Evenimente trecute
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="hero__scroll-hint"
          aria-label="Scroll to learn more"
        >
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Descoperă</span>
        </a>
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__intro">
              <p className="gold-label">Despre noi</p>
              <div className="gold-divider" />
              <h2 className="section-title about__heading">
                Credem în puterea transformatoare a spectacolului live
              </h2>
            </div>
            <div className="about__text">
              <p>
                Chronartis a fost fondată cu o singură convingere: că marea artă
                trebuie să ajungă la cât mai mulți oameni. Din 2024, am produs
                și prezentat peste 200 de evenimente culturale în toată România,
                de la recitaluri de cameră intime până la spectacole operistice
                grandioase.
              </p>
              <p>
                Colaborăm cu cei mai apreciați artiști și instituții din
                România, alături de interpreți internaționali, pentru a aduce
                programe de cel mai înalt calibru pe scenele din toată țara.
                Fiecare eveniment pe care îl creăm este modelat de angajamentul
                nostru față de excelența artistică, accesibilitate și puterea de
                neînlocuit a spectacolului live.
              </p>
            </div>
          </div>

          <div className="about__pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="about__pillar">
                <span className="about__pillar-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3 className="about__pillar-title">{p.title}</h3>
                <p className="about__pillar-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social ───────────────────────────────────────────────── */}
      <section className="social">
        <div className="container">
          <div className="social__header">
            <p className="gold-label">Urmărește-ne parcursul</p>
            <div className="gold-divider gold-divider--center" />
            <h2 className="section-title">Să rămânem conectați</h2>
          </div>
          <div className="social__links">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social__link"
                aria-label={`Urmărește-ne pe ${link.platform}`}
              >
                <span className="social__icon" aria-hidden="true">
                  {SOCIAL_ICONS[link.platform] ?? "◈"}
                </span>
                <span className="social__platform">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sponsors ─────────────────────────────────────────────── */}
      <SponsorBar sponsors={sponsors} />

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer className="home-footer">
        <div className="container">
          <p className="home-footer__copy">
            © {new Date().getFullYear()} Chronartis. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </>
  );
}

const PILLARS = [
  {
    icon: "♪",
    title: "Excelență Artistică",
    description:
      "Colaborăm doar cu interpreți și ansambluri de cel mai înalt nivel, asigurând că fiecare seară este una de neuitat.",
  },
  {
    icon: "◇",
    title: "Acoperire Culturală",
    description:
      "De pe scenele capitalei până la sălile regionale, aducem cultură de clasă mondială publicurilor din toată România.",
  },
  {
    icon: "❧",
    title: "Scop Social",
    description:
      "Prin programul nostru de donare a biletelor, ne asigurăm că barierele financiare nu vor sta niciodată între oameni și marea artă.",
  },
] as const;

const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "◈",
  Facebook: "◉",
  YouTube: "▶",
  LinkedIn: "◆",
};
