const Joi = require('joi')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const config = require('config')
const { auth } = require('./auth')
const { log } = require('./logger')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
// app.set('view engine', 'pug')

if(app.get('env') === 'development'){
  app.use(morgan('tiny'))
  console.log('Logger ishlavotti...')
}

// console.log(config.get('name'))
// console.log(config.get('mailserver.host'))
// console.log(config.get('mailserver.password'))

app.use(auth)
app.use(helmet())

let books = [
  {id: 1, name: 'rich dad poor dad'},
  {id: 2, name: 'good to great'},
  {id: 3, name: 'the war of art'},
  {id: 4, name: 'how to win friends and influence people'},
]

const validateBook = book => {
  const bookSchema = {
    name: Joi.string().required().min(3)
  }
  return Joi.validate(book, bookSchema)
}

app.get('/', async (req, res) => {
  res.send('<h1>Assalom alekum!</h1>')
})

app.get('/api/books', async (req, res) => {
  res.send(books)
})

app.get('/api/books/:id', async (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id))

  if(!book)
    res.status(404).send('Kitob topilmadi...')

  res.status(200).send(book)
})

app.post('/api/books', async (req, res) => {
  const { error } = validateBook(req.body)

  if(error) {
    res.status(400).send(error.details[0].message)
    return 0
  }

  const book = {
    id: books.length + 1,
    name: req.body.name
  }

  books.push(book)
  res.status(201).send(book)
})

app.put('/api/books/:id', async (req, res) => {
  // kitobni id bo'yicha qidirib topish
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id))

  if(bookIndex === -1){
    // agar kitob mavjud bo'masa, 404 qaytarish
    res.status(404).send('Kitob topilmadi...')
    return 0
  }

  // agar kitob topilsa so'rovni validatsiya qilish
  const { error } = validateBook(req.body)

  if(result.error) {
    // agar so'rov validatsiyadan o'tmasa, 400 qaytarish
    res.status(400).send(error.details[0].message)
    return 0
  }

  // agar so'rov validatsiyadan o'tsa kitobbi yengilap qaytarish
  books[bookIndex].name = req.body.name
  res.send(books[bookIndex])
})

app.delete('/api/books/:id', async (req, res) => {
  // kitobni id boyicha izlap topamiz
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id))

  if(bookIndex === -1){
    // agar topilmasa 404 qaytaramiza
    res.status(404).send('Kitob topilmadi...')
    return 0
  }

  // agar topilsa ocirib uwani ozini qaytarberamza
  res.send(books.splice(bookIndex, 1)[0])
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`${PORT} da server ishga tushdi...`))