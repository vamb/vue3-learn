<template>
  <h3>新闻</h3>
  <div class="news-list">
    <router-link to="/news/news-detail/新闻一">新闻一</router-link>
    <router-link to="/news/news-detail/新闻二">新闻二</router-link>
    <router-link to="/news/news-detail/新闻三">新闻三</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
  .news-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
</style>
