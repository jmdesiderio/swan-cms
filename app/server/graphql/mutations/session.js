const { loginAuth, logoutAuth } = require('../../actions/SessionActions')

const schema = `
  loginAuth(username: String!, password: String!): Boolean
  logoutAuth: Boolean
`

const resolvers = {
  loginAuth: (root, { username, password }, context) => {
    return loginAuth(username, password, context.res)
  },
  logoutAuth: (root, input, context) => {
    return logoutAuth(context.req, context.res)
  }
}

module.exports = {
  schema,
  resolvers
}
