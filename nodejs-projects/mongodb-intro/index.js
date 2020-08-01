const express = require('express')
const mongoose = require('mongoose')

const app = express()

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: String,
  date: {
    type: Date,
    default: Date.now
  },
  isPublished: {
    type: Boolean,
    required: true
  },
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    }
  },
})

const Book = mongoose.model('book', bookSchema)

const createBook = async () => {
  const book = new Book({
    name: 'Alvido Bolalik',
    author: 'Toxir Malik',
    isPublished: true,
    price: 10
  })
  try {
    const savedBook = await book.save()
    console.log(savedBook)
  } catch(err){
    console.log('Error: ', err)
  }
}

const getBooks = async () => {
  const books = await Book
    // .find({author: /^A/})
    // .find({author: /lik$/})
    .find({author: /.*abdulla.*/i})
    // .or([{author: 'Toxir Malik'}, {name: 'Ikki eshik orasi'}])
    // .and([{price: {$gte: 15}}, {price: {$lte: 25}}])
    // .select({ name: 1, price: 1 })
  console.log(books)
}

const updateBook = async id => {
  await Book.findByIdAndUpdate(id, { author: 'Gabriel Garsia Markes' })

  const updatedBook = await Book.findById(id)

  console.log(updatedBook)
}

const deleteBook = async id => {
  const result = await Book.findByIdAndDelete(id)

  console.log(result)
}

createBook()

mongoose.connect('mongodb://localhost/mongodb-intro', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error :', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))