const { model, Schema } = require('mongoose')

const Joi = require('joi')

const { courseSchema } = require('./Course')
const { customerSchema } = require('./Customer')


const enrollmentSchema = new Schema({
  customer: {
    type: new Schema({
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      }
    }),
    required: true
  },
  course: {
    type: new Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
      }
    }),
    required: true
  },
  courseFee: {
    type: Number,
    default: 0,
    required: true
  },
  dateStart: {
    type: Date,
    default: Date.now()
  }
})

const Enrollment = model('enrollment', enrollmentSchema)

const validateEnrollment = enrollment => {
  const enrollmentSchema = {
    customerId: Joi.string().required(),
    courseId: Joi.string().required(),
    courseFee: Joi.number()
  }

  return Joi.validate(enrollment, enrollmentSchema)
}

module.exports = { Enrollment, validateEnrollment }