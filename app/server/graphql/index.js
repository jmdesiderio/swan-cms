const { buildSchema } = require('graphql')
import User from '../models/User'

const schema = buildSchema(`
  input UserInput {
    username: String
    email: String
    password: String
  }

  type User {
    id: ID!
    username: String
    email: String
    password: String
  }

  type Query {
    getUser(id: Int): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`)

const root = {
  getUser: ({ id }) => {
    return User
      .query()
      .findById(id)
  },
  createUser: ({ input }) => {
    return User
      .query()
      .insertAndFetch({
        username: input.username,
        email: input.email,
        password: input.password
      })
  }
}

module.exports = {
  schema,
  root
}
