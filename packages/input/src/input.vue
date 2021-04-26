<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'customInput',
  inheritAttrs: false, // 禁用继承父组件传递过来的属性
  props:{
    type:{
      type: String,
      default: 'text'
    },
    value: {
      type: String
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input', e.target.value)
      // 寻找父组件, 触发父组件的表单验证方法
      const findParent = parent =>{
        while(parent){
          if(parent.$options.name ===  'customFromTtem'){
            break
          } else {
            parent = parent.$psrent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>