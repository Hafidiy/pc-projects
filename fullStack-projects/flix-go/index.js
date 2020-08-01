const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload')

const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const colors = require('colors')

require('dotenv').config()

const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(fileUpload())
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '10000mb' }))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hi!'))

app.use('/api/registration', require('./routes/main/registration'))
app.use('/api/auth', require('./routes/main/auth'))
app.use('/api/items', require('./routes/main/items'))

app.use('/api/admin/users', require('./routes/admin/users'))
app.use('/api/admin/comments', require('./routes/admin/comments'))
app.use('/api/admin/items', require('./routes/admin/items'))
app.use('/api/admin/reviews', require('./routes/admin/reviews'))

const PORT = process.env.PORT || 3003
app.listen(PORT, () => console.log(`Server started on ${process.env.NODE_ENV} mode on ${PORT}`.underline.magenta))