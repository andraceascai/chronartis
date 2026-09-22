import axios from 'axios';

// Client axios comun pentru tot site-ul — orice pagină care are nevoie de date
// din backend importă `api` de aici, în loc să configureze axios separat.
// Adresa backend-ului e configurabilă din .env (vezi .env.example).
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
});
