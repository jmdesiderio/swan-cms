const merge = require('lodash/merge')

const { schema: userSchema, resolvers: userResolvers } = require('./user')

const schema = [`
  type Query {
    ${userSchema}
  }
`]

const resolvers = {
  Query: merge(
    userResolvers
  )
}

module.exports = {
  schema,
  resolvers
}
