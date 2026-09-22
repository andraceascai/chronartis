const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
  _id: String,
  nume: String,
  logoUrl: String,
  websiteUrl: String,
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema, 'sponsori');

module.exports = Sponsor;
