// @flow

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from './graphql'
import nunjucks from 'nunjucks'
import './db'

const app = express()

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

// ADMIN
app.use('/admin', express.Router().get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
}))

// GRAPHQL
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
  schema: schema,
  debug: true
}))).use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// TEMPLATES
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
