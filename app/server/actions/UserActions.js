const bcrypt = require('bcryptjs')
const User = require('../models/UserModel')

function getUserById (id) {
  return User
    .query()
    .findById(id)
}

function createUser ({
  username,
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
}) {
  if (password !== passwordConfirmation) {
    throw new Error('Passwords do not match')
  }

  const hash = bcrypt.hashSync(password, 10)

  return User
    .query()
    .insertAndFetch({
      username,
      firstName,
      lastName,
      email,
      password: hash
    })
    .catch((err) => {
      throw new Error(err)
    })
}

module.exports = {
  getUserById,
  createUser
}
