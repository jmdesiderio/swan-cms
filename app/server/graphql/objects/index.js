const merge = require('lodash/merge')

const { schema: UserSchema } = require('./User')

const schema = [
  UserSchema
]

const resolvers = merge(
  {}
)

module.exports = {
  schema,
  resolvers
}
