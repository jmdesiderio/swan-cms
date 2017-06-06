const FieldGroup = require('../models/FieldGroupModel')

function getFieldGroups () {
  return FieldGroup.query()
}

function createFieldGroup ({ name }) {
  return FieldGroup.query()
    .insertAndFetch({ name })
    .catch(err => {
      throw new Error(err)
    })
}

module.exports = {
  getFieldGroups,
  createFieldGroup
}
