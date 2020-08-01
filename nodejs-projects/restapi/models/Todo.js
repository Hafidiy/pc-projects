const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Todo = model('todo', TodoSchema)