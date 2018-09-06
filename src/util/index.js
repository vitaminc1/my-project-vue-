/**
 * 判断是否为{}
 * @param  obj Object
 * @return     Boolean
 */
const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}'
  // return Object.keys(obj).length === 0
}

// 免登
function login (self, corpId, _callback) {
  // debugger;
  let loginDate = window.localStorage.getItem('loginDate')
  if (loginDate) {
    loginDate = parseDate(loginDate)
    let duringTime = parseInt(new Date() - loginDate) / 1000 / 60
    if (duringTime > 30) { // 距离上次登录10分钟，清空缓存
      localStorage.removeItem('login')
    }
  } else {
    localStorage.removeItem('login')
  }

  let userStr = localStorage.getItem('login')
  if (userStr) {
    _callback(JSON.parse(userStr))
    // alert(userStr)
    return
  }
  dd.ready(function () {
    dd.runtime.permission.requestAuthCode({
      corpId: corpId,
      onSuccess: function (result) {
        self.$http.get('/user/login', {
          params: {
            code: result.code,
            corpid: corpId
          }
        }).then((res) => {
          if (res.data.status == 200) {
            let userData = res.data.data
            window.localStorage.setItem('loginDate', formatDate(new Date()))
            window.localStorage.setItem('login', JSON.stringify(userData))
            // alert(JSON.stringify(userData))
            _callback(userData)
          } else {
          }
        })
      },
      onFail: function (err) {
        alert('失败:' + JSON.stringify(err))
      }
    })
  })
}

export default {
  isEmptyObject,
  login
}
