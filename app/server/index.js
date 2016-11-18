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
  switch (req.path) {
    case '/':
      return res.render('index.html')
    case '/about':
      return res.render('about.html')
    case '/blog/entry':
      return res.render('blog/entry.html')
    default:
      return res.status(404).render('404.html')
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
