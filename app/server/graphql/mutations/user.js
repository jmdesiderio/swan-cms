import { createUser } from '../../actions/User'

export const schema = `
  createUser(input: UserInput): User
`

export const resolvers = {
  createUser: (root, { input }, context, info) => {
    const { username, email, password } = input

    return createUser({
      username,
      email,
      password
    })
  }
}
