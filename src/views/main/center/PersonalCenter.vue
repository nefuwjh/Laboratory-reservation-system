<script setup lang="ts">
import { ref } from 'vue'
import { Iphone, Location, Tickets, User } from '@element-plus/icons-vue'
import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('large')
</script>
<template>
  <div>
    <el-descriptions class="margin-top" title="个人中心" :column="2" :size="size" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <user />
            </el-icon>
            用户名
          </div>
        </template>
        李莉
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <iphone />
            </el-icon>
            电话号码
          </div>
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <location />
            </el-icon>
            办公室
          </div>
        </template>
        成栋1001
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <tickets />
            </el-icon>
            学院
          </div>
        </template>
        计算机与控制工程学院
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <tickets />
            </el-icon>
            专业
          </div>
        </template>
        软件工程
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<style>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
.el-descriptions-item {
  font-size: 20px;
}
</style>
