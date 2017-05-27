import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import Session from '../models/SessionModel'
import User from '../models/UserModel'

const algorithm = 'aes-256-ctr'
const secret = process.env.TOKEN_SECRET

export const sessionTokenName = 'sessionToken'

export function loginAuth (username, password, res) {
  return User.query()
    .where('username', username)
    .then((users) => {
      const user = users[0]

      const isPasswordValid = bcrypt.compareSync(password, user.password)
      if (!isPasswordValid) throw new Error('Invalid Login')

      return Session.query()
        .insertAndFetch({ userId: user.id })
    })
    .then((session) => {
      const encryptedSessionToken = encrypt(session.token)
      res.cookie(sessionTokenName, encryptedSessionToken)
      return true
    })
    .catch(() => {
      throw new Error('Invalid Login')
    })
}

export function logoutAuth (req, res) {
  const sessionToken = req.cookies[sessionTokenName]
  if (!sessionToken) return

  const decryptedSessionToken = decrypt(sessionToken)
  res.clearCookie(sessionTokenName)

  return Session.query()
    .where('token', decryptedSessionToken)
    .patch({ disabled: true })
    .then((numRows) => {
      if (numRows === 1) return true
    })
}

export function encrypt (value) {
  const cipher = crypto.createCipher(algorithm, secret)
  let crypted = cipher.update(value, 'utf8', 'hex')
  crypted += cipher.final('hex')

  return crypted
}

export function decrypt (value) {
  const decipher = crypto.createDecipher(algorithm, secret)
  let decrypted = decipher.update(value, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}
