<script setup lang="ts">
import type { User } from '@/type'
import { User as UserIco, Lock } from '@element-plus/icons-vue'
import router from '@/router'
import { createElLoading } from '@/components/loading'
const dialogFormVisible = ref(true)
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
          dialogFormVisible.value = false
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
  <el-dialog
    v-model="dialogFormVisible"
    title=""
    width="30%"
    style="padding: 50px; border-radius: 10px; box-shadow: 0 25px 45px black">
    <h1 style="margin-left: 20px">
      Welcome To
      <span style="color: #06c6bf">PlantOCR</span>
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
        <el-button type="primary" @click="loginF" class="login-btn">Login</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style scoped>
.form {
  margin: 20px 0;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
  background-color: #06c6bf;
}
</style>
