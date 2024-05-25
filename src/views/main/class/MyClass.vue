<script lang="ts" setup>
import { ref } from 'vue'

const tableData = [
  {
    date: '第一二节',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '第三四节',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '第五六节',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '第七八节',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: '第一周'
  },
  {
    value: 'Option2',
    label: '第二周'
  },
  {
    value: 'Option3',
    label: '第三周'
  },
  {
    value: 'Option4',
    label: '第四周'
  },
  {
    value: 'Option5',
    label: '第五周'
  },
  {
    value: 'Option6',
    label: '第六周'
  },
  {
    value: 'Option7',
    label: '第七周'
  },
  {
    value: 'Option8',
    label: '第八周'
  },
  {
    value: 'Option9',
    label: '第九周'
  },
  {
    value: 'Option10',
    label: '第十周'
  },
  {
    value: 'Option11',
    label: '第十一周'
  },
  {
    value: 'Option12',
    label: '第十二周'
  },
  {
    value: 'Option13',
    label: '第十三周'
  },
  {
    value: 'Option14',
    label: '第十四周'
  },
  {
    value: 'Option15',
    label: '第十五周'
  },
  {
    value: 'Option16',
    label: '第十六周'
  },
  {
    value: 'Option17',
    label: '第十七周'
  },
  {
    value: 'Option18',
    label: '第十八周'
  }
]
</script>

<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="" width="180" />
    <el-table-column prop="name" label="星期一" width="180" />
    <el-table-column prop="name" label="星期二" width="180" />
    <el-table-column prop="name" label="星期三" width="180" />
    <el-table-column prop="name" label="星期四" width="180" />
    <el-table-column prop="name" label="星期五" width="180" />
    <el-table-column prop="name" label="星期六" width="180" />
    <el-table-column prop="name" label="星期日" width="180" />
  </el-table>
</template>
