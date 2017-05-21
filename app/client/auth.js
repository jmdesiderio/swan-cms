import Cookies from 'js-cookie'

const Auth = {
  authTokenName: 'authToken',
  isLoggedIn: () => Boolean(Cookies.get(Auth.authTokenName)),
  isAccessible: () => true
}

export function isAuthorized () {
  return (Auth.isLoggedIn() && Auth.isAccessible())
}

export function logout () {
  Cookies.remove(Auth.authTokenName)
}

export default Auth
