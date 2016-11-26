import merge from 'lodash/merge'

import { schema as userSchema, resolvers as userResolvers } from './user'

export const schema = [`
  type Mutation {
    ${userSchema}
  }
`]

export const resolvers = {
  Mutation: merge(
    userResolvers
  )
}
