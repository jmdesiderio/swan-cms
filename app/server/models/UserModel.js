import { Model } from 'objection'

export default class User extends Model {
  static tableName = 'users'

  static jsonSchema = {
    type: 'object',
    required: ['username', 'email', 'password'],

    properties: {
      id: { type: 'integer' },
      username: { type: 'string', minLength: 1, maxLength: 100 },
      firstName: { type: 'string', minLength: 1, maxLength: 100 },
      lastName: { type: 'string', minLength: 1, maxLength: 100 },
      email: { type: 'string', format: 'email', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      admin: { type: 'boolean' },
      client: { type: 'boolean' },
      locked: { type: 'boolean' },
      suspended: { type: 'boolean' },
      pending: { type: 'boolean' },
      archived: { type: 'boolean' },
      lastLoginDate: { type: 'string', format: 'date-time' },
      lastLoginAttemptIp: { type: 'string', format: 'ipv4' },
      invalidLoginWindowStart: { type: 'string', format: 'date-time' },
      invalidLoginCount: { type: 'integer' },
      lastInvalidLoginDate: { type: 'string', format: 'date-time' },
      lockoutDate: { type: 'string', format: 'date-time' },
      verificationCode: { type: 'string', minLength: 1, maxLength: 100 },
      verificationCodeIssuedDate: { type: 'string', format: 'date-time' },
      unverifiedEmail: { type: 'string', minLength: 1, maxLength: 255 },
      passwordResetRequired: { type: 'boolean' },
      lastPasswordChangeDate: { type: 'string', format: 'date-time' },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
      uuid: { type: 'string', format: 'date-time' }
    }
  }
}
