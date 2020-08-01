const { Schema, model } = require('mongoose')
const Joi = require('joi')

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  isVip: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  bonusPoints: {
    type: Number,
    default: 0,
    required: true,
  }
})

const Customer = model('customer', customerSchema)

const validateCustomer = customer => {
  const customerSchema = {
    name: Joi.string().required().min(5).max(50),
    isVip: Joi.boolean().required(),
    phone: Joi.string().required().min(5).max(50)
  }

  return Joi.validate(customer, customerSchema)
}

module.exports = { Customer, validateCustomer, customerSchema }