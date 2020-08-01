const fs = require('fs')
const path = require('path')
const express = require('express')

const cors = require('cors')

const Person = require('./models/Person')

const files = require('./routes/files')
const people = require('./routes/people')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/task-work', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(err))

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/files', files)
app.use('/api/people', people)

// // Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('public'))

//   app.get('*', (req, res) => {
//     res.sendfile(path.resolve(__dirname, 'public', 'index.html'))
//   })
// }

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))