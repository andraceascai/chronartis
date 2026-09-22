const mongoose = require('mongoose');

const spectacoleSchema = new mongoose.Schema({
  _id: String,
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
