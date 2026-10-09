const mongoose = require('mongoose');

// Un spectacol din arhivă. Pagina de listă (Arhivă) folosește doar afis,
// titlu, data, locatie și categorie; pagina de detaliu folosește tot restul.
const arhivaSchema = new mongoose.Schema({
  // Mixed, nu String — colecția are documente mai vechi cu _id text (ex.
  // "requiem-mozart") și documente noi cu _id generat automat de Mongo
  // (ObjectId). Dacă schema ar forța String, Mongoose ar converti orice
  // filtru de căutare la string, iar un ObjectId real nu se mai potrivește
  // niciodată cu un string — exact bug-ul de la pagina de detaliu.
  _id: mongoose.Schema.Types.Mixed,
  titlu: String,
  categorie: String,       // 'concert' | 'teatru' | 'eveniment' | 'other'
  afis: String,
  data: String,
  locatie: String,         // sala/venue, ex. "Sala Palatului"
  oras: String,
  descriere: String,
  regizor: String,
  distributie: [String],   // distribuție & ansamblu
  galerie: [{
    tip: String,            // 'image' | 'video'
    url: String,
    descriere: String,
  }],
});

const Arhiva = mongoose.model('Arhiva', arhivaSchema, 'arhiva');

module.exports = Arhiva;
