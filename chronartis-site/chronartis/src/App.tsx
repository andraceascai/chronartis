import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import PastShows from './pages/PastShows/PastShows';
import ShowDetail from './pages/PastShows/ShowDetail';
import UpcomingShows from './pages/UpcomingShows/UpcomingShows';
import DonateTickets from './pages/DonateTickets/DonateTickets';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// key={showId} forțează un remount complet când navighezi de la un spectacol
// la altul — ShowDetail pornește din nou cu starea inițială (loading, fără
// date vechi), fără să mai fie nevoie să reseteze manual starea într-un efect.
function ShowDetailRoute() {
  const { showId } = useParams<{ showId: string }>();
  return <ShowDetail key={showId} />;
}

// Redirect de la vechea cale /archive/:showId la noua /arhiva/:showId,
// păstrând id-ul din URL — pentru orice link vechi deja distribuit.
function ArchiveDetailRedirect() {
  const { showId } = useParams<{ showId: string }>();
  return <Navigate to={`/arhiva/${showId}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/arhiva"        element={<PastShows />} />
        <Route path="/arhiva/:showId" element={<ShowDetailRoute />} />
        <Route path="/evenimente"    element={<UpcomingShows />} />
        <Route path="/doneaza"       element={<DonateTickets />} />

        {/* Căile vechi, în engleză — redirecționate, pentru linkuri deja distribuite. */}
        <Route path="/archive"       element={<Navigate to="/arhiva" replace />} />
        <Route path="/archive/:showId" element={<ArchiveDetailRedirect />} />
        <Route path="/upcoming"      element={<Navigate to="/evenimente" replace />} />
        <Route path="/donate"        element={<Navigate to="/doneaza" replace />} />

        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
