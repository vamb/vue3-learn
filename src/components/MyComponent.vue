<template>
  <div>{{ `MyComponent: ${title}` }}</div>
  <ul>
    <li
      v-for="(name, idx) in names"
      :key="`my-component-${title}-${idx}`"
    >{{ `name: ${name}` }}</li>
  </ul>
</template>

<script>
export default {
  name: 'myComponent',
  props: {
    title: {
      type: String,
      default: '--'
    },
    names: {
      type: Array,
      /**
       * 数组和对象必须使用函数作为返回
       */
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
