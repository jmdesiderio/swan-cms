import { loginAuth, logoutAuth } from '../../actions/SessionActions'

export const schema = `
  loginAuth(username: String!, password: String!): Boolean
  logoutAuth: Boolean
`

export const resolvers = {
  loginAuth: (root, { username, password }, context) => {
    return loginAuth(username, password, context.res)
  },
  logoutAuth: (root, input, context) => {
    return logoutAuth(context.req, context.res)
  }
}
