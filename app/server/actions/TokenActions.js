import jwt from 'jsonwebtoken'

const authTokenName = 'authToken'

export function verifyAuthToken (req, res) {
  if (req.cookies.authToken) {
    try {
      req.user = jwt.verify(req.cookies.authToken, process.env.TOKEN_SECRET)
    } catch (err) {
      console.error(err.name, '-', err.message)
      removeAuthTokenCookie(res)
    }
  }
}

export function createAuthToken ({ id, admin }) {
  return jwt.sign({
    id,
    admin
  }, process.env.TOKEN_SECRET, { expiresIn: '30m' })
}

export function setAuthTokenCookie (res, user) {
  const authToken = createAuthToken(user)

  res.cookie(authTokenName, authToken)
}

export function removeAuthTokenCookie (res) {
  res.clearCookie(authTokenName)
}
