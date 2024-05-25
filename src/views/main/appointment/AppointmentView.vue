<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="教师姓名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="实验课程名">
      <el-select v-model="form.region" placeholder="请选择你的实验课">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="预约周次">
      <el-select v-model="form.region" placeholder="请选择你想预约的周次">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="时间段">
      <el-select v-model="form.region" placeholder="请选择你想预约的时间段">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">预约</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>
