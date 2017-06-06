const merge = require('lodash/merge')

const { schema: fieldGroupSchema, resolvers: fieldGroupResolvers } = require('./fieldGroup')
const { schema: userSchema, resolvers: userResolvers } = require('./user')

const schema = [`
  type Query {
    ${fieldGroupSchema}
    ${userSchema}
  }
`]

const resolvers = {
  Query: merge(
    fieldGroupResolvers,
    userResolvers
  )
}

module.exports = {
  schema,
  resolvers
}
