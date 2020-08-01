const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const stripe = require('stripe')('sk_test_yfAvtNeHYpAAhSNXbuIA2Evk00CVpEeet7')

const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Index Route
app.get('/', (req, res) => res.render('index'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))