const { Schema, model } = require('mongoose')
const { categorySchema } = require('./Category')

const Joi = require('joi')

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  tags: [String],
  trainer: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  category: {
    type: categorySchema,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
    required: true
  }
})

const Course = model('course', courseSchema)

const validateCourse = course => {
  const courseSchema = {
    tags: Joi.array().items(Joi.string()).required(),
    title: Joi.string().min(5).max(50).required(),
    category: Joi.string().required(),
    trainer: Joi.string().min(5).max(50).required(),
    status: Joi.string().required(),
    fee: Joi.number().required()
  }

  return Joi.validate(course, courseSchema)
}

module.exports = { Course, validateCourse, courseSchema }