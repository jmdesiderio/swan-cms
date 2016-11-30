import { getUser } from '../../actions/UserActions'
import { verifyToken } from '../../actions/TokenActions'

export const schema = `
  user: User
  getUser(id: Int): User
  verifyUser: Boolean
`

export const resolvers = {
  user: (root, input, context) => {
    return getUser(context.req.user.id)
  },
  getUser: (root, { id }, context) => {
    return getUser(id)
  },
  verifyUser: (root, input, context) => {
    const { req, res } = context
    verifyToken(req, res)
    return Boolean(req.user)
  }
}
