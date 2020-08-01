const router = require('express').Router()

const { Op } = require('sequelize')

const Joi = require('joi')
const uuid = require('uuid')

const User = require('../models/User')
const Todo = require('../models/Todo')

Todo.belongsTo(User)
User.hasMany(Todo)

const validateUser = user => {
  const userSchema = {
    name: Joi.string().required().min(3),
    age: Joi.number().required(),
  }

  return Joi.validate(user, userSchema)
}

router.get('/', async (req, res) => {
  const users = await User.findAll({ include: [ Todo ] })

  if(!users.length) {
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.json({ sucess: true, data: users })
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  
  if(!user){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  res.json({ sucess: true, data: user })
})

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  req.body.id = uuid.v4()
  await User.sync()
  const user = await User.create(req.body)

  if(!user){
    res.status(500).json({ sucess: false, msg: 'Try later' })
    return 0
  }

  res.status(201).json({ sucess: true, data: user })
})

router.put('/:id', async (req, res) => {
  let user = await User.findByPk(req.params.id)
  
  if(!user){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  const { error } = validateUser(req.body)

  if(error){
    res.status(400).json({ sucess: false, msg: error.details[0].message })
    return 0
  }

  await User.update(req.body, {
    where: { id: req.params.id }
  })

  user = await User.findByPk(req.params.id)

  res.json({ sucess: true, data: user })
})

router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  
  if(!user){
    res.status(404).json({ sucess: false, msg: 'Not found' })
    return 0
  }

  await User.destroy({ where: { id: req.params.id } })

  res.json({ sucess: true, msg: 'Book deleted' })
})

module.exports = router