const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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
    // Căutăm întâi după slug-ul "id" (ex. "oscar-si-tanti-roz-iasi-2026",
    // cel din URL). Pentru documentele vechi, fără slug completat încă,
    // păstrăm și căutarea după _id (string sau ObjectId) ca rezervă.
    const candidates = [showId];
    if (/^[0-9a-fA-F]{24}$/.test(showId)) {
      candidates.push(new mongoose.Types.ObjectId(showId));
    }
    const show = await Arhiva.findOne({
      $or: [{ id: showId }, { _id: { $in: candidates } }],
    });

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
