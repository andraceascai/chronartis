// Script de populare unică pentru colecția "sponsori", cu datele care erau
// în src/data/mockData.ts din frontend. Rulează idempotent (upsert după
// _id), deci poate fi rulat din nou fără să creeze duplicate.
//
// Utilizare: node scripts/seed-sponsors.js   (din folderul backend/)
require('dotenv').config();
const connectDB = require('../db');
const Sponsor = require('../models/Sponsor');

const sponsors = [
  {
    _id: 'exim',
    nume: 'Exim Banca Românească',
    logoUrl: '/sponsors/exim.png',
    websiteUrl: 'https://www.eximbank.ro/',
  },
  {
    _id: 'carturesti',
    nume: 'Cărturești',
    logoUrl: '/sponsors/carturesti.png',
    websiteUrl: 'https://carturesti.ro/',
  },
  {
    _id: 'bookzone',
    nume: 'Bookzone',
    logoUrl: '/sponsors/bookzone.png',
    websiteUrl: 'https://bookzone.ro/',
  },
  {
    _id: 'adina-buzatu',
    nume: 'Adina Buzatu',
    logoUrl: '/sponsors/adina-buzatu.png',
    websiteUrl: 'https://adinabuzatu.ro/',
  },
  {
    _id: 'stay',
    nume: 'Stay Coffee & Bar',
    logoUrl: '/sponsors/stay.png',
    websiteUrl: 'https://stay.coffee/',
  },
];

(async () => {
  try {
    await connectDB();

    for (const sponsor of sponsors) {
      await Sponsor.findOneAndUpdate({ _id: sponsor._id }, sponsor, {
        upsert: true,
        new: true,
      });
      console.log(`OK: ${sponsor.nume}`);
    }

    console.log(`\n${sponsors.length} sponsori adăugați/actualizați în colecția "sponsori".`);
  } catch (err) {
    console.error('Eroare la popularea sponsorilor:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
