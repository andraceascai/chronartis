// Utilitar de diagnostic: listează toate colecțiile din baza de date și
// câte documente are fiecare. Nu modifică nimic.
require('dotenv').config();
const connectDB = require('../db');

(async () => {
  const conn = await connectDB();
  const collections = await conn.db.listCollections().toArray();
  for (const c of collections) {
    const count = await conn.db.collection(c.name).countDocuments();
    console.log(`${c.name}: ${count} documente`);
  }
  process.exit();
})();
