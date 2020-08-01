const Joi = require('joi')
const route = require('express').Router()

// Todo model
const Todo = require('../../models/Todo')

const validateTodo = todo => {
  todoSchema = {
    title: Joi.string().required().min(3),
    completed: Joi.boolean().required()
  }

  return Joi.validate(todo, todoSchema)
}

// @route   GET api/todos
// @desc    GET all todos
// @access  Public
route.get('/', async (req, res) => {
  try{
    const todo = await Todo
    .find().limit(req.query.limit ? parseInt(req.query.limit) : 0)
    .skip(req.query.limit && req.query.page && req.query.page !== '0'
      ? parseInt(req.query.limit)*(parseInt(req.query.page)-1)
      : null)
    
    res.json(todo)
  } catch(err){
    res.status(404).json(err)
  }
})

// @route   GET api/todos/12312323nbnbn23mnasdaffff
// @desc    GET todo by id
// @access  Public
route.get('/:id', async (req, res) => {
  if(req.params.id.length !== 24){
    res.status(404).json({message: 'Not found!'})
    return 0
  }
  
  res.status(200).json(await Todo.findOne({_id: req.params.id}))
})

// @route   POST api/todos
// @desc    POST add todo
// @access  Public
route.post('/', async (req, res) => {
  const { error } = validateTodo(req.body)

  if(error){
    res.status(400).json({message: error.details[0].message})
    return 0
  }

  const tmpDel = await Todos.insertMany([req.body])
  await Todo.deleteOne({_id: tmpDel[0]._id})

  res.status(201).json(tmpDel[0])
})

// @route   PUT api/todos/123123a232323b23232lccffgg
// @desc    PUT todo by id
// @access  Public
route.put('/:id', async (req, res) => {
  if(req.params.id.length !== 24){
    res.status(404).json({message: 'Not found!'})
    return 0
  }

  const todo = await Todo.find({_id: req.params.id})

  if(!todo.length){
    res.status(404).json({message: 'Not found!'})
    return 0
  }

  const { error } = validateTodo(req.body)

  if(error){
    res.status(400).json({message: error.details[0].message})
    return 0
  }

  todo[0].title = req.body.title
  todo[0].completed = req.body.completed

  res.status(200).json(todo[0])
})

// @route   DELETE api/todos
// @desc    DELETE todo by id
// @access  Public
route.delete('/:id', async (req, res) => {
  if(req.params.id.length !== 24){
    res.status(404).json({message: 'Not found!'})
    return 0
  }

  const todo = await Todo.find({_id: req.params.id})

  if(!todo.length){
    res.status(404).json({message: 'Not found!'})
    return 0
  }

  res.status(200).json(todo[0])
})

// @route   PATCH api/todos
// @desc    PATCH add todo
// @access  Public
route.patch('/', async (req, res) => {
  const tmp = await Todo.insertMany(req.body)

  res.status(201).json(tmp)
})

module.exports = route