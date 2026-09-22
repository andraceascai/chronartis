// Script de populare unică pentru colecția "statistici" (secțiunea
// "Impactul Nostru" din pagina de donații), cu valorile care erau
// hardcodate în DonateTickets.tsx. Rulează idempotent (upsert după _id).
//
// Utilizare: node scripts/seed-statistici.js   (din folderul backend/)
require('dotenv').config();
const connectDB = require('../db');
const Statistica = require('../models/Statistica');

const statistici = [
  { _id: 'varstnici', eticheta: 'Vârstnici', valoare: 500, inCrestere: false, ordine: 1 },
  { _id: 'tineri', eticheta: 'Tineri', valoare: 4500, inCrestere: true, ordine: 2 },
  { _id: 'persoane-cu-dizabilitati', eticheta: 'Persoane cu dizabilități', valoare: 100, inCrestere: false, ordine: 3 },
];

(async () => {
  try {
    await connectDB();

    for (const stat of statistici) {
      await Statistica.findOneAndUpdate({ _id: stat._id }, stat, {
        upsert: true,
        new: true,
      });
      console.log(`OK: ${stat.eticheta} — ${stat.valoare}`);
    }

    console.log(`\n${statistici.length} statistici adăugate/actualizate în colecția "statistici".`);
  } catch (err) {
    console.error('Eroare la popularea statisticilor:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
