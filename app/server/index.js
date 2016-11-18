const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

const admin = express.Router()
admin.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use('/admin', admin)

app.get('*', (req, res) => {
  res.send('hey')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
