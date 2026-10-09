const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
  // Mixed, nu String — vezi models/Arhiva.js pentru motiv.
  _id: mongoose.Schema.Types.Mixed,
  nume: String,
  logoUrl: String,
  websiteUrl: String,
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema, 'sponsori');

module.exports = Sponsor;
