// Utilitar de test: adaugă un video de test în galeria spectacolului
// "requiem-mozart", ca să se poată vedea cum arată un item video în galerie.
// Sigur de rulat de mai multe ori (verifică dacă există deja înainte să-l adauge).
require('dotenv').config();
const connectDB = require('../db');
const Arhiva = require('../models/Arhiva');

const DEMO_VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

(async () => {
  try {
    await connectDB();

    const show = await Arhiva.findOne({ _id: 'requiem-mozart' });
    if (!show) throw new Error('Spectacolul "requiem-mozart" nu a fost găsit.');

    const alreadyThere = show.galerie.some((g) => g.url === DEMO_VIDEO_URL);
    if (alreadyThere) {
      console.log('Videoul de test există deja în galerie — nu adaug din nou.');
    } else {
      show.galerie.push({
        tip: 'video',
        url: DEMO_VIDEO_URL,
        descriere: 'Extras video de la spectacol (test)',
      });
      await show.save();
      console.log('Video de test adăugat în galeria "Requiem — Mozart".');
    }
  } catch (err) {
    console.error('Eroare:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
