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
    <div>{{ `hasArrListContent: ${hasArrListContent}` }}</div>

    <div class="btn-group">
      <!-- v-on绑定事件 -->
      <a-button type="primary" v-on:click="clickPBtn">PPP</a-button>
      <!--  v-on简写 + 绑定动态方法  -->
      <a-button type="primary" @[qBtnEvent]="clickQBtn">{{`QQQ - ${qBtnEvent}`}}</a-button>
    </div>
    <div class="label-display">
      <div>{{`firstname: ${firstName};`}}</div>
      <div>{{`lastname: ${lastName};`}}</div>
      <div>{{`fullname: ${fullName};`}}</div>
    </div>
  </div>

  <!-- 动态改变添加这个dom元素绑定的class，蛮有用的 -->
  <div
    class="static" :class="{ active: isActive, 'text-danger': hasError }"
  >test demo unit</div>

  <div style="margin-bottom: 10px">
    <a-button type="primary" @click="watchVal=watchVal+1" style="margin-right: 10px">watchVal</a-button><span>{{watchVal}}</span>
  </div>
  <div>
    <a-button type="primary" @click="person.age=person.age+1" style="margin-right: 10px">person age</a-button><span>{{person.age}}</span>
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
      ],
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      hasError: true,
      watchVal: 1,
      person: {
        age: 1
      }
    }
  },
  // 计算属性，依赖于其他value，有点useMemo的味道
  /**
   * 响应式依赖
   */
  computed: {
    hasArrListContent() {
      return this.arrList.length> 0? 'Yes': 'No'
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  /**
   * computed 用于计算属性，watch用户监听某一个值是否变化，如果变化了就去执行相应的方法
   * 执行的方法定义在methods里面
   * newVal记录了改变后的值
   * oldVal记录了改变前的值
   */
  watch: {
    person: {
      /**
       * 只要这个对象的任何属性变化了，那都会触发handler方法
       * 不建议用这个方法
       */
      handler: function (newVal, oldVal) { //需要具体执行的方法
        console.log('person handle newVal, oldVal', newVal, oldVal)
      },
      deep: true, // 是否开启深度监听，默认false
    },
    /**
     * 这个方法可以精确的对对象里面的够一个属性进行深度监听
     */
    "person.age": {
      handler: function (newVal, oldVal) { //需要具体执行的方法
        console.log('person.age handle newVal, oldVal', newVal, oldVal)
      },
      deep: true, // 是否开启深度监听，默认false
    },
    // 浅层监听，用于监听数据结构不复杂的属性
    watchVal(newVal, oldVal) {
      console.log('newVal, oldVal', newVal, oldVal)
    },
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
  .btn-group, .label-display {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-content: center;
  }
</style>
