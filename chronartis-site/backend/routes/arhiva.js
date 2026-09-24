const express = require('express');
const router = express.Router();
const Arhiva = require('../models/Arhiva');

// get toate spectacolele din arhivă (pagina de listă)
router.get('/arhiva', async (req, res) => {
  try {
    const arhiva = await Arhiva.find();
    res.json(arhiva);
  } catch (error) {
    console.error('Eroare la citirea arhivei: ', error);
    res.status(500).send(error);
  }
});

// get un spectacol din arhivă după id (pagina de detaliu)
router.get('/arhiva/:showId', async (req, res) => {
  try {
    const { showId } = req.params;
    const show = await Arhiva.findOne({ _id: showId });

    if (!show) {
      return res.status(404).json({ message: 'Spectacolul nu a fost găsit' });
    }

    res.json(show);
  } catch (error) {
    console.error('Eroare la citirea spectacolului din arhivă: ', error);
    res.status(500).send(error);
  }
});

module.exports = router;
