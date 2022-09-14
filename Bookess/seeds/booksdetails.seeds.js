const { default: mongoose } = require("mongoose");
const Book = require('../models/book.model');
require('../config/db');

const books = [
  {
    isbn: "9781593279509",
    title: "Eloquent JavaScript, Third Edition",
    author: "Marijn Haverbeke",
    publisher: "No Starch Press",
  },
  {
    isbn: "9781491943533",
    title: "Practical Modern JavaScript",
    author: "Nicolás Bevacqua",
    publisher: "O'Reilly Media",
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    publisher: "No Starch Press",
  },
  {
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    publisher: "O'Reilly Media",
  },
  {
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    publisher: "O'Reilly Media",
  },
  {
    isbn: "9798602477429",
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    publisher: "Independently published",
  },
  {
    isbn: "9781484200766",
    title: "Pro Git",
    author: "Scott Chacon and Ben Straub",
    publisher: "Apress; 2nd edition",
  },
  {
    isbn: "9781484242216",
    title: "Rethinking Productivity in Software Engineering",
    author: "Caitlin Sadowski, Thomas Zimm0.000Z",
    publisher: "Apress",
  },
];


const seedDB = async()=>{
    // await User.deleteMany({});
    await Book.insertMany(books);
    console.log('Fake book data added to mongo :)');
};

seedDB().then((err)=>{
    mongoose.connection.close();
});
