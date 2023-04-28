<template>
  <h3>新闻</h3>
  <div>{{ `vuex store count v2: ${count}` }}</div>
  <div class="news-list">
    <router-link to="/news/news-detail/新闻一">新闻一</router-link>
    <router-link to="/news/news-detail/新闻二">新闻二</router-link>
    <router-link to="/news/news-detail/新闻三">新闻三</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // 专门用来读取vuex的数据
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped>
  .news-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
</style>
