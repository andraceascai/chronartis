import { Link } from "react-router-dom";
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
            Creăm experiențe culturale extraordinare: concerte,
            <br />
            teatru și spectacole, pentru publicul care caută excepționalul.
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
                La Chronartis, nu am pornit de la un model de business.
                <br />
                Am pornit de la o întrebare.
                <br />
                Cum readucem tinerii aproape de cultură într-o lume care îi
                îndepărtează de ea în fiecare zi?
              </p>
              <p>
                În ultimii ani, sălile de concert, teatrele și spațiile
                culturale au devenit tot mai tăcute în ceea ce privește prezența
                noilor generații. Am văzut locuri construite pentru emoție,
                reflecție și frumusețe rămânând tot mai departe de adolescenții
                și tinerii care ar avea poate cea mai mare nevoie de ele.
              </p>
              <p>
                Și atunci am înțeles ceva esențial: Cultura nu trebuie vândută.
                Cultura trebuie dăruită. Din această convingere s-a născut
                Chronartis, începând cu anul 2025, un proiect construit din
                pasiune autentică, responsabilitate culturală și dorința sinceră
                de a crea o punte între generații.
                <p>
                  <br />
                  Credem că arta nu aparține unui cerc restrâns. Nu aparține
                  elitismului. Nu aparține trecutului. Arta aparține tuturor
                  celor care au nevoie să simtă ceva real. Chronartis există
                  pentru tinerii care nu s-au regăsit niciodată în discursurile
                  rigide ale culturii tradiționale. <br />
                  Pentru adolescenții care au fost făcuți să creadă că lumea
                  concertelor, a teatrului sau a marilor experiențe culturale
                  „nu este pentru ei”. Pentru cei care caută sens, apartenență
                  și emoție într-o societate care îi ascultă tot mai puțin.
                </p>
                <br />
                <p>
                  Noi vrem să schimbăm asta. <br />
                  Nu prin compromisuri.
                  <br /> Nu prin superficialitate. <br />
                  Ci prin experiențe culturale vii, moderne și accesibile,
                  capabile să vorbească pe limba unei noi generații fără să își
                  piardă profunzimea. Chronartis nu este doar un proiect
                  cultural. Este o declarație. O declarație că tinerii merită să
                  fie invitați în cultură, nu testați înainte să intre. Că
                  emoția autentică poate schimba destine. Și că viitorul artei
                  depinde de curajul de a o face din nou relevantă. <br />
                  Pentru noi, cultura nu este un lux. Este o nevoie umană
                  fundamentală. Iar dacă o generație întreagă s-a îndepărtat de
                  ea, atunci responsabilitatea nu este a lor. Este a noastră să
                  reconstruim drumul înapoi. Acesta este începutul Chronartis.
                  Și credem că este doar începutul unei schimbări mult mai mari.
                </p>
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

      {/* ─── Support (3,5%) ───────────────────────────────────────── */}
      <section className="support">
        <div className="container">
          <div className="support__card">
            <div className="support__text">
              <p className="gold-label">Susține Chronartis</p>
              <div className="gold-divider" />
              <h2 className="section-title support__title">
                3,5% din impozit pot deveni prima ta întâlnire cu arta
              </h2>
              <p className="support__desc">
                Redirecționează 3,5% din impozitul pe venit către Asociația
                Chronartis și ajută tinerii să descopere, pentru prima dată,
                magia unui spectacol live.
              </p>
            </div>
            <Link
              to="/donate#redirectionare"
              className="btn-gold btn-gold-filled support__cta"
            >
              Redirecționează 3,5%
            </Link>
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
      "Colaborăm exclusiv cu artiști și ansambluri de elită, transformând fiecare apariție într-o experiență culturală memorabilă.",
  },
  {
    icon: "◇",
    title: "Acoperire Culturală",
    description:
      "DDe la marile scene ale capitalei până în orașele din întreaga țară, aducem cultura de înaltă clasă mai aproape de fiecare generație.",
  },
  {
    icon: "❧",
    title: "Scop Social",
    description:
      "Prin programnul nostrum national “primul meu spectacol” ne asiguram ca barierele financiare nu vor sta niciodata intre tineri si arta.",
  },
] as const;

const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "◈",
  Facebook: "◉",
  YouTube: "▶",
  LinkedIn: "◆",
};
