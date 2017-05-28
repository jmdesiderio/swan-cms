const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const nunjucks = require('nunjucks')

const { authMiddleware } = require('./auth')
const schema = require('./graphql')
require('./db')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cookieParser())
app.use(bodyParser.json())
app.use(authMiddleware())
app.use(express.static('public'))

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

// ADMIN
app.use(
  '/admin',
  express.Router().get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })
)

// GRAPHQL
app.use(
  '/graphql',
  graphqlExpress((req, res) => {
    return {
      context: { req, res },
      schema: schema,
      debug: true
    }
  })
)
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

// TEMPLATES
app.get('*', (req, res) => {
  const template = req.path === '/' ? 'index' : req.path.slice(1)

  res.render(template + '.html', (err, html) => {
    if (err) res.status(404).render('404.html')
    else res.send(html)
  })
})

// START
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
