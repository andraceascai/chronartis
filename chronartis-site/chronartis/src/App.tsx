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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/archive"       element={<PastShows />} />
        <Route path="/archive/:showId" element={<ShowDetailRoute />} />
        <Route path="/upcoming"      element={<UpcomingShows />} />
        <Route path="/donate"        element={<DonateTickets />} />
        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
