import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  direct: true,
  name: 'hostname'
})

export default transporter
