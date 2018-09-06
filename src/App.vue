<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Axios from './fetch/index'
import { Toast } from 'vant'
import { getUser } from './fetch/api'

export default {
  name: 'App',
  created () {
    // 请求拦截器
    Axios.interceptors.request.use((config) => {
      // Do something before request is sent
      config.headers.token = this.token

      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
    Axios.interceptors.response.use((response) => {
      // 若请求的是json则不做状态判断
      var { responseURL } = response.request

      if (/\.json$/.test(responseURL)) return response.data

      //状态码为200
      var { code, msg } = response.data

      if (code !== 0) {
        Toast.fail(msg)
        return Promise.reject(new Error(msg))
      }

      return response.data
    }, (error) => {
      console.log(error)

      Toast.fail('网络错误')

      return Promise.reject(new Error('网络错误'))
    })

    this.setUserInfo()
  },
  methods: {
    async setUserInfo () {
      var data = await getUser()
      console.log(data);
    }
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
