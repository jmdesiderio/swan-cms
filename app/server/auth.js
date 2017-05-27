const moment = require('moment')
const { decrypt, logoutAuth, sessionTokenName } = require('./actions/SessionActions')
const Session = require('./models/SessionModel')

function authMiddleware () {
  return (req, res, next) => {
    const sessionToken = req.cookies[sessionTokenName]

    if (!sessionToken) { return next() }

    const decryptedSessionToken = decrypt(sessionToken)

    Session.query()
      .where('token', decryptedSessionToken)
      .eager('user')
      .then((sessions) => {
        const session = sessions[0]

        const isExpired = moment(session.updatedAt).add(4, 'hours').isBefore(moment())
        if (isExpired) throw new Error('Session expired')

        if (!session.enabled) throw new Error('Session disabled')

        req.user = session.user

        return session.$query()
          .patch({ updatedAt: moment().format() })
      })
      .then(() => { next() })
      .catch((err) => {
        console.error(err)

        logoutAuth(req, res)
          .then(() => next())
      })
  }
}

module.exports = {
  authMiddleware
}
