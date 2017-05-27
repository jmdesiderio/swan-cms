const { Model } = require('objection')
const User = require('./UserModel')

class Session extends Model {
  static get tableName () { return 'sessions' }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['userId'],

      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
        token: { type: 'string' },
        enabled: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }

  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'sessions.userId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Session
