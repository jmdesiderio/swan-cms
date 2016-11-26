import merge from 'lodash/merge'

import { schema as authSchema, resolvers as authResolvers } from './auth'
import { schema as userSchema, resolvers as userResolvers } from './user'

export const schema = [`
  type Mutation {
    ${authSchema}
    ${userSchema}
  }
`]

export const resolvers = {
  Mutation: merge(
    authResolvers,
    userResolvers
  )
}
