const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const db = require('./config/database')

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ', err))

const app = express()

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index', { layout: 'landing' }))

app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))