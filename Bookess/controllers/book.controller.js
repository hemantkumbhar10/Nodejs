const { findByIdAndUpdate } = require("../models/book.model");
const Book = require("../models/book.model");

exports.createBook = async (req, res) => {
  const book = await new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.title,
    publisher: req.body.publisher,
  });
  book.save((err, book) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({
      isbn: book.isbn,
      itle: book.title,
      author: book.title,
      publisher: book.publisher,
      id: book.id,
    });
  });
};

exports.getAllBooks = async (req, res) => {
  await Book.find({}).exec((err, books) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!books) {
      return res.status(404).send({ message: "There are no books available" });
    }

    return res.json(books);
  });
};

exports.getBookById = async (req, res) => {
  await Book.findOne({ id: req.body.id }).exec((err, book) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!book) {
      return res
        .status(404)
        .send({ message: "Sorry! this book doesnt exists." });
    }

    return res.json({
      isbn: book.isbn,
      title: book.title,
      author: book.author,
      publisher: book.publisher,
    });
  });
};

exports.updateBookById = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    return res.json({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};


exports.deleteBookById = async(req,res)=>{
    try{
        await Book.findByIdAndRemove(req.params.id);
        return res.status(200).send({message:"Book successfully deleted"});
    }catch(err){
        return res.status(500).send(err);
    }
}