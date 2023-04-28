<template>
  <h3>新闻详情 {{$route.params.name}} </h3>
  <h3>{{ `vuex store count v1: ${$store.state.count}` }}</h3>
</template>

<script>
export default {
  mounted() {
    // console.log($route)
  }
}
</script>

<style scoped>

</style>
