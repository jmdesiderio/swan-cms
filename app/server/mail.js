const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  direct: true,
  name: 'hostname'
})

module.exports = transporter
