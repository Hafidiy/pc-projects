const { Schema, model } = require('mongoose')

const Joi = require('joi')
const _ = require('lodash')
const jwt = require('jsonwebtoken')

const pricingPlanSchema = new Schema({
  title: {
    type: String,
    enum: ['free', 'premium', 'cinematic'],
  },
  updatedDate: {
    type: Date,
  }
})

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  firstName: {
    type: String,
    default: 'Unknown'
  },
  lastName: {
    type: String,
    default: 'Unknown'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  pricingPlan: {
    type: pricingPlanSchema,
    default: {
      title: 'free',
      updatedDate: Date.now()
    },
    required: true
  },
  rights: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String,
    default: '/images/avatar.png',
    required: true
  }, 
  comments: [{
    ref: 'Comments',
    type: Schema.Types.ObjectId,
  }],
  likedComments: [{
    ref: 'Comments',
    type: Schema.Types.ObjectId,
  }],
  disLikedComments: [{
    ref: 'Comments',
    type: Schema.Types.ObjectId,
  }],
  reviews: [{
    ref: 'Reviews',
    type: Schema.Types.ObjectId,
  }],
  likedReviews: [{
    ref: 'Reviews',
    type: Schema.Types.ObjectId,
  }],
  disLikedReviews: [{
    ref: 'Reviews',
    type: Schema.Types.ObjectId,
  }],
  isBanned: {
    type: Boolean,
    default: false
  },
  flixId: {
    type: Number,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
})

userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    _.pick(this, ['_id']),
    // { _id: this._id, name: this.name },
    // config.get('jwtPrivateKey')
    process.env.JWT_CYPHER
  )
}

const User = model('Users', userSchema)

const validateUser = user => {
  const userSchema = {
    userName: Joi.string().required().min(5).max(50),
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }

  return Joi.validate(user, userSchema)
}

module.exports = { User, validateUser }