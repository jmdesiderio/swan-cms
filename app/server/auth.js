import { verifyToken } from './actions/TokenActions'

export function authMiddleware () {
  return (req, res, next) => {
    verifyToken(req, res)
    next()
  }
}
