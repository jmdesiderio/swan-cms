const { createFieldGroup, updateFieldGroup, deleteFieldGroup } = require('../../actions/FieldGroupActions')
const { checkContextForAuth } = require('../../actions/SessionActions')

const schema = `
  createFieldGroup(input: FieldGroupInput): FieldGroup
  updateFieldGroup(id: Int! input: FieldGroupInput): FieldGroup
  deleteFieldGroup(id: Int!): Boolean
`

const resolvers = {
  createFieldGroup: (root, { input }, context) => {
    checkContextForAuth(context)
    return createFieldGroup(input)
  },
  updateFieldGroup: (root, { id, input }, context) => {
    checkContextForAuth(context)
    return updateFieldGroup(id, input)
  },
  deleteFieldGroup: (root, { id }, context) => {
    checkContextForAuth(context)
    return deleteFieldGroup(id)
  }
}

module.exports = {
  schema,
  resolvers
}
