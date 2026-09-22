import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import UpcomingShowCard from "../../components/UpcomingShowCard/UpcomingShowCard";
import { api } from "../../lib/api";
import type { SpectacolDb } from "../../types/db";
import "./UpcomingShows.css";

type Status = "loading" | "ready" | "error";

export default function UpcomingShows() {
  const [shows, setShows] = useState<SpectacolDb[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    api
      .get<SpectacolDb[]>("/spectacole")
      .then((res) => {
        if (cancelled) return;
        setShows(res.data);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("Eroare la citirea spectacolelor:", error);
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // doar spectacolele care nu au trecut încă, în ordine cronologică
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = shows
    .filter((s) => new Date(s.data) >= today)
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

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
              Rezervă-ți locul la cele mai așteptate evenimente culturale ale
              sezonului.
            </p>
          </header>

          {status === "error" && (
            <p className="upcoming-shows__empty">
              Nu am putut încărca spectacolele. Încearcă din nou puțin mai
              târziu.
            </p>
          )}

          {status === "ready" && upcoming.length === 0 && (
            <p className="upcoming-shows__empty">
              Momentan nu sunt anunțate spectacole noi. Revino în curând.
            </p>
          )}

          <div className="upcoming-shows__list">
            {upcoming.map((show) => (
              <UpcomingShowCard key={show._id} show={show} />
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
