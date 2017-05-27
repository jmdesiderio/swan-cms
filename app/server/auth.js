import moment from 'moment'
import { decrypt, logoutAuth, sessionTokenName } from './actions/SessionActions'
import Session from './models/SessionModel'

export function authMiddleware () {
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

        if (session.disabled) throw new Error('Session disabled')

        req.user = session.user

        return session.$query()
          .patch({ updatedAt: moment().format() })
      })
      .then((numRows) => {
        if (numRows !== 1) throw new Error('Session time update failed')
        next()
      })
      .catch((err) => {
        console.error(err)

        logoutAuth(req, res)
          .then(() => next())
      })
  }
}
