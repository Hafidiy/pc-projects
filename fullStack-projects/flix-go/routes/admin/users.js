const router = require('express').Router()

const { User } = require('../../models/User')

const Joi = require('joi')
const bcrypt = require('bcrypt')
const { sendError } = require('../../utils')

const validateUser = user => {
  const userSchema = {
    email: Joi.string().required().email(),
    userName: Joi.string().required().min(5).max(50),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    pricingPlan: Joi.string().required(),
    rights: Joi.string().required()
  }

  return Joi.validate(user, userSchema)
}

const validatePasswords = passwords => {
  const passwordsSchema = {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
  }

  return Joi.validate(passwords, passwordsSchema)
}

router.get('/', async (req, res) => {
  try{
    let users = await User
      .find({}, {password: 0, __v: 0})
      .limit(req.query.limit ? parseInt(req.query.limit) : 0)
      .skip(req.query.limit && req.query.page && req.query.page !== '0'
        ? parseInt(req.query.limit)*(parseInt(req.query.page)-1)
        : null)

    res.json({
      success: true,
      data: users
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.get('/:id', async (req, res) => {
  try{
    const user = await User.findOne({_id: req.params.id}, {password: 0, __v: 0})

    if(!user){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    res.json({
      success: true,
      data: user
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.post('/:id', async (req, res) => {
  const { error } = validatePasswords(req.body)
  
  if(error){
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  try{
    let user = await User.findById(req.params.id)

    if(!user){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    const hashResult = await bcrypt.compare(req.body.oldPassword, user.password)

    if(!hashResult){
      res.status(400).send(sendError('Wrong password'))
      return 0
    }

    req.body.newPassword = await bcrypt.hash(req.body.newPassword, await bcrypt.genSalt())
    user.password = req.body.newPassword
    await User.findByIdAndUpdate(req.params.id, user)

    res.json({
      success: true,
      // data: user
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.put('/:id', async (req, res) => {
  const { error } = validateUser(req.body)
  
  if(error){
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  try{
    let user = await User.findById(req.params.id)

    if(!user){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    await User.findByIdAndUpdate(req.params.id, req.body)
    user = await User.findOne({_id: req.params.id}, {password: 0, __v: 0})

    res.json({
      success: true,
      data: user
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const user = await User.findOne({_id: req.params.id}, {password: 0, __v: 0})

    if(!user){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    await User.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      data: user
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router