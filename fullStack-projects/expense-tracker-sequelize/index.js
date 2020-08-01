const path = require('path')
const express = require('express')

require('dotenv').config()

const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')
const helmet = require('helmet')

const db = require('./config/db')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'client', 'build')))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.get('/', (req, res) => res.send('Assalom alekum'))

app.use('/api/v1/transactions', require('./routes/transactions'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html')))
}

db.authenticate()
  .then(() => console.log('Database connected'.cyan.bold))
  .catch(err => console.log('Error: '.red.bold, err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started in ${process.env.NODE_ENV} mode on ${PORT}`.grey.bold))