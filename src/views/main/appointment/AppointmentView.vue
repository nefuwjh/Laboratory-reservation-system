<script lang="ts" setup>
import { reactive } from 'vue'
import { addService } from '@/serivice'
import { courses } from '@/data'

const form = reactive({
  clas: '',
  name: '',
  teacherName: '',
  week: '',
  day: '',
  section: ''
})

const onSubmit = () => {
  addService(form)
  console.log(1, form)
}
</script>

<template>
  <el-form
    label-position="left"
    :model="form"
    label-width="120px"
    style="max-width: 600px; padding-left: 100px; padding-top: 50px">
    <el-form-item label="教师姓名">
      <el-input v-model="form.teacherName" />
    </el-form-item>
    <el-form-item label="实验课程名">
      <el-select v-model="form.name" placeholder="请选择您的实验课">
        <el-option v-for="item in courses" :key="item.id" :label="item.name" :value="item.name" />
      </el-select>
    </el-form-item>
    <el-form-item label="教室">
      <el-select v-model="form.clas" placeholder="请选择您预约的教室">
        <el-option label="901" value="1" />
        <el-option label="902" value="2" />
        <el-option label="903" value="3" />
        <el-option label="904" value="4" />
      </el-select>
    </el-form-item>
    <el-form-item label="预约周次">
      <el-select v-model="form.week" placeholder="请选择您想预约的周次">
        <el-option label="第一周" value="1" />
        <el-option label="第二周" value="2" />
        <el-option label="第三周" value="3" />
        <el-option label="第四周" value="4" />
        <el-option label="第五周" value="5" />
        <el-option label="第六周" value="6" />
        <el-option label="第七周" value="7" />
        <el-option label="第八周" value="8" />
        <el-option label="第九周" value="9" />
        <el-option label="第十周" value="10" />
        <el-option label="第十一周" value="11" />
        <el-option label="第十二周" value="12" />
        <el-option label="第十三周" value="13" />
        <el-option label="第十四周" value="14" />
        <el-option label="第十五周" value="15" />
        <el-option label="第十六周" value="16" />
        <el-option label="第十七周" value="17" />
        <el-option label="第十八周" value="18" />
      </el-select>
    </el-form-item>
    <el-form-item label="星期">
      <el-select v-model="form.day" placeholder="请选择您想预约的星期">
        <el-option label="星期一" value="1" />
        <el-option label="星期二" value="2" />
        <el-option label="星期三" value="3" />
        <el-option label="星期四" value="4" />
        <el-option label="星期五" value="5" />
        <el-option label="星期六" value="6" />
        <el-option label="星期日" value="7" />
      </el-select>
    </el-form-item>
    <el-form-item label="时间段">
      <el-select v-model="form.section" placeholder="请选择您想预约的时间段">
        <el-option label="12节" value="0" />
        <el-option label="34节" value="1" />
        <el-option label="56节" value="2" />
        <el-option label="78节" value="3" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
        style="width: 100%; margin-bottom: 20px; margin-top: 30px">
        预约
      </el-button>
    </el-form-item>
  </el-form>
</template>
<style>
.el-form-item__label {
  /* font-size: 20px; */
}
</style>
