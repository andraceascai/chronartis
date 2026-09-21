import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./DonateTickets.css";

export default function DonateTickets() {
  const { hash } = useLocation();

  // Ajunge la secțiune când pagina e deschisă direct cu #ancoră (ex. din Acasă).
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Navbar />
      <main className="page-wrapper donate-page">
        <div className="container">
          {/* ─── Header ────────────────────────────────────────────── */}
          <header className="donate-page__header">
            <p className="gold-label">Inițiativă Comunitară</p>
            <div className="gold-divider" />
            <h1 className="page-title">Bilete pentru Toți</h1>
            <p className="donate-page__subtitle">
              Arta aparține tuturor. Programul nostru de donare a biletelor
              conectează oameni generoși cu cei care altfel nu ar putea asista
              la un spectacol live.
            </p>
            <div className="donate-page__header-actions">
              <a href="#redirectionare" className="btn-gold btn-gold-filled">
                Redirecționează 3,5%
              </a>
              <a href="#implica-te" className="btn-gold">
                Donează bilete
              </a>
            </div>
          </header>

          {/* ─── Program ───────────────────────────────────────────── */}
          <section className="donate-page__program">
            <div className="donate-page__program-head">
              <p className="gold-label">Programul Național</p>
              <div className="gold-divider" />
              <h2 className="section-title">“Primul meu spectacol”</h2>
              <p className="donate-page__program-lead">
                Nu vorbim despre teorie. Vorbim despre prima întâlnire reală cu
                arta.
              </p>
            </div>
            <div className="donate-page__program-body">
              <p>
                “Primul meu spectacol” este un program național dezvoltat de
                Chronartis împreună cu Marius Manole, construit ca un răspuns
                concret la o realitate simplă: mii de tineri din România nu au
                avut niciodată acces la un spectacol într-o sală importantă.
              </p>
              <p>
                Vorbim despre momentul în care un licean intră pentru prima dată
                în Sala Palatului și descoperă, prin spectacole de teatru și
                concerte simfonice, ce înseamnă un act artistic de nivel înalt.
                În primul an de activitate, proiectele Chronartis au adus
                împreună peste 15.000 de spectatori și au facilitat participarea
                a peste 4.500 de liceeni și tineri din medii vulnerabile. Pentru
                mulți dintre ei, a fost prima experiență culturală din viață.
              </p>
              <p>
                Programul funcționează simplu și transparent: companiile
                achiziționează bilete, iar noi le direcționăm către licee din
                București și din județele limitrofe, precum și către tineri care
                nu ar avea altfel această șansă. Fiecare bilet donat înseamnă un
                loc ocupat de un tânăr care descoperă pentru prima dată cultura
                în mod direct.
              </p>
            </div>

            <div className="donate-page__goals">
              <div className="donate-page__goal">
                <p className="gold-label">Obiectiv 2026</p>
                <p className="donate-page__goal-value">3.000</p>
                <p className="donate-page__goal-desc">
                  de tineri invitați la primul lor spectacol, în cadrul unor
                  producții de anvergură organizate la Sala Palatului, teatre și
                  săli de concerte.
                </p>
              </div>
              <div className="donate-page__goal">
                <p className="gold-label">Extindere națională</p>
                <p className="donate-page__goal-value">
                  Iași · Cluj · Timișoara
                </p>
                <p className="donate-page__goal-desc">
                  Vom aduce în sală adolescenți din medii vulnerabile,
                  oferindu-le aceeași primă întâlnire esențială cu arta și
                  experiența spectacolului.
                </p>
              </div>
            </div>

            <div className="donate-page__partners">
              <p className="gold-label">Parteneri care susțin programul</p>
              <ul className="donate-page__partners-list">
                {PARTNERS.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p className="donate-page__partners-text">
                Sunt companii care au înțeles că impactul real nu se măsoară în
                declarații, ci în acces oferit. Implicarea în program nu este
                doar o asociere de imagine. Este o intervenție directă, vizibilă
                și verificabilă în educația culturală a unei generații.
              </p>
              <blockquote className="donate-page__quote">
                Chronartis construiește acest program ca o punte între mediul
                privat și o nevoie reală din societate. “Primul meu spectacol”
                nu este un proiect simbolic. Este un mecanism concret prin care
                putem schimba, pas cu pas, relația unei generații față de
                cultură.
              </blockquote>
            </div>
          </section>

          {/* ─── How It Works ──────────────────────────────────────── */}
          <section className="donate-page__how">
            <h2 className="section-title donate-page__how-title">
              Cum Funcționează
            </h2>
            <div className="donate-page__steps">
              {STEPS.map((step, idx) => (
                <div key={step.title} className="donate-page__step">
                  <span className="donate-page__step-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="donate-page__step-title">{step.title}</h3>
                    <p className="donate-page__step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Beneficiaries ─────────────────────────────────────── */}
          <section className="donate-page__who">
            <h2 className="section-title">Pe Cine Sprijinim</h2>
            <div className="gold-divider" />
            <div className="donate-page__who-grid">
              {BENEFICIARIES.map((b) => (
                <div key={b.title} className="donate-page__who-card">
                  <span className="donate-page__who-icon" aria-hidden="true">
                    {b.icon}
                  </span>
                  <h3 className="donate-page__who-title">{b.title}</h3>
                  <p className="donate-page__who-desc">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Impact ────────────────────────────────────────────── */}
          <section className="donate-page__impact">
            <h2 className="section-title">Impactul Nostru</h2>
            <div className="gold-divider" />
            <p className="donate-page__impact-intro">
              Datorită celor care aleg să doneze, mii de oameni au trăit deja
              magia unui spectacol live.
            </p>
            <div className="donate-page__impact-grid">
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label} className="donate-page__stat">
                  <p className="donate-page__stat-value">
                    <CountUp target={stat.value} />+
                  </p>
                  <p className="donate-page__stat-label">{stat.label}</p>
                  {stat.growing && (
                    <span className="donate-page__stat-badge">în creștere</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ─── Form ──────────────────────────────────────────────── */}
          <section id="implica-te" className="donate-page__form-section">
            <div className="donate-page__form-intro">
              <p className="gold-label">Implică-te</p>
              <div className="gold-divider" />
              <h2 className="section-title">
                Participă la Programul “Primul meu spectacol”
              </h2>
              <p className="donate-page__form-note">
                Fie că ai bilete pe care dorești să le donezi, fie că ești
                cineva (sau cunoști pe cineva) care ar avea nevoie de un bilet,
                ne poți scrie oricând. Fiecare gest contează, iar noi ne ocupăm
                de restul.
              </p>
            </div>

            <div className="donate-page__contact">
              <p className="donate-page__contact-text">
                Vrei să te implici? Scrie-ne un e-mail și te vom contacta cât
                mai curând, pentru a stabili împreună cei mai buni pași.
              </p>
              <a
                className="donate-page__contact-link"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Primul meu spectacol",
                )}`}
              >
                {CONTACT_EMAIL}
              </a>
              <p className="donate-page__privacy">
                Informațiile tale sunt utilizate exclusiv pentru coordonarea
                programului de bilete și nu vor fi niciodată împărtășite cu
                terțe părți.
              </p>
            </div>
          </section>

          {/* ─── Tax Redirect (3,5%) ───────────────────────────────── */}
          <section id="redirectionare" className="donate-page__tax">
            <div className="donate-page__tax-text">
              <div className="donate-page__tax-head">
                <p className="gold-label">Susține Chronartis</p>
                <div className="gold-divider" />
                <h2 className="section-title">
                  Redirecționează 3,5% din impozit
                </h2>
              </div>
              <p className="donate-page__tax-lead">
                În fiecare an, există acel 3,5% din impozit care poate merge
                către o cauză în care credem.
              </p>
              <p>
                Pentru mulți, pare un gest mic. Pentru un copil care ajunge
                pentru prima dată într-o sală de teatru sau la un concert, poate
                însemna începutul unei întâlniri cu lumea altfel decât o
                cunoaște. Iar asta am trăit deja.
              </p>
              <p>
                Prin proiecte precum “Primul meu spectacol”, am reușit să aducem
                mii de copii și adolescenți către teatru și muzică. Iar
                continuarea acestor inițiative depinde și de sprijinul oamenilor
                care cred că accesul la cultură nu ar trebui să fie un
                privilegiu.
              </p>

              <div className="donate-page__share">
                <h3 className="donate-page__share-title">
                  Fă cunoscută inițiativa
                </h3>
                <p>
                  Dacă știți persoane care nu și-au redirecționat încă cei 3,5%
                  din impozit către o asociație sau fundație, ne-ar ajuta enorm
                  să le vorbiți despre Asociația Chronartis și despre programele
                  noastre. Dacă puteți, distribuiți mai departe linkul nostru
                  către prieteni, colegi sau familie. Uneori, un simplu mesaj
                  trimis mai departe poate însemna încă un copil care descoperă
                  că există și alte drumuri.
                </p>
                <CopyLinkButton url={TAX_FORM_URL} />
              </div>
            </div>

            <aside className="donate-page__tax-panel">
              <p className="donate-page__tax-figure">3,5%</p>
              <p className="donate-page__tax-caption">
                din impozitul pe venit, direcționat către Asociația Chronartis
              </p>
              <a
                href={TAX_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-gold-filled donate-page__tax-cta"
              >
                Completează Formularul 230
              </a>
              <p className="donate-page__tax-hint">
                Formularul se completează online, pe formular230.ro
              </p>
            </aside>
          </section>
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

const CONTACT_EMAIL = "balancristian@chronartis.com";
const TAX_FORM_URL = "https://formular230.ro/asociatia-chronartis";

const PARTNERS = [
  "Exim Banca Românească",
  "Bookzone",
  "Cărturești",
  "Adina Buzatu",
  "Stay Coffee & Bar",
] as const;

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copiază linkul:", url);
    }
  };

  return (
    <button type="button" className="btn-gold" onClick={copy}>
      {copied ? "Link copiat ✓" : "Copiază linkul"}
    </button>
  );
}

// Actualizează aici cifrele pe măsură ce programul crește.
const IMPACT_STATS = [
  { label: "Vârstnici", value: 500, growing: false },
  { label: "Tineri", value: 4500, growing: true },
  { label: "Persoane cu dizabilități", value: 100, growing: false },
] as const;

const formatNumber = (n: number) =>
  String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Numără de la 0 la `target` când elementul devine vizibil.
function CountUp({
  target,
  duration = 1600,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    let frame = 0;
    setValue(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return <span ref={ref}>{formatNumber(value)}</span>;
}

const STEPS = [
  {
    title: "Donatorii oferă biletele lor",
    description:
      "Prin sprijinul partenerilor, sponsorilor și al persoanelor care aleg să doneze bilete, transformăm generozitatea în acces real la cultură pentru tinerii care au nevoie de experiențe care le deschid lumea interioară și îi îmbogățesc interior.",
  },
  {
    title: "Căutăm și ne extindem",
    description:
      "Echipa noastră este în legătură directă cu cadrele didactice din școlile și liceele partenere, care identifică tinerii, fără sprijinul cărora această misiune nu ar fi posibilă.",
  },
  {
    title: "Beneficiarii sunt notificați",
    description:
      "Beneficiarii primesc biletele în mod gratuit, alături de toate informațiile practice necesare, pentru a transforma participarea lor într-o experiență completă și lipsită de bariere.",
  },
  {
    title: "Toată lumea participă",
    description:
      "Beneficiarii trăiesc experiența unui eveniment cultural live (de multe ori pentru prima dată),  datorită generozității comunității noastre.",
  },
] as const;

const BENEFICIARIES = [
  {
    icon: "✦",
    title: "Persoane Vârstnice",
    description:
      "Sprijinim persoanele vârstnice și pensionarii cu venituri limitate, pentru care accesul la cultură poate fi dificil, dar pentru care experiența spectacolului live rămâne o valoare profund prețuită.",
  },
  {
    icon: "◇",
    title: "Copii și Tineri",
    description:
      "Sprijinim copiii și tinerii din familii cu venituri reduse, din medii defavorizate sau din centre de plasament, pentru care prima întâlnire cu opera, teatrul sau muzica clasică poate deveni o experiență transformatoare.",
  },
  {
    icon: "❧",
    title: "Alte Persoane Aflate în Nevoie",
    description:
      "Persoane care se confruntă cu dificultăți, medicale, financiare sau sociale, pentru care o seară culturală oferă un moment de bucurie și alinare.",
  },
] as const;
