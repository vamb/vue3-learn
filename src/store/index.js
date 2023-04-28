import { createStore } from 'vuex'
import api from "@/api";

// 相当于react hook函数出来前的mobx
export default createStore({
  // 所有的状态都在这里管理
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count >= 0? state.count: 'count小于0，不符合要求'
    }
  },
  /**
   * 同步操作
   */
  mutations: {
    setCount(state, num) {
      state.count = num >= -1? num: -1
    },
    addCount(state) {
      state.count ++
    },
    minusCount(state) {
      state.count >= 0? state.count--: state.count
    }
  },
  /**
   * 异步操作
   */
  actions: {
    asyncAddCount({ commit }) {
      api.generatorList().then(res=>{
        commit('setCount', res?.['data']?.[0])
      }).catch(err=>{
        console.error(`查询数据失败，请稍后重试 => ${JSON.stringify(err)}`)
      })
    }
  }
})
