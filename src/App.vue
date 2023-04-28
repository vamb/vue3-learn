<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!-- 路由的显示入口 -->
  <div class="router-content">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/hello">欢迎</router-link>
    <router-link to="/news">新闻</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-bottom: 50px;
  }
  .router-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 15px;
  }
</style>
