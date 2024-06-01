<script lang="ts" setup>
import { courses } from '@/data'
</script>

<template>
  <div style="padding-top: 30px">
    <el-table
      :data="courses"
      stripe
      height="300"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 100%">
      <el-table-column prop="id" label="课程ID" width="400" />
      <el-table-column prop="name" label="课程名称" width="400" />
      <el-table-column prop="period" label="学分" width="400" />
    </el-table>
  </div>
</template>
