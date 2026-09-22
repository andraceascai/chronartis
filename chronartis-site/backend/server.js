require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

// importă rutele după ce DB e conectat
const spectacoleRouter = require('./routes/spectacole');
const sponsoriRouter = require('./routes/sponsori');

// conectează DB și pornește serverul
(async () => {
  try {
    await connectDB();
    app.use('/api', spectacoleRouter);
    app.use('/api', sponsoriRouter);

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on ${port}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
})();
