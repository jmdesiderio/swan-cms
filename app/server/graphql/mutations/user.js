import { createUser } from '../../actions/UserActions'

export const schema = `
  createUser(input: UserInput): User
`

export const resolvers = {
  createUser: (root, { input }, context) => {
    return createUser({ ...input })
  }
}
