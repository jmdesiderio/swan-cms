import merge from 'lodash/merge'

import { schema as userSchema, resolvers as userResolvers } from './user'

export const schema = `
  type Query {
    ${userSchema}
  }
`

export const resolvers = {
  Query: merge(
    userResolvers
  )
}
