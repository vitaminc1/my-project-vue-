/**
 * Created by leaves on 2018/9/5.
 */

/**
 * 数组去undefined去null 去重
 * @returns {Array}
 */
Array.prototype.ununique = function () {
  var ununiqueArray = []
  this.forEach(o => {
    o !== undefined && o !== null && !~ununiqueArray.indexOf(o) && ununiqueArray.push(o)
  })
  return ununiqueArray
}

Array.prototype.max = function () {
  return Math.max.apply({}, this)
}
Array.prototype.min = function () {
  return Math.min.apply({}, this)
}

/**
 * 求和
 * @returns {*}
 */
Array.prototype.sum = function () {
  if (this.length == 0) return 0
  return this.reduce((a, b) => (a + b))
}

/**
 * 日期格式化
 * @param {*} formatStr
 */
Date.prototype.format = function (formatStr) {
  var date = this
  var zeroize = function (value, length) {
    if (!length) {
      length = 2
    }
    value = new String(value)
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
      zeros += '0'
    }
    return zeros + value
  }
  return formatStr.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, function ($0) {
    switch ($0) {
      case 'd': return date.getDate()
      case 'dd': return zeroize(date.getDate())
      case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()]
      case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
      case 'M': return date.getMonth() + 1
      case 'MM': return zeroize(date.getMonth() + 1)
      case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]
      case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]
      case 'yy': return new String(date.getFullYear()).substr(2)
      case 'yyyy': return date.getFullYear()
      case 'h': return date.getHours() % 12 || 12
      case 'hh': return zeroize(date.getHours() % 12 || 12)
      case 'H': return date.getHours()
      case 'HH': return zeroize(date.getHours())
      case 'm': return date.getMinutes()
      case 'mm': return zeroize(date.getMinutes())
      case 's': return date.getSeconds()
      case 'ss': return zeroize(date.getSeconds())
      case 'l': return date.getMilliseconds()
      case 'll': return zeroize(date.getMilliseconds())
      case 'tt': return date.getHours() < 12 ? 'am' : 'pm'
      case 'TT': return date.getHours() < 12 ? 'AM' : 'PM'
    }
  })
}
