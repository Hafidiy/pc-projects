const router = require('express').Router()

const { User, validateUser } = require('../../models/User')

const bcrypt = require('bcrypt')
const { sendError } = require('../../utils')

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body)
  
  if(error){
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  const user = await User.findOne({ email: req.body.email })

  if(user){
    res.status(400).send(sendError('This email has existed yet'))
    return 0
  }
  
  try{
    let newFlixId
    const flixIds = await User.find({}, {flixId: 1})

    do {
      newFlixId = parseInt(Math.random().toString().slice(4, 10))
    } while (flixIds.findIndex(item => item.flixId === newFlixId) !== -1)

    req.body.flixId = newFlixId

    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt())
    const users = await User.insertMany([req.body])
    const user = await User.findOne({_id: users[0]._id}, {password: 0, __v: 0})
  
    res.status(201)
      .header('x-auth-token', user.generateAuthToken())
      .send({
        success: true
      })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router