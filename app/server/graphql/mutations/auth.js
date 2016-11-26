import { loginAuth, logoutAuth } from '../../actions/AuthActions'

export const schema = `
  loginAuth(username: String!, password: String!): User
  logoutAuth: Boolean
`

export const resolvers = {
  loginAuth: (root, { username, password }, context) => {
    return loginAuth(username, password, context.res)
  },
  logoutAuth: (root, input, context) => {
    return logoutAuth(context.res)
  }
}
