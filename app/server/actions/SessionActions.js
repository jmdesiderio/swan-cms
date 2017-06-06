const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const { logAndError } = require('../utils/logAndError')
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
      if (!isPasswordValid) logAndError('Invalid Login')

      return Session.query().insertAndFetch({ userId: user.id })
    })
    .then(session => {
      const encryptedSessionToken = encrypt(session.token)
      res.cookie(SESSION_TOKEN_NAME, encryptedSessionToken)
      return true
    })
    .catch(logAndError)
}

function logoutAuth (req, res) {
  const sessionToken = req.cookies[SESSION_TOKEN_NAME]
  if (!sessionToken) return false

  const decryptedSessionToken = decrypt(sessionToken)
  res.clearCookie(SESSION_TOKEN_NAME)

  return Session.query()
    .where('token', decryptedSessionToken)
    .patch({ enabled: false })
    .then(numRows => numRows === 1)
    .catch(logAndError)
}

function checkContextForAuth (context) {
  if (!context.req.user) logAndError('No user session, need to log in')
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
  checkContextForAuth,
  encrypt,
  decrypt
}
