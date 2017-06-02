const { Model } = require('objection')
const moment = require('moment')

class Base extends Model {
  $beforeUpdate () {
    this.updatedAt = moment().format()
  }
}

module.exports = Base
