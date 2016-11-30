import jwt from 'jsonwebtoken'

export function verifyToken (req, res) {
  if (req.cookies.token) {
    try {
      req.user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)
    } catch (err) {
      console.error(err.name, '-', err.message)
      res.clearCookie('token')
    }
  }
}

export function createToken ({ id, admin }) {
  return jwt.sign({
    id,
    admin
  }, process.env.TOKEN_SECRET, { expiresIn: '30m' })
}

export function setTokenCookie (res, user) {
  const token = createToken(user)

  res.cookie('token', token)
}
