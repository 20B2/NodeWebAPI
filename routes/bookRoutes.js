const express = require('express');

const routes = function(Book) {
    // var bookRouter = require('./routes/bookRoutes')(Book);    
    var bookRouter = express.Router();
    
    bookRouter.route('/books')
        .post((req, res) => {
            var book = new Book(req.body);
    
            book.save();
            // res.send(book);
            res.status(201).send(book); 
        })
        .get(function(req,res){
            var query ={};
    
            if(req.query.genre){
                req.query = re.query.genre;
            }
    
            // Book.find({}, function(err,books){
            Book.find(query, function(err,books){
                if(err)
                    res.send(err);
                else   
                    res.json(books);
            });
        });
    
    bookRouter.route('/Books/:bookId')
        .get(function(req,res) {
            Book.findById(req.params.bookId, function(err,book) {
                if(err)
                    res.status(500).send(err);
                else 
                    res.json(book);
            });
        });
    return bookRouter;
};

module.exports = routes;