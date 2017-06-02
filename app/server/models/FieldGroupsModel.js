const Base = require('./BaseModel')

class FieldGroups extends Base {
  static get tableName () {
    return 'fieldGroups'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }
}

module.exports = FieldGroups
