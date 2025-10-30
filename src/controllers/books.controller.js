const Book = require('../models/book.model');
const { bookCreate, bookUpdate } = require('../validators/book.validator');

exports.getBooks = async (req, res) => {
  try {
    
    const page = Math.max(1, parseInt(req.query.page || '1'));
    const limit = Math.max(1, parseInt(req.query.limit || '10'));
    const skip = (page - 1) * limit;

   
    const q = req.query.q;
    const title = req.query.title;
    const author = req.query.author;

    const filters = {};
    if (q) {
      
      filters.$or = [
        { title: { $regex: q, $options: 'i' } },
        { author: { $regex: q, $options: 'i' } }
      ];
    } else {
      if (title) filters.title = { $regex: title, $options: 'i' };
      if (author) filters.author = { $regex: author, $options: 'i' };
    }

    const [total, books] = await Promise.all([
      Book.countDocuments(filters),
      Book.find(filters).sort({ createdAt: -1 }).skip(skip).limit(limit)
    ]);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      data: books
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { error, value } = bookCreate.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const book = new Book(value);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = bookUpdate.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const updated = await Book.findByIdAndUpdate(id, value, { new: true });
    if (!updated) return res.status(404).json({ error: 'Book not found' });

    res.json(updated);
  } catch (err) {
    console.error(err);

    if (err.kind === 'ObjectId') return res.status(400).json({ error: 'Invalid book ID' });
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });

    res.json({ message: 'Book deleted' });
  } catch (err) {
    console.error(err);
    if (err.kind === 'ObjectId') return res.status(400).json({ error: 'Invalid book ID' });
    res.status(500).json({ error: 'Server error' });
  }
};
