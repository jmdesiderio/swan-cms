import { getUser } from '../../actions/UserActions'

export const schema = `
  user(id: Int): User
`

export const resolvers = {
  user: (root, { id }, context) => {
    return getUser(id)
  }
}
