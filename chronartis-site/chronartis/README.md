# Chronartis — Frontend

Site-ul public al Asociației Chronartis — React + TypeScript + Vite.

## Pornire locală

```bash
npm install
cp .env.example .env   # VITE_API_URL=http://localhost:3000/api
npm run dev
```

Are nevoie de backend-ul pornit în paralel (vezi [../backend/README.md](../backend/README.md)) — fără el, paginile se încarcă dar rămân fără conținut (spectacole, sponsori etc.), fiindcă nu există date mock în frontend.

## Variabile de mediu

| Variabilă       | Descriere                                                        |
| --------------- | ------------------------------------------------------------------ |
| `VITE_API_URL`  | Adresa backend-ului (local: `http://localhost:3000/api`; în producție: URL-ul public al serviciului de backend + `/api`) |

## Scripturi

```bash
npm run dev       # server de dezvoltare, cu hot reload
npm run build     # verifică tipurile și produce build-ul de producție în dist/
npm run preview   # servește local build-ul din dist/, ca să-l testezi înainte de deploy
npm run lint      # ESLint
```

## Structură

```
src/
├── components/   — componente reutilizabile (carduri, galerie, navbar, lightbox...)
├── pages/        — o pagină pe rută (Acasă, Arhivă, Evenimente, Donează)
├── lib/          — client axios (api.ts) și ajutoare de formatare (showFormat.ts)
├── types/        — tipuri TypeScript; types/db.ts oglindește exact formele din backend
└── data/         — doar linkurile de social media (singurul conținut static rămas)
```

Toate datele reale (spectacole, arhivă, sponsori, statistici) vin din API,
prin `src/lib/api.ts` — nu există date mock pentru conținut.
