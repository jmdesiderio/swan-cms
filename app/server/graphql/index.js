import merge from 'lodash/merge'
import { makeExecutableSchema } from 'graphql-tools'

import { schema as QuerySchema, resolvers as QueryResolvers } from './queries'
import { schema as MutationSchema, resolvers as MutationResolvers } from './mutations'
import { schema as ObjectSchema, resolvers as ObjectResolvers } from './objects'
import { schema as InputSchema, resolvers as InputResolvers } from './inputs'

const schema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [
    schema,
    QuerySchema,
    MutationSchema,
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
