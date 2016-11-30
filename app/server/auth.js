import { verifyAuthToken } from './actions/TokenActions'

export function authMiddleware () {
  return (req, res, next) => {
    verifyAuthToken(req, res)
    next()
  }
}
