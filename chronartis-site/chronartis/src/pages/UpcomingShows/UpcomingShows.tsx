import Navbar from '../../components/Navbar/Navbar';
import UpcomingShowCard from '../../components/UpcomingShowCard/UpcomingShowCard';
import { upcomingShows } from '../../data/mockData';
import './UpcomingShows.css';

export default function UpcomingShows() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper upcoming-shows">
        <div className="container">
          <header className="upcoming-shows__header">
            <p className="gold-label">Sezonul 2025</p>
            <div className="gold-divider" />
            <h1 className="page-title">Spectacole Viitoare</h1>
            <p className="upcoming-shows__subtitle">
              Rezervă-ți locul la cele mai așteptate evenimente culturale ale sezonului.
            </p>
          </header>

          <div className="upcoming-shows__list">
            {upcomingShows.map(show => (
              <UpcomingShowCard key={show.id} show={show} />
            ))}
          </div>
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
