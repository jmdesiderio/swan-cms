const Auth = {
  isLoggedIn: () => {
    return true
  },
  isAccessable: () => {
    return true
  }
}

export function requireNoAuth (nextState, replace, callback) {
  if (Auth.isLoggedIn()) replace('/admin/dashboard')
  callback()
}

export function requireAuth (nextState, replace, callback) {
  if (!Auth.isLoggedIn() && !Auth.isAccessable()) replace('/admin/login')
  callback()
}

export default Auth
