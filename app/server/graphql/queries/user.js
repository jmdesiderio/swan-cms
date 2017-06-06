const { checkContextForAuth } = require('../../actions/SessionActions')
const { getUserById } = require('../../actions/UserActions')

const schema = `
  currentUser: User
  getUserById(id: Int!): User
`

const resolvers = {
  currentUser: (root, input, context) => {
    checkContextForAuth(context)
    return getUserById(context.req.user.id)
  },
  getUserById: (root, { id }, context) => {
    checkContextForAuth(context)
    return getUserById(id)
  }
}

module.exports = {
  schema,
  resolvers
}
