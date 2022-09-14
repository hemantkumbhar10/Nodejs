const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    isbn:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true,
    }
});


const Book  = mongoose.model('book', BookSchema);

module.exports = Book;