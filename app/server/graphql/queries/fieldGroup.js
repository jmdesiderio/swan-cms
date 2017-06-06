const { getFieldGroups, getFieldGroupById } = require('../../actions/FieldGroupActions')
const { checkContextForAuth } = require('../../actions/SessionActions')

const schema = `
  getFieldGroups: [ FieldGroup ]
  getFieldGroupById(id: Int!): FieldGroup
`

const resolvers = {
  getFieldGroups: (root, input, context) => {
    checkContextForAuth(context)
    return getFieldGroups()
  },
  getFieldGroupById: (root, { id }, context) => {
    checkContextForAuth(context)
    return getFieldGroupById(id)
  }
}

module.exports = {
  schema,
  resolvers
}
