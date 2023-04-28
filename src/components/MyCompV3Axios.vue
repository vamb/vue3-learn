<template>
  <div>MyCompV3Axios</div>
</template>

<script>
// import axios from 'axios'
import api from "@/api";

export default {
  name: 'axios-component',
  data() {

  },
  mounted() {
    // axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php', {})
    // .then(res=>{
    //
    // }).catch(err=>{
    //
    // })
    /**
     * 局部导入方法
     */
    // axios({
    //   method: 'get',
    //   url: 'http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php'
    // }).then(res=>{
    //   console.log('axios res', res)
    // })
    //
    /**
     * 全局导入的使用方法
     */
    // this.$axios({
    //   method: 'get',
    //   url: 'http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php'
    // }).then(res=>{
    //   console.log('axios res', res)
    // })
    /**
     * 使用封装好的方法请求api
     */
    api.getChengpin().then(res=>{
      console.log('api.getChengpin() res', res)
    })
    this.$axios({
      method: 'post',
      url: 'http://iwenwiki.com/api/blueberrypai/login.php',
      data: {
        user_id: 'iwen@qq.com',
        password: 'iwen123',
        verification_code: 'crfvw'
      }
    }).then(res=>{
      console.log('axios post res', res)
    })
  }
}
</script>
