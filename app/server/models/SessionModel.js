import { Model } from 'objection'
import User from './UserModel'

export default class Session extends Model {
  static tableName = 'sessions'

  static jsonSchema = {
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

  static relationMappings = {
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
