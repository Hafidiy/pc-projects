const router = require('express').Router()

const { User, validateUser } = require('../models/User')

const { sendError } = require('../utils')
const _ = require('lodash')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateUser(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  const user = await User.findOne({ email: req.body.email })

  if(user){
    res.status(400).send(sendError('This email has existed yet'))
    return 0
  }
  
  try{
    // agar o'tsa qo'shib qo'yamiz
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt())
    const users = await User.insertMany([req.body])
  
    // uwa objectti qaytarvoramz
    res.status(201).send({
      success: true,
      data: _.pick(users[0], ['_id', 'name', 'email'])
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router