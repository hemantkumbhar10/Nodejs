const books = require('../controllers/book.controller');
const Auth = require('../middleware/verifyToken');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/books', books.getAllBooks);

    app.get('/book/:id', [Auth.verifyToken, Auth.verifyAdmin], books.getBookById);

    app.post('/book',[Auth.verifyToken, Auth.verifyAdmin], books.createBook);

    app.put('/book/:id',[Auth.verifyToken, Auth.verifyAdmin], books.updateBookById);
    
    app.delete('/book/:id',[Auth.verifyToken, Auth.verifyAdmin], books.deleteBookById);
}