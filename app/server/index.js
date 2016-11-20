// @flow

const express = require('express')
const graphqlHTTP = require('express-graphql')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
const { schema, root } = require('./graphql')

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

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.get('*', (req, res) => {
  const template = (req.path === '/') ? 'index' : req.path.slice(1)

  res.render(template + '.html', (err, html) => {
    if (err) res.status(404).render('404.html')
    else res.send(html)
  })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
