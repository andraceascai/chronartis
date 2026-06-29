import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/archive"       element={<PastShows />} />
        <Route path="/archive/:showId" element={<ShowDetail />} />
        <Route path="/upcoming"      element={<UpcomingShows />} />
        <Route path="/donate"        element={<DonateTickets />} />
        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
