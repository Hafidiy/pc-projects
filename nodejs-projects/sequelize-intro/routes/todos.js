const router = require('express').Router()

const { Op } = require('sequelize')

const Joi = require('joi')
const uuid = require('uuid')

const Todo = require('../models/Todo')
const User = require('../models/User')

const validateTodo = todo => {
  const todoSchema = {
    title: Joi.string().required().min(3),
    completed: Joi.boolean().required(),
    userId: Joi.string().required(),
  }

  return Joi.validate(todo, todoSchema)
}

router.get('/', async (req, res) => {
  const todos = await Todo.findAll({ include: [ User ] })

  if(!todos.length) {
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.json({ sucess: true, data: todos })
})

router.get('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id)
  
  if(!todo){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  res.json({ sucess: true, data: todo })
})

router.post('/', async (req, res) => {
  const { error } = validateTodo(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  req.body.id = uuid.v4()
  await Todo.sync()
  const todo = await Todo.create(req.body)

  if(!todo){
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.status(201).json({ sucess: true, data: todo })
})

router.put('/:id', async (req, res) => {
  let todo = await Todo.findByPk(req.params.id)
  
  if(!todo){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  const { error } = validateTodo(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  await Todo.update(req.body, {
    where: { id: req.params.id }
  })

  todo = await Todo.findByPk(req.params.id)

  res.json({ sucess: true, data: todo })
})

router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id)
  
  if(!todo){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  await Todo.destroy({ where: { id: req.params.id } })

  res.json({ sucess: true, msg: 'Book deleted' })
})

module.exports = router