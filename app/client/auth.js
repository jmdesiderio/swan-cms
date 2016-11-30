import Cookies from 'js-cookie'

const Auth = {
  isLoggedIn: () => {
    return Boolean(Cookies.get('authToken'))
  },
  isAccessible: () => {
    return true
  }
}

export function requireNoAuth (nextState, replace, callback) {
  if (Auth.isLoggedIn()) replace('/admin/dashboard')
  callback()
}

export function requireAuth (nextState, replace, callback) {
  if (!Auth.isLoggedIn()) replace('/admin/login')
  if (!Auth.isAccessible()) replace('/admin/dashboard')
  callback()
}

export default Auth
