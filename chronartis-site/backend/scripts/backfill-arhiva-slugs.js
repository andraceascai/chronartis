// Completează câmpul "id" (slug) pentru spectacolele din arhivă create
// înainte de a exista acest câmp, ca URL-urile lor să nu mai arate _id-ul
// brut din Mongo. Rulează o singură dată; idempotent (sare peste cele care
// au deja slug completat).
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../db');
const Arhiva = require('../models/Arhiva');

// _id (din Mongo) -> slug dorit
const SLUGS = {
  '6ac8e302a647d8f411896b63': 'oscar-si-tanti-roz-iasi-2026',
  '6ac8e616a647d8f411896b64': 'dincolo-de-cuvant-bucuresti-2026',
  '6ac8e624a647d8f411896b65': 'peer-gynt-bucuresti-2025',
};

(async () => {
  try {
    await connectDB();
    for (const [id, slug] of Object.entries(SLUGS)) {
      // Astea sunt ObjectId-uri reale în Mongo, nu string-uri — _id fiind
      // Mixed, trebuie construit explicit, altfel filtrul nu se potrivește.
      const objectId = new mongoose.Types.ObjectId(id);
      const res = await Arhiva.updateOne({ _id: objectId }, { $set: { id: slug } });
      console.log(`${id} -> ${slug} (matched: ${res.matchedCount}, modified: ${res.modifiedCount})`);
    }
  } catch (err) {
    console.error('Eroare la completarea slug-urilor:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
