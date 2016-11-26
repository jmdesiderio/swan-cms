export const schema = `
  input UserInput {
    username: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
    passwordConfirmation: String!
    admin: Boolean
    client: Boolean
    pending: Boolean
    passwordResetRequired: Boolean
  }
`
