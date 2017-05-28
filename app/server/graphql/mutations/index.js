const merge = require('lodash/merge')

const { schema: sessionSchema, resolvers: sessionResolvers } = require('./session')
const { schema: userSchema, resolvers: userResolvers } = require('./user')

const schema = [
  `
  type Mutation {
    ${sessionSchema}
    ${userSchema}
  }
`
]

const resolvers = {
  Mutation: merge(sessionResolvers, userResolvers)
}

module.exports = {
  schema,
  resolvers
}
