const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const Session = require('../models/SessionModel')
const User = require('../models/UserModel')

const SESSION_TOKEN_NAME = 'sessionToken'
const algorithm = 'aes-256-ctr'
const secret = process.env.TOKEN_SECRET

function loginAuth (username, password, res) {
  return User.query()
    .where('username', username)
    .first()
    .then(user => {
      const isPasswordValid = bcrypt.compareSync(password, user.password)
      if (!isPasswordValid) throw new Error('Invalid Login')

      return Session.query().insertAndFetch({ userId: user.id })
    })
    .then(session => {
      const encryptedSessionToken = encrypt(session.token)
      res.cookie(SESSION_TOKEN_NAME, encryptedSessionToken)
      return true
    })
    .catch(err => {
      throw new Error(err)
    })
}

function logoutAuth (req, res) {
  const sessionToken = req.cookies[SESSION_TOKEN_NAME]
  if (!sessionToken) return false

  const decryptedSessionToken = decrypt(sessionToken)
  res.clearCookie(SESSION_TOKEN_NAME)

  return Session.query()
    .where('token', decryptedSessionToken)
    .patch({ enabled: false })
    .then(numRows => {
      if (numRows === 1) return true
    })
    .catch(err => {
      throw new Error(err)
    })
}

function encrypt (value) {
  const cipher = crypto.createCipher(algorithm, secret)
  let crypted = cipher.update(value, 'utf8', 'hex')
  crypted += cipher.final('hex')

  return crypted
}

function decrypt (value) {
  const decipher = crypto.createDecipher(algorithm, secret)
  let decrypted = decipher.update(value, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}

module.exports = {
  SESSION_TOKEN_NAME,
  loginAuth,
  logoutAuth,
  encrypt,
  decrypt
}
