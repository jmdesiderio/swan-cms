const { createFieldGroup } = require('../../actions/FieldGroupActions')

const schema = `
  createFieldGroup(input: FieldGroupInput): FieldGroup
`

const resolvers = {
  createFieldGroup: (root, { input }, context) => {
    return createFieldGroup(input)
  }
}

module.exports = {
  schema,
  resolvers
}
