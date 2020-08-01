require('dotenv').config({ path: './config/config.env' })

const express = require('express')

const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// Database
const db = require('./config/db')

const app = express()

app.use(cors())
app.use(helmet())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.get('/', (req, res) => res.send('Assalom Alekum'))

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Falied:   ', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))