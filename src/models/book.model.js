const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, index: true },
  author: { type: String, required: true, trim: true, index: true },
  year: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
