import { getUser } from '../../actions/UserActions'

export const schema = `
  user: User
  getUser(id: Int): User
`

export const resolvers = {
  user: (root, input, context) => {
    return getUser(context.req.user.id)
  },
  getUser: (root, { id }, context) => {
    return getUser(id)
  }
}
