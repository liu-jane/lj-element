<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'c_form',
  props:{
    model:{
      type: Object
    },
    rules:{
      type: Object
    }
  },
  provide(){
    return {
      form: this
    }
  },
  methods:{
    validate(cb){
      // 寻找customFormItem子组件
      const findChildren = (childrens, arr = []) =>{
        childrens.forEach(e => {
          if(e.$options && (e.$options.name === 'customFromTtem')){
            arr.push(e)
          } else {
            findChildren(e.$children, arr)
          }
        });
        return arr
      }
      // findChildren找出所有的customFromTtem
     const tasks = findChildren(this.$children)
      // 找出需要表单验证的customFromTtem
     .filter(e => e.prop)
    //  调用customFromTtem的validate方法
     .map(e => e.validate())
    // customFromTtem的validate的返回值是paomise
     Promise.all(tasks)
      .then(()=> cb(true))
      .catch(()=> cb(false))
    }
  }
}
</script>

<style>

</style>