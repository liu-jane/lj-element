<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'customFromTtem',
  props: {
    label:{
      type: String
    },
    prop:{
      type: String
    }
  },
  inject: ['form'],
  data(){
    return{
      errMessage: ''
    }
  },
  mounted(){
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods:{
    validate(){
      // 如果customItem中没有传递prop则说明不用验证
      if(!this.prop) return
      // 取出当前需要验证的值
      const value = this.form.model[this.prop]
      // 去除对应验证规则
      const rule = this.form.rules[this.prop]
      // 创建AsyncValidator实例
      const validator = new AsyncValidator({ [this.prop] : rule})
      // 开始验证
      return validator.validate({ [this.prop]: value}, errors => {
        if(errors){
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })

    }
  }
}
</script>

<style>

</style>