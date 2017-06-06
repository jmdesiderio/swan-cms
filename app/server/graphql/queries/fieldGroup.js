const { getFieldGroups } = require('../../actions/FieldGroupActions')

const schema = `
  getFieldGroups: [ FieldGroup ]
`

const resolvers = {
  getFieldGroups: (root, input, context) => {
    return getFieldGroups()
  }
}

module.exports = {
  schema,
  resolvers
}
