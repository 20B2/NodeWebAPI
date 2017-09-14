const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost:27017/bookapi');
// const connString = 'mongodb://localhost/bookapi'
// mongoose.connect(connString);

//Custom Dependencies 
const Book = require('./models/bookModel');

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers
var bookRouter = require('./routes/bookRoutes')(Book);

//INLINE ROUTING
// var bookRouter = express.Router();


// bookRouter.route('/books')
//     .post((req, res) => {
//         var book = new Book(req.body);

//         book.save();
//         // res.send(book);
//         res.status(201).send(book);
//     })
//     .get(function(req,res){
//         var query ={};

//         if(req.query.genre){
//             req.query = re.query.genre;
//         }

//         // Book.find({}, function(err,books){
//         Book.find(query, function(err,books){
//             if(err)
//                 res.send(err);
//             else   
//                 res.json(books);
//         });
//     });

// bookRouter.route('/Books/:bookId')
//     .get(function(req,res) {
//         Book.findById(req.params.bookId, function(err,book) {
//             if(err)
//                 res.status(500).send(err);
//             else 
//                 res.json(book);
//         });
//     });

app.use('/api', bookRouter);

app.get('/', (req,res) => {
    res.send('REST API with Node and Express');
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});