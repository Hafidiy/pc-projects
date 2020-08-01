const config = require('config')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const route = require('express').Router()
const auth = require('../../middleware/auth')

// User model
const User = require('../../models/User')

// @route   POST api/auth
// @desc    Auth user
// @access  Public
route.post('/', async (req, res) => {
  const { email, password } =  req.body

  // Simple validation
  if(!email || !password) {
    res.status(400).json({msg: 'Please enter all fields'})
    return 0
  }

  // Check for existing user
  const user = await User.findOne({ email: email })
  if(!user){
    res.status(404).json({ msg: 'User doesn\'t exist' })
    return 0
  }

  // Validate password
  bcryptjs.compare(password, user.password)
    .then(isMatch => {
      if (!isMatch) {
        res.status(400).json({ msg: 'Invalid credentials' })
        return 0
      }

      jwt.sign(
        { id: user._id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err

          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email
            }
          })
        }
      )
    })
})

// @route   GET api/auth/user
// @desc    GET user data
// @access  Private
route.get('/user', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password')

  if(!user) {
    res.status(404).json({msg: 'User not found'})
    return 0
  }

  res.json(user)
})

module.exports = route