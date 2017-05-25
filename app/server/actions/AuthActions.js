import bcrypt from 'bcryptjs'
import { setAuthTokenCookie, removeAuthTokenCookie } from './TokenActions'
import User from '../models/UserModel'

export function loginAuth (username, password, req, res) {
  return User.query()
    .where('username', username)
    .then((users) => {
      const user = users[0]

      const isPasswordValid = bcrypt.compareSync(password, user.password)
      if (!isPasswordValid) throw new Error('Invalid Login')

      setAuthTokenCookie(res, user)
      return user
    })
    .catch(() => {
      throw new Error('Invalid Login')
    })
}

export function logoutAuth (res) {
  removeAuthTokenCookie(res)
  return true
}
