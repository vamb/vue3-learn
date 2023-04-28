<template>
  <div>跨域解决方案（Proxy）</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'MyCompV4Proxy',
  mounted() {
    // axios.get('http://iwenwiki.com/api/FingerUnion/list.php')
    axios.get('/api/FingerUnion/list.php')
    .then(res=>{
      console.log('/FingerUnion/list.php res', res)
    })
  }
}

</script>

<style scoped>

</style>
