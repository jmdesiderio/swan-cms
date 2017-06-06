const merge = require('lodash/merge')

const { schema: FieldGroupInputSchema } = require('./FieldGroupInput')
const { schema: UserInputSchema } = require('./UserInput')

const schema = [
  FieldGroupInputSchema,
  UserInputSchema
]

const resolvers = merge(
  {}
)

module.exports = {
  schema,
  resolvers
}
