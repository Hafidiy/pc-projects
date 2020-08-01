const express = require('express')
const { connect } = require('mongoose')

const cors = require('cors')
const config = require('config')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.send('<h3>Assalom alekum</h3>')
})

app.use('/api/categories', require('./routes/categories'))
app.use('/api/customers', require('./routes/customers'))
app.use('/api/courses', require('./routes/courses'))
app.use('/api/enrollments', require('./routes/enrollments'))
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

if (!config.get('jwtPrivateKey')){
  connect('mongodb://localhost/hometask', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ', err))

  const PORT = process.env.PORT || 8000
  app.listen(PORT, () => console.log(`${PORT} da server ishga tushdi...`))
} else {
  console.error('Maxfiy kalit kiritilmadi')
  // process.exit(1)
}