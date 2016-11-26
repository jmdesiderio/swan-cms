import { getUser } from '../../actions/User'

export const schema = `
  user(id: Int): User
`

export const resolvers = {
  user: (root, { id }, context, info) => {
    return getUser(id)
  }
}
