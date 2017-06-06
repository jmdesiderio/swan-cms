const bcrypt = require('bcryptjs')
const { logAndError } = require('../utils/logAndError')
const User = require('../models/UserModel')

function getUserById (id) {
  return User.query().findById(id).catch(logAndError)
}

function createUser ({ username, firstName, lastName, email, password, passwordConfirmation }) {
  if (password !== passwordConfirmation) {
    logAndError('Passwords do not match')
  }

  const hash = bcrypt.hashSync(password, 10)

  return User.query()
    .insertAndFetch({
      username,
      firstName,
      lastName,
      email,
      password: hash
    })
    .catch(logAndError)
}

module.exports = {
  getUserById,
  createUser
}
