<template>
  <h3>新闻</h3>
  <div>{{ `vuex store count v2: ${count}` }}</div>
  <div>{{ `$store.getters.getCount: ${$store.getters.getCount}` }}</div>
  <div>{{ `getCount: ${getCount}` }}</div>
  <div class="btn-group">
    <Button type="primary" @click="numMinus">-</Button>
    <Button type="primary" @click="numAdd">+</Button>
  </div>
  <div style="margin: 10px auto">
    <Button @click="actionAddCount">异步添加</Button>
  </div>
  <div class="news-list">
    <router-link to="/news/news-detail/新闻一">新闻一</router-link>
    <router-link to="/news/news-detail/新闻二">新闻二</router-link>
    <router-link to="/news/news-detail/新闻三">新闻三</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { Button } from 'ant-design-vue'

export default {
  name: 'news-view',
  components: {
    Button
  },
  // 专门用来读取vuex的数据
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount']),
  },
  data() {

  },
  methods: {
    ...mapMutations(["setCount"]),
    ...mapActions(['asyncAddCount']),
    numAdd() {
      // this.$store.commit('addCount')
      let newCount = this.count + 1
      this.setCount(newCount)
    },
    numMinus() {
      // this.$store.commit('minusCount')
      let newCount = this.count - 1
      this.setCount(newCount)
    },
    actionAddCount() {
      // this.$store.dispatch('asyncAddCount')
      this.asyncAddCount({commit: this.setCount})
    }
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
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
</style>
