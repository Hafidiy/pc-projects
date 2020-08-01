const { model, Schema } = require('mongoose')

const Joi = require('joi')
const _ = require('lodash')
const config = require('config')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    _.pick(this, ['_id', 'name', 'email']),
    // { _id: this._id, name: this.name },
    // config.get('jwtPrivateKey')
    'jwtPrivateKey'
  )
}

const User = model('user', userSchema)

const validateUser = user => {
  const userSchema = {
    name: Joi.string().required().min(5).max(50),
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }

  return Joi.validate(user, userSchema)
}

module.exports = { User, validateUser }