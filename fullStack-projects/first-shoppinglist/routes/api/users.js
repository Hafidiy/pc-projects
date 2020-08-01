const config = require('config')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const route = require('express').Router()

// User model
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register new user
// @access  Public
route.post('/', async (req, res) => {
  const { name, email, password } =  req.body

  // Simple validation
  if(!name || !email || !password) {
    res.status(400).json({msg: 'Please enter all fields'})
    return 0
  }

  // Check for existing user
  const isExist = await User.findOne({ email: email })
  if(isExist){
    res.status(400).json({ msg: 'User already exists' })
    return 0
  }

  const newUser = new User({
    name, email, password
  })

  // Create salt & hash
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err

      newUser.password = hash
      const saveUser = await newUser.save()

      jwt.sign(
        { id: saveUser._id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err

          res.json({
            token,
            user: {
              id: saveUser._id,
              name: saveUser.name,
              email: saveUser.email
            }
          })
        }
      )
    })
  })
})

module.exports = route