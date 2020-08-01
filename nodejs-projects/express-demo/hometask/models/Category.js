const { Schema, model } = require('mongoose')
const Joi = require('joi')

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Category = model('category', categorySchema)

const validateCategory = category => {
  const categorySchema = {
    name: Joi.string().required().min(3)
  }

  return Joi.validate(category, categorySchema)
}

module.exports = { Category, validateCategory, categorySchema }