const path = require('path')
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser= require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

// View engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('contact')
})

app.post('/send', async (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Emails</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'woodrow95@ethereal.email',
        pass: '9h2qudsakgsaTeny2B'
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Nodemailer Contact" <woodrow95@ethereal.email>', // sender address
    to: "hafidiyalfayed@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  }, (err, info) => {
    if(err){
      return console.log('Error: ', err)
    }

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    res.render('contact', { msg: 'Email has been sent!' })
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))