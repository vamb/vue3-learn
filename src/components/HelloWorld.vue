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

    <!-- 绑定多个属性 -->
    <div v-bind="multipleAttrs">绑定多个属性</div>

    <!--  绑定动态参数  -->
    <div v-bind:[dynamicAttr]="dynamicAttrVal">绑定动态属性</div>

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

    <div class="btn-group">
      <!-- v-on绑定事件 -->
      <a-button type="primary" v-on:click="clickPBtn">PPP</a-button>
      <!--  v-on简写 + 绑定动态方法  -->
      <a-button type="primary" @[qBtnEvent]="clickQBtn">{{`QQQ - ${qBtnEvent}`}}</a-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
// import { nextTick } from 'vue' //这个方法是全局使用的
import { debounce } from 'lodash-es'

export default {
  name: 'HelloWorld',
  components: {
    AButton: Button,
  },
  // VUE 对于数据结构的深层数据也是支持响应的，不会像reactJs那用样需要先序列化
  data() {
    return {
      multipleAttrs: {
        id: 'testMultiId',
        class: 'testMultiClass'
      },
      qBtnEvent: 'click',
      dynamicAttr: 'id',
      dynamicAttrVal: 'dynamicAttrVal',
      msg: 'test message',
      rawHtml: "<a href='http://www.baidu.com' target='_blank'>百度</a>",
      dynamicId: 10001,
      flag1: false,
      flag2: false,
      arrList: [
        { id: 1, name: 'test1', key: 1 },
        { id: 2, name: 'test2', key: 2 },
        { id: 3, name: 'test3', key: 3 },
      ]
    }
  },
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = debounce(this.click, 500)
  },
  mounted() {
    this.arrList.push({
      id: 4, name: 'test4', key: 4
    })
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  // Vue 自动为 methods 中的方法绑定了永远指向组件实例的 this。这确保了方法在作为事件监听器或回调函数时始终保持正确的 this。
  /**
   * 你不应该在定义 methods 时使用箭头函数，因为箭头函数没有自己的 this 上下文。
   */
  methods: {
    // 不可以用箭头函数定义methods中的方法
    clickPBtn() {
      this.flag1 = !this.flag1
      this.dynamicAttr = 'id' === this.dynamicAttr? 'class': 'id'
    },
    clickQBtn() {
      this.qBtnEvent = 'click' === this.qBtnEvent? 'hover': 'click'
      console.log('this.qBtnEvent', this.qBtnEvent)
    },
    click() {
      // 此方法将拥有独立的防抖空间，不会互相影响
      // ... 对点击的响应 ...
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
  .btn-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-content: center;
  }
</style>
