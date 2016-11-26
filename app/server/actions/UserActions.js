import bcrypt from 'bcryptjs'

import User from '../models/UserModel'

export function getUser (id) {
  return User
    .query()
    .findById(id)
}

export function createUser ({
  username,
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation,
  admin,
  client,
  pending,
  passwordResetRequired
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
      password: hash,
      admin,
      client,
      pending,
      passwordResetRequired
    })
}
