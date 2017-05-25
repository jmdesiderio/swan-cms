import jwt from 'jsonwebtoken'
import { removeAuthTokenCookie } from './actions/TokenActions'
import { getUserById } from './actions/UserActions'

// import Session from './models/SessionModel'

export function authMiddleware () {
  return (req, res, next) => {
    // Session.query()
    //   .where('token', 'TEST')
    //   .eager('user')
    //   .then((sessions) => {
    //     const session = sessions[0]
    //     return session
    //   })
    //   .catch(() => {
    //     throw new Error('Session expired. Please log in.')
    //   })

    if (!req.cookies.authToken) { return next() }

    let decodedToken

    try {
      decodedToken = jwt.verify(req.cookies.authToken, process.env.TOKEN_SECRET)
    } catch (err) {
      console.error(err.name, '-', err.message)
      removeAuthTokenCookie(res)
      return next()
    }

    const { id } = decodedToken
    getUserById(id).then((user) => {
      req.user = user
      next()
    })
  }
}
