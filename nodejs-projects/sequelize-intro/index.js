require('dotenv').config({ path: './config/config.env' })

const express = require('express')

const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// Database
const db = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.get('/', async (req, res) => res.send('Hi'))
app.use('/api/books', require('./routes/books'))
app.use('/api/todos', require('./routes/todos'))
app.use('/api/users', require('./routes/users'))

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(() => console.log('Failed...'))

app.use(helmet())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))