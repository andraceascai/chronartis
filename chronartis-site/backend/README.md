# Chronartis — Backend

API Express + MongoDB/Mongoose pentru site-ul Chronartis. Servește datele pe
care frontend-ul le afișează: spectacole viitoare, arhivă, sponsori și
statisticile de impact.

## Pornire locală

```bash
npm install
cp .env.example .env   # completează MONGODB_URI cu connection string-ul tău din Atlas
npm run dev            # cu nodemon, repornește la fiecare modificare
# sau: npm start
```

Variabile de mediu (vezi `.env.example`):

| Variabilă      | Descriere                                          |
| -------------- | --------------------------------------------------- |
| `MONGODB_URI`  | Connection string-ul din MongoDB Atlas               |
| `DB_NAME`      | Numele bazei de date                                 |
| `PORT`         | Portul serverului (implicit 3000 local; pe Render e setat automat) |

## Rute

Toate rutele sunt montate sub `/api`.

| Metodă | Rută                    | Descriere                              |
| ------ | ----------------------- | --------------------------------------- |
| GET    | `/api/spectacole`       | Toate spectacolele viitoare             |
| GET    | `/api/arhiva`           | Toate spectacolele din arhivă           |
| GET    | `/api/arhiva/:showId`   | Un spectacol din arhivă, după id        |
| GET    | `/api/sponsori`         | Toți sponsorii                          |
| GET    | `/api/statistici`       | Cifrele din secțiunea „Impactul Nostru” |

## Structură

```
models/    — scheme Mongoose (Spectacole, Arhiva, Sponsor, Statistica)
routes/    — rutele Express de mai sus
scripts/   — utilitare de populare/întreținere a bazei de date (vezi mai jos)
db.js      — conectarea la MongoDB
server.js  — pornirea serverului Express
```

## Cum adaugi / modifici conținut

Nu e nevoie de cod nou — se editează direct documentele din MongoDB
(ex. în Compass sau Atlas UI):

- **Spectacol nou (viitor):** document nou în colecția `spectacole`.
- **Spectacol nou în arhivă:** document nou în colecția `arhiva`, cu galerie
  foto (`galerie: [{ tip: 'image'|'video', url, descriere }]`).
- **Sponsor nou:** document nou în colecția `sponsori` — apare automat și pe
  Acasă, și pe pagina de Donații.
- **Cifră nouă în „Impactul Nostru”:** editezi câmpul `valoare` al
  documentului corespunzător din colecția `statistici`.

## Scripturi utile (`scripts/`)

Scripturi de populare inițială (idempotente — pot fi rulate din nou fără să
creeze duplicate) și un utilitar de diagnosticare:

```bash
node scripts/seed-arhiva.js        # populează arhiva cu spectacole demo
node scripts/seed-sponsors.js      # populează sponsorii
node scripts/seed-statistici.js    # populează cifrele de impact
node scripts/list-collections.js   # listează colecțiile din baza de date și câte documente are fiecare
```

Nu rulează niciodată automat — sunt doar pentru întreținere manuală.
