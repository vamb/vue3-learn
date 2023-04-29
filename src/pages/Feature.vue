<template>
  <div class="hello">
    <p>{{ message }}</p>
    <p v-for="(name, idx) in names.list" :key="`feature-name-${idx}`"> {{ name }} </p>
  </div>
  <div class="btn-group">
    <a-button @click="handleClick">方法</a-button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { Button } from 'ant-design-vue'

export default {
  name: 'newFeature',
  components: {
    AButton: Button,
  },
  // 组合式API
  setup() {
    // ref => 主要用于简单数据类型
    let message = ref("我是ref消息")
    // reactive => 主要用于复杂数据类型，数组或者对象
    const names = reactive({
      list: ['name1', 'name2', 'name3']
    })
    const handleClick = () => {
      console.log('pp')
      message.value = message.value + ' qqq '
      console.log('names.list.values()', names.list)
      names.list[0] = 'name1-1'

    }
    return {
      message, names, handleClick
    }
  }
}
</script>

<style scoped>
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
</style>
