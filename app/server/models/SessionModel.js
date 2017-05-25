import path from 'path'
import { Model } from 'objection'
import User from './UserModel'

export default class Session extends Model {
  static tableName = 'sessions'

  static jsonSchema = {
    type: 'object',
    required: ['username', 'email', 'password'],

    properties: {
      id: { type: 'integer' },
      userId: { type: 'integer' },
      token: { type: 'string', minLength: 1, maxLength: 100 },
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
