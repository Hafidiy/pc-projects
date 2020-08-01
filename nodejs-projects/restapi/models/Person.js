const { Schema, model } = require('mongoose')

const PersonSchema = new Schema({
  name:{
    first: String,
    last: String
  },
  avatar: String,
  gender: String,
  email: String,
  age: Number,
  cell: String
})

module.exports = Person = model('person', PersonSchema)