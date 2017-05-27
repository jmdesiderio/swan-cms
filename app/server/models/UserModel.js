const { Model } = require('objection')

class User extends Model {
  static get tableName () { return 'users' }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['username', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 100 },
        firstName: { type: 'string', minLength: 1, maxLength: 100 },
        lastName: { type: 'string', minLength: 1, maxLength: 100 },
        email: { type: 'string', format: 'email', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }

  $beforeInsert () {
    this.username = this.username.trim()
    if (this.firstName) this.firstName = this.firstName.trim()
    if (this.lastName) this.lastName = this.lastName.trim()
    this.email = this.email.trim()
  }

  getFullName () {
    return `${this.firstName || ''} ${this.lastName || ''}`.trim()
  }

  getName () {
    return this.getFullName() || this.username
  }

  getFriendlyName () {
    return this.firstName || this.username
  }
}

module.exports = User
