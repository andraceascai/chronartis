const express = require('express');
const router = express.Router();
const Sponsor = require('../models/Sponsor');

// get toți sponsorii
router.get('/sponsori', async (req, res) => {
  try {
    const sponsori = await Sponsor.find();
    res.json(sponsori);
  } catch (error) {
    console.error('Eroare la citirea sponsorilor: ', error);
    res.status(500).send(error);
  }
});

module.exports = router;
