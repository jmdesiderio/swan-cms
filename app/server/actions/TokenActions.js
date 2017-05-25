import jwt from 'jsonwebtoken'

const authTokenName = 'authToken'

export function createAuthToken ({ id }) {
  return jwt.sign(
    { id },
    process.env.TOKEN_SECRET,
    { expiresIn: '30m' }
  )
}

export function setAuthTokenCookie (res, user) {
  const authToken = createAuthToken(user)
  res.cookie(authTokenName, authToken)
}

export function removeAuthTokenCookie (res) {
  res.clearCookie(authTokenName)
}
