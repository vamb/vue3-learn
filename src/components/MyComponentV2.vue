<template>
  <Button @click="sendClickHandle">自定义事件，子组件传值给父组件</Button>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  components: {
    Button
  },
  name: 'myComponentV2',
  data() {
    return {
      message: 'MyComponentV2 message data'
    }
  },
  methods: {
    sendClickHandle() {
      /**
       * param1: 字符串string => 理论上是任意的，但是实际上需要有一定的意义，增加可读性
       * param2: 传递的参数
       */
      this.$emit("onEvent", this.message)
    }
  }
}
</script>


<style scoped>

</style>
