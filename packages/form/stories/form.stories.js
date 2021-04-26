import LjForm from '../'
import LjFormItem from '../../formitem'
import LjInput from '../../input'
import LjButton from '../../button'

export default {
  title: 'LjForm',
  component: LjForm
}

export const Login = () => ({
  components: { LjForm, LjFormItem, LjInput, LjButton },
  template: `
    <lj-form class="form" ref="loginForm" :model="user" :rules="rules">
      <lj-form-item label="用户名" prop="username">
        <!-- <lj-input v-model="user.username"></lj-input> -->
        <lj-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lj-input>
      </lj-form-item>
      <lj-form-item label="密码" prop="password">
        <lj-input type="password" v-model="user.password"></lj-input>
      </lj-form-item>
      <lj-form-item>
        <lj-button type="primary" @click="login">登 录</lj-button>
      </lj-form-item>
    </lj-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
