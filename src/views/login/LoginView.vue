<script setup lang="ts">
import type { User } from '@/type'
import { User as UserIco, Lock } from '@element-plus/icons-vue'
import router from '@/router'
import { createElLoading } from '@/components/loading'
const userR = ref<User>({ account: '1001', password: '1001' })

const rules = {
  account: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 3, max: 14, message: '密码长度为3-14个字符', trigger: 'blur' }
  ]
}
const formRef = ref(null) as any
const loginF = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      if (userR.value.account == '1001' && userR.value.password == '1001') {
        const load = createElLoading()
        setTimeout(() => {
          load.close()
          router.push('/main')
          ElMessage({ type: 'success', message: '登录成功' })
        }, 1500)
      }
    }
  })
  console.log('1111')
}
</script>
<template>
  <div id="background">
    <div class="container">
      <h1 style="margin-left: 20px">
        欢迎使用
        <span style="color: #06c6bf">实验室预定系统</span>
        !
      </h1>
      <el-form class="form" ref="formRef" :model="userR" :rules="rules">
        <el-form-item prop="account">
          <el-input v-model="userR.account" placeholder="account" :prefix-icon="UserIco" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="userR.password"
            placeholder="password"
            :prefix-icon="Lock" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginF" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- </el-dialog> -->
    </div>
  </div>
</template>
<style scoped>
#background {
  width: 100%;
  height: 100%;
  background: url('@/assets/bgd.png');
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.form {
  margin: 20px;
  color: white;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
  background-color: #06c6bf;
}
.container {
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container h1 {
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  margin-left: 15%;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.item label {
  float: left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
el-input {
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font:
    normal 13px/100% Verdana,
    Tahoma,
    sans-serif;
  width: 200px;
  height: 23px;
  background: #f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button {
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;
}
.keep {
  color: white;
}
.keep input {
  width: 15px;
  height: 15px;
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
