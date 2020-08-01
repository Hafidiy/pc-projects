const router = require('express').Router()

const { User } = require('../models/User')

const { sendError } = require('../utils')

const Joi = require('joi')
const _ = require('lodash')
const bcrypt = require('bcrypt')

const validateUser = user => {
  const userSchema = {
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }

  return Joi.validate(user, userSchema)
}

router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateUser(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  const user = await User.findOne({ email: req.body.email })

  if(!user){
    res.status(400).send(sendError('Noto\'g\'ri email!'))
    return 0
  }
  
  try{
    const hashResult = await bcrypt.compare(req.body.password, user.password)

    if(!hashResult){
        res.status(400).send(sendError('Noto\'g\'ri parol!'))
        return 0
    }
  
    res.status(200)
    .header('x-auth-token', user.generateAuthToken())
    .send({
      success: true,
    //   data: _.pick(user, ['_id', 'email', 'name'])
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router