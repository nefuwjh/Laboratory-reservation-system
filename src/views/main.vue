<script setup lang="ts"></script>
<template>
  <div>
    <el-container>
      <el-header class="container"><HeaderView /></el-header>
      <el-container style="margin-top: 5px">
        <el-aside class="container" width="250px">
          <SideBarView />
        </el-aside>
        <el-main class="container"><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.container {
  padding: 0px;
  margin: 5px;
}
</style>
