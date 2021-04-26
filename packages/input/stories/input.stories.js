// 导入上一级目录下的index.js
import LjInput from '../'


export default {
  title: 'LjInput',
  component: LjInput
}

// TEXT函数返回值是一个对象，因此要用()包裹
export const Text = ()=> ({
  components: { LjInput },
  template: '<lj-input type="text" v-model="value"></lj-input>',
  data(){
    return { value: 'admin'}
  }
})

// TEXT函数返回值是一个对象，因此要用()包裹
export const PassWord = ()=> ({
  components: { LjInput },
  template: '<lj-input type="password" v-model="value"></lj-input>',
  data(){
    return { value: '111111'}
  }
})