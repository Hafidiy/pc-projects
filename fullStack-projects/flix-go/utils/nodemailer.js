const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hafidiyalfayed@gmail.com',
        pass: 'A989799a'
    }
})

const mailOptions = {
    from: 'hafidiyalfayed@gmail.com',
    to: 'hafid90@list.ru',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

module.exports = { transporter, mailOptions }