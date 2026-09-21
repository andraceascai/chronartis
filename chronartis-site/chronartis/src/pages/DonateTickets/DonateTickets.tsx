import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './DonateTickets.css';

type FormType = 'donate' | 'request';

interface FormState {
  type: FormType;
  name: string;
  email: string;
  phone: string;
  message: string;
  ticketCount: string;
  showPreference: string;
}

const INITIAL: FormState = {
  type: 'donate',
  name: '',
  email: '',
  phone: '',
  message: '',
  ticketCount: '1',
  showPreference: '',
};

export default function DonateTickets() {
  const [form, setForm]     = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Arta aparține tuturor. Programul nostru de donare a biletelor conectează mecena generoși
              cu cei care altfel nu ar putea asista la un spectacol live.
            </p>
          </header>

          {/* ─── How It Works ──────────────────────────────────────── */}
          <section className="donate-page__how">
            <h2 className="section-title donate-page__how-title">Cum Funcționează</h2>
            <div className="donate-page__steps">
              {STEPS.map((step, idx) => (
                <div key={step.title} className="donate-page__step">
                  <span className="donate-page__step-num">{String(idx + 1).padStart(2, '0')}</span>
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
              {BENEFICIARIES.map(b => (
                <div key={b.title} className="donate-page__who-card">
                  <span className="donate-page__who-icon" aria-hidden="true">{b.icon}</span>
                  <h3 className="donate-page__who-title">{b.title}</h3>
                  <p className="donate-page__who-desc">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Form ──────────────────────────────────────────────── */}
          <section className="donate-page__form-section">
            <div className="donate-page__form-intro">
              <p className="gold-label">Implică-te</p>
              <div className="gold-divider" />
              <h2 className="section-title">Participă la Program</h2>
              <p className="donate-page__form-note">
                Indiferent dacă ai bilete de donat sau dorești să soliciți bilete, completează
                formularul de mai jos, iar echipa noastră te va contacta în termen de 48 de ore.
              </p>
            </div>

            {submitted ? (
              <div className="donate-page__success">
                <span className="donate-page__success-icon" aria-hidden="true">✓</span>
                <h3>Îți mulțumim că ne-ai contactat</h3>
                <p>Am primit mesajul tău și te vom contacta la {form.email} în termen de 48 de ore.</p>
                <button className="btn-gold" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
                  Trimite o altă cerere
                </button>
              </div>
            ) : (
              <form className="donate-page__form" onSubmit={handleSubmit} noValidate>

                {/* ─ Type Toggle ─ */}
                <div className="donate-page__toggle" role="group" aria-label="Form type">
                  <button
                    type="button"
                    className={`donate-page__toggle-btn ${form.type === 'donate' ? 'donate-page__toggle-btn--active' : ''}`}
                    onClick={() => setForm(prev => ({ ...prev, type: 'donate' }))}
                  >
                    Vreau să donez bilete
                  </button>
                  <button
                    type="button"
                    className={`donate-page__toggle-btn ${form.type === 'request' ? 'donate-page__toggle-btn--active' : ''}`}
                    onClick={() => setForm(prev => ({ ...prev, type: 'request' }))}
                  >
                    Aș dori să solicit bilete
                  </button>
                </div>

                <div className="donate-page__form-grid">
                  <div className="donate-page__field">
                    <label htmlFor="name" className="donate-page__label">Nume complet *</label>
                    <input
                      id="name"
                      type="text"
                      className="donate-page__input"
                      value={form.name}
                      onChange={set('name')}
                      required
                      placeholder="Numele tău"
                    />
                  </div>

                  <div className="donate-page__field">
                    <label htmlFor="email" className="donate-page__label">Adresă de email *</label>
                    <input
                      id="email"
                      type="email"
                      className="donate-page__input"
                      value={form.email}
                      onChange={set('email')}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="donate-page__field">
                    <label htmlFor="phone" className="donate-page__label">Telefon (opțional)</label>
                    <input
                      id="phone"
                      type="tel"
                      className="donate-page__input"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+40 7xx xxx xxx"
                    />
                  </div>

                  <div className="donate-page__field">
                    <label htmlFor="ticketCount" className="donate-page__label">Număr de bilete</label>
                    <select
                      id="ticketCount"
                      className="donate-page__input donate-page__select"
                      value={form.ticketCount}
                      onChange={set('ticketCount')}
                    >
                      {['1', '2', '3', '4', '5+'].map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  {form.type === 'donate' && (
                    <div className="donate-page__field donate-page__field--full">
                      <label htmlFor="showPreference" className="donate-page__label">Spectacol / Eveniment</label>
                      <input
                        id="showPreference"
                        type="text"
                        className="donate-page__input"
                        value={form.showPreference}
                        onChange={set('showPreference')}
                        placeholder="Pentru ce spectacol sunt biletele?"
                      />
                    </div>
                  )}

                  <div className="donate-page__field donate-page__field--full">
                    <label htmlFor="message" className="donate-page__label">
                      {form.type === 'donate' ? 'Observații suplimentare' : 'Spune-ne despre tine'}
                    </label>
                    <textarea
                      id="message"
                      className="donate-page__input donate-page__textarea"
                      value={form.message}
                      onChange={set('message')}
                      rows={5}
                      placeholder={
                        form.type === 'donate'
                          ? 'Orice informații suplimentare despre bilete...'
                          : 'Te rugăm să ne spui câteva cuvinte despre situația ta pentru a te putea ajuta cât mai bine.'
                      }
                    />
                  </div>
                </div>

                <div className="donate-page__form-footer">
                  <p className="donate-page__privacy">
                    Informațiile tale sunt utilizate exclusiv pentru coordonarea programului de bilete și nu vor fi niciodată împărtășite cu terțe părți.
                  </p>
                  <button type="submit" className="btn-gold btn-gold-filled donate-page__submit">
                    Trimite
                  </button>
                </div>

              </form>
            )}
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
