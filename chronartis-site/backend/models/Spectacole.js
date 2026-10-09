const mongoose = require('mongoose');

const spectacoleSchema = new mongoose.Schema({
  // Mixed, nu String — vezi models/Arhiva.js pentru motiv (colecția poate
  // avea atât _id text, cât și ObjectId generat automat de Mongo).
  _id: mongoose.Schema.Types.Mixed,
  titlu: String,
  categorie: String,        // 'concert' | 'theater' | 'eveniment' | 'other'
  afis: String,
  data: String,
  ora: String,
  locatie: String,
  descriere: String,
  linkuriBilete: [{
    platforma: String,
    url: String,
  }],
});

const Spectacole = mongoose.model('Spectacole', spectacoleSchema, 'spectacole');

module.exports = Spectacole;
