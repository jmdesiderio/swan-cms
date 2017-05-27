const { createUser } = require('../../actions/UserActions')

const schema = `
  createUser(input: UserInput): User
`

const resolvers = {
  createUser: (root, { input }, context) => {
    return createUser(input)
  }
}

module.exports = {
  schema,
  resolvers
}
