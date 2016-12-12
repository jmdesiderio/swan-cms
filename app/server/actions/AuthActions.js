import bcrypt from 'bcryptjs'

import { setAuthTokenCookie } from './TokenActions'
import User from '../models/UserModel'
import { USER_STATUS } from '../constants/UserConstants'

export function loginAuth (username, password, res) {
  return User.query()
    .where('username', username)
    .then((users) => {
      const user = users[0]
      const isPasswordValid = bcrypt.compareSync(password, user.password)

      if (user.getStatus() !== USER_STATUS.ACTIVE || !isPasswordValid) {
        throw new Error('Invalid Login')
      }

      setAuthTokenCookie(res, user)

      return user
    })
    .catch(err => {
      console.log(err)
      throw new Error('Invalid Login')
    })
}

export function logoutAuth (res) {
  res.clearCookie('authToken')
  return true
}
