import User from '../models/User'

export function getUser (id) {
  return User
    .query()
    .findById(id)
}

export function createUser ({
  username,
  email,
  password
}) {
  return User
    .query()
    .insertAndFetch({
      username: username,
      email: email,
      password: password
    })
}
