const merge = require('lodash/merge')
const { makeExecutableSchema } = require('graphql-tools')

const { schema: QuerySchema, resolvers: QueryResolvers } = require('./queries')
const { schema: MutationSchema, resolvers: MutationResolvers } = require('./mutations')
const { schema: ObjectSchema, resolvers: ObjectResolvers } = require('./objects')
const { schema: InputSchema, resolvers: InputResolvers } = require('./inputs')

const schema = [`
  schema {
    query: Query
    mutation: Mutation
  }
`]

const executableSchema = makeExecutableSchema({
  typeDefs: [
    ...schema,
    ...QuerySchema,
    ...MutationSchema,
    ...ObjectSchema,
    ...InputSchema
  ],
  resolvers: merge(
    QueryResolvers,
    MutationResolvers,
    ObjectResolvers,
    InputResolvers
  )
})

module.exports = executableSchema
