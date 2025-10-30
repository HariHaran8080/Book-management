require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const booksRoutes = require('./routes/books.routes');

const app = express();
app.use(cors());
app.use(express.json()); 
app.get('/', (req, res) => res.json({ status: 'ok' }));

app.use('/books', booksRoutes);


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)

.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
