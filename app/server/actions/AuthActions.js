import bcrypt from 'bcryptjs'
import moment from 'moment'

import { setAuthTokenCookie, removeAuthTokenCookie } from './TokenActions'
import User from '../models/UserModel'
import { USER_STATUS } from '../constants/UserConstants'

export function loginAuth (username, password, req, res) {
  return User.query()
    .where('username', username)
    .then((users) => {
      const user = users[0]
      const isPasswordValid = bcrypt.compareSync(password, user.password)

      if (user.getStatus() !== USER_STATUS.ACTIVE) {
        return user.$query()
          .patch({
            lastLoginAttemptIp: req.ip
          })
          .then(() => { throw new Error('Invalid Login') })
      }

      if (!isPasswordValid) {
        let patchObject = {
          invalidLoginCount: user.invalidLoginCount + 1,
          lastInvalidLoginDate: moment().format(),
          lastLoginAttemptIp: req.ip
        }

        if (!user.invalidLoginWindowStart) {
          patchObject.invalidLoginWindowStart = moment().format()
        }

        return user.$query()
          .patch(patchObject)
          .then(() => { throw new Error('Invalid Login') })
      }

      return user.$query()
        .patchAndFetch({
          invalidLoginCount: 0,
          invalidLoginWindowStart: null,
          lastInvalidLoginDate: null,
          lastLoginAttemptIp: req.ip,
          lastLoginDate: moment().format()
        })
        .then((user) => {
          setAuthTokenCookie(res, user)
          return user
        })
    })
    .catch(err => {
      console.error(err)
      throw new Error('Invalid Login')
    })
}

export function logoutAuth (res) {
  removeAuthTokenCookie(res)
  return true
}
