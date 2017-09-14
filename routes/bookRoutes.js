const express = require('express');

const routes = function(Book) {
    var bookRouter = express.Router();
    
    bookRouter.route('/')
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
    
    bookRouter.use('/:bookId', (req,res,next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if(err)
                res.status(500).send(err);
            else if (book){
                req.book = book;
                next();
            } else {
                res.status(404).send('No Book Found');
            }
        });
    });
    
    bookRouter.route('/:bookId')
        .get((req,res) => {
            res.json(req.book);
        })
        .put((req,res) => {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            
            req.book.save((err) => {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.book);
            });
        })
        .patch((req,res) => {
            if(req.body._id)
                delete req.body._id;
            
            for (var p in req.body) {
                req.book[p] = req.body[p];
            }

            req.book.save((err) => {
                if(err) 
                    res.status(500).send(err);
                else {
                    res.json(req.book);
                }
            });
        })
        .delete(function(req,res){
            req.book.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return bookRouter;
};

module.exports = routes;