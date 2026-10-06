# Chronartis

Site-ul Asociației Chronartis — evenimente culturale, arhivă de spectacole și
programul „Primul meu spectacol". Monorepo cu două aplicații independente,
gândite să fie găzduite separat (ex. Render):

```
chronartis-site/
├── chronartis/   — frontend (React + TypeScript + Vite)
└── backend/      — API (Express + MongoDB/Mongoose)
```

Fiecare are propriul README cu detalii: [chronartis-site/chronartis/README.md](chronartis-site/chronartis/README.md) și [chronartis-site/backend/README.md](chronartis-site/backend/README.md).

## Cum funcționează

Frontend-ul nu are date hardcodate — ia tot (spectacole viitoare, arhivă,
sponsori, statisticile de impact) din backend, care le citește din MongoDB.
Ca să adaugi sau să modifici conținut (un spectacol nou, un sponsor, o cifră
din „Impactul Nostru"), editezi direct documentele din baza de date — nu e
nevoie de cod nou sau de un redeploy.

## Rulare locală

Ai nevoie de ambele servicii pornite simultan, în două terminale separate:

```bash
# Terminal 1 — backend (implicit pe portul 3000)
cd chronartis-site/backend
npm install
cp .env.example .env   # completează MONGODB_URI cu connection string-ul tău
npm run dev

# Terminal 2 — frontend (implicit pe portul 5173)
cd chronartis-site/chronartis
npm install
cp .env.example .env   # VITE_API_URL=http://localhost:3000/api
npm run dev
```

## Deploy (Render)

Cele două foldere se publică drept **două servicii separate**:

- **`chronartis-site/backend`** → Web Service (Node). Comandă de start: `npm start`.
  Variabile de mediu necesare: `MONGODB_URI`, `DB_NAME` (vezi `.env.example`).
  `PORT` e setat automat de Render.
- **`chronartis-site/chronartis`** → Static Site. Comandă de build: `npm run build`,
  folderul publicat: `dist`.
  Variabilă de mediu necesară: **`VITE_API_URL`**, setată la adresa publică a
  backend-ului (ex. `https://chronartis-backend.onrender.com/api`).

  ⚠️ Fără `VITE_API_URL` configurat corect la build, site-ul publicat va
  încerca să ia datele de la `localhost`, din browserul fiecărui vizitator —
  pagina se încarcă, dar rămâne fără spectacole/sponsori, fără nicio eroare
  vizibilă pentru vizitator.

## Stack

- **Frontend:** React 19, TypeScript, Vite, React Router, Axios.
- **Backend:** Express, Mongoose, MongoDB Atlas.
