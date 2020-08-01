const { model, Schema } = require('mongoose')

const TestsSchema = new Schema({
  subjectType: String,
  question: String,
  variants: Array
})

const Test = model('test', TestsSchema)

module.exports = { Test }