/**
 * 文件大小换算
 * @param bytes
 * @param n
 * @returns {string}
 */
const bytesToSize = (bytes, n = 2) => {
  if (bytes === 0) return '0 B'

  var k = 1024

  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  var i = Math.floor(Math.log(bytes) / Math.log(k))

  return (bytes / Math.pow(k, i)).toFixed(n) + ' ' + sizes[i]

  // toPrecision(3) 后面保留一位小数，如1.0GB                                                                                                                  //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * 字符串截取
 * @method textClip
 * @param str    {String} 待截取的字符串
 * @param length {Number} 截段长度
 * @param flag   {String} 省略表示符
 *
 * @return {String} 处理完的字符串
 * */
const textClip = (str, length = 250, flag = '...') => {
  return str ? str.slice(0, length) + (str.length > length ? flag : '') : ""
}

/**
 * 日期格式化
 * @param timestamp
 * @returns {*}
 */
const timeFormat = function (timestamp) {
  return (new Date(timestamp)).format('yyyy-MM-dd hh:mm:ss')
}
/**
 * 状态码
 * @param orderStatus
 */
const orderStatusFormat = function (orderStatus) {
  switch (orderStatus) {
    case 'UNCONFIRMED':
      return '未预定'
    case 'CONFIRMED':
      return '已预定'
    case 'FINISHED':
      return '已完成'
    case 'CANCELLED':
      return '已取消'
  }
}

export default { bytesToSize, textClip, timeFormat, orderStatusFormat }
