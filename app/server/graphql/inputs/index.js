const merge = require('lodash/merge')

const { schema: UserInputSchema } = require('./UserInput')

const schema = [
  UserInputSchema
]

const resolvers = merge(
  {}
)

module.exports = {
  schema,
  resolvers
}
