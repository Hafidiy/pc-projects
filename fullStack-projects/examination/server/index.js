const cors = require('cors')
const route = require('./api')
const express = require('express')
const { Test } = require('./schema')
const { connect, connection } = require('mongoose')

connect('mongodb://localhost/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/tests', route)

const PORT = process.env.PORT || 8000
connection.once('open', () => app.listen(PORT, () => console.log(`Server has started in ${PORT}`)))