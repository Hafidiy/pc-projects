const path = require('path')
const express = require('express')

const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')

require('dotenv').config({ path: './config/config.env' })

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.json({msg: 'OK'}))
app.use('/api/poll', require('./routes/poll'))

app.use(helmet())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))