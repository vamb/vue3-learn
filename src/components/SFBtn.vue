<template>
  <Button @click="count++">You clicked me {{ count }} times.</Button>
</template>


<script>
import { Button } from 'ant-design-vue'

export default {
  name: 'SFBtn',
  components: {
    Button
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
