const { logAndError } = require('../utils/logAndError')
const FieldGroup = require('../models/FieldGroupModel')

function getFieldGroups () {
  return FieldGroup.query().orderBy('name').catch(logAndError)
}

function getFieldGroupById (id) {
  return FieldGroup.query().findById(id).catch(logAndError)
}

function createFieldGroup ({ name }) {
  return FieldGroup.query().insertAndFetch({ name }).catch(logAndError)
}

function updateFieldGroup (id, { name }) {
  return FieldGroup.query().updateAndFetchById(id, { name }).catch(logAndError)
}

function deleteFieldGroup (id) {
  return FieldGroup.query().deleteById(id).then(numRows => numRows === 1).catch(logAndError)
}

module.exports = {
  getFieldGroups,
  getFieldGroupById,
  createFieldGroup,
  updateFieldGroup,
  deleteFieldGroup
}
