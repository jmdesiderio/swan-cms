import merge from 'lodash/merge'

import { schema as sessionSchema, resolvers as sessionResolvers } from './session'
import { schema as userSchema, resolvers as userResolvers } from './user'

export const schema = [`
  type Mutation {
    ${sessionSchema}
    ${userSchema}
  }
`]

export const resolvers = {
  Mutation: merge(
    sessionResolvers,
    userResolvers
  )
}
