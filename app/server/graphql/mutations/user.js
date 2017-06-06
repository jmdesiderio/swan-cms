const { createUser } = require('../../actions/UserActions')
const { checkContextForAuth } = require('../../actions/SessionActions')

const schema = `
  createUser(input: UserInput): User
`

const resolvers = {
  createUser: (root, { input }, context) => {
    checkContextForAuth(context)
    return createUser(input)
  }
}

module.exports = {
  schema,
  resolvers
}
