export function isLogin() {
  let token = window.localStorage.getItem('token')
  if (!token) {
    return false
  } else {
    return true
  }
}