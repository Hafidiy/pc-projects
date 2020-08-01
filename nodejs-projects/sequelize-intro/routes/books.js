const router = require('express').Router()

const { Op } = require('sequelize')

const Joi = require('joi')
const uuid = require('uuid')

const Book = require('../models/Book')

const validateBook = book => {
  const bookSchema = {
    title: Joi.string().required().min(3),
    author: Joi.string().required().min(3),
    body: Joi.string().required().min(20),
    isPublished: Joi.boolean().required()
  }

  return Joi.validate(book, bookSchema)
}

router.get('/test', async (req, res) => {
  const books = await Book.findAll({ limit: 1, offset: 2 })

  console.log(books[0].title)

  res.json({ api: 'test' })
})

router.get('/', async (req, res) => {
  const books = await Book.findAll()

  if(!books.length) {
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.json({ sucess: true, data: books })
})

router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  
  if(!book){
    res.status(404).json({ sucess: false, msg: 'Not found' })
  }

  res.json({ sucess: true, data: book })
})

router.post('/', async (req, res) => {
  const { error } = validateBook(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  req.body.id = uuid.v4()
  await Book.sync()
  const book = await Book.create(req.body)

  if(!book){
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.status(201).json({ sucess: true, data: book })
})

router.put('/:id', async (req, res) => {
  let book = await Book.findByPk(req.params.id)
  
  if(!book){
    res.status(404).json({ sucess: false, msg: 'Not found' })
  }

  const { error } = validateBook(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  await Book.update(req.body, {
    where: { id: req.params.id }
  })

  book = await Book.findByPk(req.params.id)

  res.json({ sucess: true, data: book })
})

router.delete('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  
  if(!book){
    res.status(404).json({ sucess: false, msg: 'Not found' })
  }

  await Book.destroy({ where: { id: req.params.id } })

  res.json({ sucess: true, msg: 'Book deleted' })
})

module.exports = router