const express = require('express');
const router = express.Router();
const Statistica = require('../models/Statistica');

// get toate statisticile de impact, în ordinea de afișare
router.get('/statistici', async (req, res) => {
  try {
    const statistici = await Statistica.find().sort({ ordine: 1 });
    res.json(statistici);
  } catch (error) {
    console.error('Eroare la citirea statisticilor: ', error);
    res.status(500).send(error);
  }
});

module.exports = router;
