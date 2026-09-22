const mongoose = require('mongoose');

// O cifră din secțiunea "Impactul Nostru" (pagina de donații). Pentru a
// actualiza un număr, e suficient să editezi documentul din colecția
// "statistici" — nu trebuie atins codul.
const statisticaSchema = new mongoose.Schema({
  _id: String,
  eticheta: String,    // ex. "Vârstnici"
  valoare: Number,     // ex. 500
  inCrestere: Boolean, // afișează bagheta "în creștere" lângă cifră
  ordine: Number,      // poziția de afișare (mai mic = mai la stânga)
});

const Statistica = mongoose.model('Statistica', statisticaSchema, 'statistici');

module.exports = Statistica;
