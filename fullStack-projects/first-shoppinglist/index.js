const cors = require('cors')
const path = require('path')
const config = require('config')
const express = require('express')
const mongoose = require('mongoose')

const auth = require('./routes/api/auth')
const items = require('./routes/api/items')
const users = require('./routes/api/users')

const app = express()

// body parse to JSON
app.use(cors())
app.use(express.json())

// DB config
const db = config.get('mongoURL')

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Use routes
app.use('/api/users', users)
app.use('/api/items', items)
app.use('/api/auth', auth)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))