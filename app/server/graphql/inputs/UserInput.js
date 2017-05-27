const schema = `
  input UserInput {
    username: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }
`

module.exports = {
  schema
}
