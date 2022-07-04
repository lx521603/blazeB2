/*
 * @Author: Harry
 * @Date: 2022-07-01 12:52:23
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-04 20:24:30
 * @FilePath: \web\src\store\index.js
 */
import { defineStore } from 'pinia'
import { authIsexit } from '../utils/common/login'
const useStore = defineStore('store', {
  // 开启数据缓存
  persist: {
    enabled: true
  },
  state: () => {
    return {
      isLogined: false,
      prefixImg: {
        support: [],
        defaultUrl: ''
      },
      setdefaultFile: ''
    }
  },
  getters: {
    // 登录状态
    siginStatus(state) {
      return !state.isLogined
    },
    prefixStatus(state) {
      const a = state.prefixImg.support.filter(v => v.url === state.prefixImg.defaultUrl)
      console.log(a)
      return a[0].url
    },
    defaultFile(state) {
      return state.setdefaultFile
    }
  },
  actions: {
    handleIsLogined() {
      const tokenApi = localStorage.getItem('token_api')
      this.isLogined = !!tokenApi
    },
    setNewAuthMsg() {
      authIsexit().then(() => {
        this.isLogined = true
      })
    },
    setprefixImg(obj) {
      this.prefixImg = obj
    },
    setDefaultPrefix(name) {
      this.prefixImg.defaultUrl = name
    },
    setDefaultFile(val) {
      this.setdefaultFile = val.trim()
    }
  }
})
export default useStore
