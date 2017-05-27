const { getUserById } = require('../../actions/UserActions')

const schema = `
  currentUser: User
  getUserById(id: Int): User
`

const resolvers = {
  currentUser: (root, input, context) => {
    if (!context.req.user) throw new Error('No user session, need to log in')
    return getUserById(context.req.user.id)
  },
  getUserById: (root, { id }, context) => {
    return getUserById(id)
  }
}

module.exports = {
  schema,
  resolvers
}
