// const express = require('express'),
//     router = express.Router()
//     Book = require('./models/bookModel');

// const express = require('express');

// var routes = (Book) => {
//     var bookRouter = express.Router();

//     bookRouter.route('/')
//         .post((req, res) => {
//             var book = new Book(req.body);

//             book.save();
//             re.status(201).send(book);
//         })
//         .get((req, res) => {
//             Book.find({}, (err, books) => {
//                 if(err)
//                     res.status(500).send(err);
//                 else
//                     res.json(books);
//             });
//         });
    
//     bookRouter.route('/:bookId')
//         .get((req, res) => {
//             Book.findById(req.params.bookId, (err,book) => {
//                 if(err)
//                     res.status(500).send(err);
//                 else
//                     res.json(book);
//             });
//         });
    
//     return bookRouter;
// }

// module.exports = routes;