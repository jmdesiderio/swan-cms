import bcrypt from 'bcryptjs'
import User from '../models/UserModel'

export function getUserById (id) {
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
}
