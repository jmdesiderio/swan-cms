// @flow
import Cookies from 'js-cookie'

const Auth = {
  authTokenName: 'sessionToken',
  isLoggedIn: () => Boolean(Cookies.get(Auth.authTokenName)),
  isAccessible: () => true
}

export function isAuthorized () {
  return (Auth.isLoggedIn() && Auth.isAccessible())
}

export default Auth
