import bcrypt from 'bcryptjs'

import { setTokenCookie } from './TokenActions'
import User from '../models/UserModel'

export function loginAuth (username, password, res) {
  return User.query()
    .where('username', username)
    .then((users) => {
      const user = users[0]
      const isValid = bcrypt.compareSync(password, user.password)

      if (!isValid) throw new Error('Invalid Login')

      setTokenCookie(res, user)

      return user
    })
    .catch(err => {
      console.log(err)
      throw new Error('Invalid Login')
    })
}

export function logoutAuth (res) {
  res.clearCookie('token')
  return true
}
