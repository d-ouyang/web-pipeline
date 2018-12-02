export const config = {
  BASE_URL: 'http://www.richepipe.com:9200',
  // BASE_URL: 'http://test.richepipe.com:9200',
  IMG_BASE_URL: 'http:www.//richepipe.com',
  // IMG_BASE_URL: 'http://test.richepipe.com',
  ERR_OK: 200
}

export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg))
    return (arr[2])
  else
    return null
}

export function returnFormData(obj) {
  let str = ''
  for (let key in obj) {
    str += `&${key}=${obj[key]}`
  }
  return str.substr(1)
}

export function inArr(url) {
  const urlArr = [
    '/login',
    '/student/id/1'
  ]
  for (let i in urlArr) {
    if (url == urlArr[i]) {
      return true
    }
  }
  return false
}
