import jwt from 'jsonwebtoken'
import { removeAuthTokenCookie } from './actions/TokenActions'
import { getUserById } from './actions/UserActions'

export function authMiddleware () {
  return (req, res, next) => {
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
