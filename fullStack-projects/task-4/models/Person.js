const { model, Schema } = require('mongoose')

const personSchema = new Schema({
  name: String,
  passport: {
    type: String,
    default: null
  },
  degree: {
    type: String,
    default: null,
  },
  soldier: {
    type: String,
    default: null
  }
})

const Person = model('person', personSchema)

module.exports = Person