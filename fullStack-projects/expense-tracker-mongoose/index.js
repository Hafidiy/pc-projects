const path = require('path')
const express = require('express')

const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const colors = require('colors')

require('dotenv').config()

const connectDB = require('./config/db')

connectDB()

// dotenv.config({ path: './config/config.env' })

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => res.send('Hi!'))
app.use('/api/v1/transactions', require('./routes/transactions'))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server starting in ${process.env.NODE_ENV} mode on ${PORT}`.black.bold))