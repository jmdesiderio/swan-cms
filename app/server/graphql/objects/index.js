const merge = require('lodash/merge')

const { schema: FieldGroupSchema } = require('./FieldGroup')
const { schema: UserSchema } = require('./User')

const schema = [
  FieldGroupSchema,
  UserSchema
]

const resolvers = merge(
  {}
)

module.exports = {
  schema,
  resolvers
}
