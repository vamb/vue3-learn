<template>
  <div class="hello">
    <!--  变量使用双大括号  -->
    <h1>{{ msg }}</h1>

    <!--  变量是html需要使用v-html进行绑定  -->
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>

    <!--  动态变量使用v-bind进行绑定，可以简写  -->
    <div v-bind:id="dynamicId">{{ dynamicId }}</div>
    <div :id="dynamicId">{{ dynamicId }}</div>

    <!--  v-if 会将不满足条件的元素从dom中删除掉  -->
    <div v-if="flag1">{{ `flag1: ${flag1} True展示` }}</div>
    <div v-else-if="flag2">{{ `flag2: ${flag2} True展示` }}</div>
    <div v-else>{{ `flag1: ${flag1} False展示` }}</div>

    <!--  v-show 使用 CSS display: none 将元素进行隐藏 -->
    <div v-show="flag1">v-show true</div>
    <div v-show="!flag1">v-show false</div>

    <!--  v-for  -->
    <ul>
      <li v-for="(item, idx) in arrList" :key="`list-opt-${idx}`">
        {{ item.name }}
      </li>
    </ul>

    <a-button type="primary">PPP</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  components: {
    AButton: Button,
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'test message',
      rawHtml: "<a href='http://www.baidu.com' target='_blank'>百度</a>",
      dynamicId: 10001,
      flag1: false,
      flag2: false,
      arrList: [
        { id: 1, name: 'test1', key: 1 },
        { id: 1, name: 'test2', key: 2 },
        { id: 1, name: 'test3', key: 3 },
      ]
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
