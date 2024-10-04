import express from 'express';
import createHomepageTemplate from './views/index.js';
import bookList from './views/bookList.js';
import BOOKS_DATA from './data/data.js';
import getBook from './views/book.js';
import edit from './views/edit.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/book', (req, res) => {
  res.send(bookList())
})

app.post('/book', (req, res) => {
  const {title, author} = req.body
  const id = Math.random().toString()

  BOOKS_DATA.push({id, title, author})

  res.redirect('/book/' + id)
});

app.get('/book/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);

  res.send(getBook(book))
})

app.get('/book/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find(b => b.id === req.params.id);
  res.send(edit(book))
})

app.put('/book/update/:id', (req, res) => {
  const {title, author} = req.body;
  const {id} = req.params;

  const newBook = {title, author, id};

  const idx = BOOKS_DATA.findIndex(b => b.id === id);
  BOOKS_DATA[idx] = newBook

  res.send(getBook(newBook));
})

app.delete('/book/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);
  BOOKS_DATA.splice(book, 1)
  res.send()
})

// listen to port
app.listen(3005, () => {
  console.log('App listening on port 3005');
});