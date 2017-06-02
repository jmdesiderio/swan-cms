const FieldGroups = require('../models/FieldGroupsModel')

function getFieldGroups () {
  return FieldGroups.query()
}

function createFieldGroup ({ name }) {}

module.exports = {
  getFieldGroups,
  createFieldGroup
}
