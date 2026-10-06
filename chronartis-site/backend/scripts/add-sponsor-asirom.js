// Adaugă sponsorul Asirom (Vienna Insurance Group) în colecția "sponsori".
// Script separat de seed-sponsors.js, ca să nu rescrie logoUrl-urile
// celorlalți sponsori (mutate între timp pe Cloudflare de către utilizator).
//
// Utilizare: node scripts/add-sponsor-asirom.js   (din folderul backend/)
require('dotenv').config();
const connectDB = require('../db');
const Sponsor = require('../models/Sponsor');

const sponsor = {
  _id: 'asirom',
  nume: 'Asirom Vienna Insurance Group',
  logoUrl: '/sponsors/asirom.png',
  websiteUrl: 'https://asirom.ro/',
};

(async () => {
  try {
    await connectDB();
    await Sponsor.findOneAndUpdate({ _id: sponsor._id }, sponsor, {
      upsert: true,
      new: true,
    });
    console.log(`OK: ${sponsor.nume}`);
  } catch (err) {
    console.error('Eroare la adăugarea sponsorului Asirom:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
