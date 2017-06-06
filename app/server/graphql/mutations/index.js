const merge = require('lodash/merge')

const { schema: fieldGroupSchema, resolvers: fieldGroupResolvers } = require('./fieldGroup')
const { schema: sessionSchema, resolvers: sessionResolvers } = require('./session')
const { schema: userSchema, resolvers: userResolvers } = require('./user')

const schema = [`
  type Mutation {
    ${fieldGroupSchema}
    ${sessionSchema}
    ${userSchema}
  }
`]

const resolvers = {
  Mutation: merge(
    fieldGroupResolvers,
    sessionResolvers,
    userResolvers
  )
}

module.exports = {
  schema,
  resolvers
}
