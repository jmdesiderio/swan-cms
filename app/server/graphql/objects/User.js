const schema = `
  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String

    getFullName: String
    getName: String
    getFriendlyName: String
  }
`

module.exports = {
  schema
}
