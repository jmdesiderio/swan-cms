import Cookies from 'js-cookie'

const Auth = {
  isLoggedIn: () => {
    return Boolean(Cookies.get('authToken'))
  },
  isAccessible: () => {
    return true
  }
}

function requireNoAuth (replace, callback) {
  if (Auth.isLoggedIn()) replace('/admin/dashboard')
  callback()
}
export function requireNoAuthOnEnter (nextState, replace, callback) {
  requireNoAuth(replace, callback)
}
export function requireNoAuthOnChange (prevState, nextState, replace, callback) {
  requireNoAuth(replace, callback)
}

function requireAuth (replace, callback) {
  if (!Auth.isLoggedIn()) replace('/admin/login')
  if (!Auth.isAccessible()) replace('/admin/dashboard')
  callback()
}
export function requireAuthOnEnter (nextState, replace, callback) {
  requireAuth(replace, callback)
}
export function requireAuthOnChange (prevState, nextState, replace, callback) {
  requireAuth(replace, callback)
}

export default Auth
