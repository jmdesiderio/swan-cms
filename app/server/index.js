// @flow
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import nunjucks from 'nunjucks'

import { authMiddleware } from './auth'
import schema from './graphql'
import './db'

const app = express()
app.set('port', (process.env.PORT || 3000))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(authMiddleware())
app.use(express.static('public'))

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

// ADMIN
app.use('/admin', express.Router().get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
}))

// GRAPHQL
app.use('/graphql', graphqlExpress((req, res) => {
  return {
    context: { req, res },
    schema: schema,
    debug: true
  }
})).use('/graphiql', graphiqlExpress({
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

// START
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
