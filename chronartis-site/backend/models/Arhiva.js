const mongoose = require('mongoose');

const arhivaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.Mixed,
  id: String,
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
