<script setup lang="ts">
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
</script>
<template>
  <el-scrollbar>
    <el-menu>
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <RouterLink to="/main/center/PersonalCenter"><span>个人中心</span></RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <RouterLink to="/main/appointment/AppointmentView"><span>预约实验室</span></RouterLink>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <RouterLink to="/main/class/MyClass"><span>我的实验课</span></RouterLink>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <RouterLink to="/main/laboratory/LaboratoryView">
          <span>查看实验室占用情况</span>
        </RouterLink>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
