const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

// Database URL
const { mongoURL } = require('./config/keys')

// Extra packages
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// routes
const people = require('./routes/api/people')
const todos = require('./routes/api/todos')

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'client', 'build')))

// connect with database
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Route API
app.use('/api/people', people)
app.use('/api/todos', todos)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 4004
app.listen(PORT, () => console.log(`server started on ${PORT}...`))