import { createStore } from 'vuex'

// 相当于react hook函数出来前的mobx
export default createStore({
  // 所有的状态都在这里管理
  state: {
    count: 0
  }
})
