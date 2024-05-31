<script lang="ts" setup>
import { listLaboratorys } from '@/data'
import type { Laboratory } from '@/type'
import { ref } from 'vue'
const weekR = ref('1')
const classR = ref('1')

const weeks = [
  {
    value: '1',
    label: '第一周'
  },
  {
    value: '2',
    label: '第二周'
  },
  {
    value: '3',
    label: '第三周'
  },
  {
    value: '4',
    label: '第四周'
  },
  {
    value: '5',
    label: '第五周'
  },
  {
    value: '6',
    label: '第六周'
  },
  {
    value: '7',
    label: '第七周'
  },
  {
    value: '8',
    label: '第八周'
  },
  {
    value: '9',
    label: '第九周'
  },
  {
    value: '10',
    label: '第十周'
  },
  {
    value: '11',
    label: '第十一周'
  },
  {
    value: '12',
    label: '第十二周'
  },
  {
    value: '13',
    label: '第十三周'
  },
  {
    value: '14',
    label: '第十四周'
  },
  {
    value: '15',
    label: '第十五周'
  },
  {
    value: '16',
    label: '第十六周'
  },
  {
    value: '17',
    label: '第十七周'
  },
  {
    value: '18',
    label: '第十八周'
  }
]
const classes = [
  {
    value: '1',
    label: '901'
  },
  {
    value: '2',
    label: '902'
  },
  {
    value: '3',
    label: '903'
  },
  {
    value: '4',
    label: '904'
  }
]
const results = ref<Laboratory[]>([])
const laboratoryR = ref<Laboratory[]>([])

interface Tabledata {
  date?: string
  day1?: string
  day2?: string
  day3?: string
  day4?: string
  day5?: string
  day6?: string
  day7?: string
}
const tableData: Tabledata[] = [
  {
    date: '第一二节',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  },
  {
    date: '第三四节',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  },
  {
    date: '第五六节',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  },
  {
    date: '第七八节',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  }
]
const tableDataR = ref(tableData)
const change = { weekR: weekR, classR: classR }
const changeR = ref(change)
watch(
  changeR,
  async () => {
    console.log('changeR', changeR.value)
    console.log(2, listLaboratorys())
    results.value = await listLaboratorys()
    laboratoryR.value = results.value.filter((item) => item.week === weekR.value)
    laboratoryR.value = laboratoryR.value.filter((item) => item.clas === classR.value)
    console.log(1, laboratoryR.value)
    // const daysR = ref<Laboratory[]>([])
    // daysR.value = results.value.filter((item) => item.day === '1')
    const section0R = ref<Laboratory[]>([])
    section0R.value = laboratoryR.value.filter((item) => item.section === '0')
    console.log(3, section0R.value)
    tableDataR.value[0].day1 = section0R.value.find((d) => d.day == '1')?.name
    console.log(4, tableData[0].day1)
    tableDataR.value[0].day2 = section0R.value.find((d) => d.day == '2')?.name
    tableDataR.value[0].day3 = section0R.value.find((d) => d.day == '3')?.name
    tableDataR.value[0].day4 = section0R.value.find((d) => d.day == '4')?.name
    tableDataR.value[0].day5 = section0R.value.find((d) => d.day == '5')?.name
    tableDataR.value[0].day6 = section0R.value.find((d) => d.day == '6')?.name
    tableDataR.value[0].day7 = section0R.value.find((d) => d.day == '7')?.name
    const section1R = ref<Laboratory[]>([])
    section1R.value = laboratoryR.value.filter((item) => item.section === '1')
    tableDataR.value[1].day1 = section1R.value.find((d) => d.day == '1')?.name
    tableDataR.value[1].day2 = section1R.value.find((d) => d.day == '2')?.name
    tableDataR.value[1].day3 = section1R.value.find((d) => d.day == '3')?.name
    tableDataR.value[1].day4 = section1R.value.find((d) => d.day == '4')?.name
    tableDataR.value[1].day5 = section1R.value.find((d) => d.day == '5')?.name
    tableDataR.value[1].day6 = section1R.value.find((d) => d.day == '6')?.name
    tableDataR.value[1].day7 = section1R.value.find((d) => d.day == '7')?.name
    const section2R = ref<Laboratory[]>([])
    section2R.value = laboratoryR.value.filter((item) => item.section === '2')
    tableDataR.value[2].day1 = section2R.value.find((d) => d.day == '1')?.name
    tableDataR.value[2].day2 = section2R.value.find((d) => d.day == '2')?.name
    tableDataR.value[2].day3 = section2R.value.find((d) => d.day == '3')?.name
    tableDataR.value[2].day4 = section2R.value.find((d) => d.day == '4')?.name
    tableDataR.value[2].day5 = section2R.value.find((d) => d.day == '5')?.name
    tableDataR.value[2].day6 = section2R.value.find((d) => d.day == '6')?.name
    tableDataR.value[2].day7 = section2R.value.find((d) => d.day == '7')?.name
    const section3R = ref<Laboratory[]>([])
    section3R.value = laboratoryR.value.filter((item) => item.section === '3')
    tableDataR.value[3].day1 = section3R.value.find((d) => d.day == '1')?.name
    tableDataR.value[3].day2 = section3R.value.find((d) => d.day == '2')?.name
    tableDataR.value[3].day3 = section3R.value.find((d) => d.day == '3')?.name
    tableDataR.value[3].day4 = section3R.value.find((d) => d.day == '4')?.name
    tableDataR.value[3].day5 = section3R.value.find((d) => d.day == '5')?.name
    tableDataR.value[3].day6 = section3R.value.find((d) => d.day == '6')?.name
    tableDataR.value[3].day7 = section3R.value.find((d) => d.day == '7')?.name
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <el-select v-model="weekR" placeholder="Select" style="width: 240px" @change="$forceUpdate()">
    <el-option v-for="item in weeks" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <el-select v-model="classR" placeholder="Select" style="width: 240px; padding: 0 20px">
    <el-option v-for="item in classes" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <el-table
    :data="tableDataR"
    border
    style="width: 100%; padding: 30px 0"
    :row-style="{ height: '50px' }">
    <el-table-column prop="date" label="" width="180" />
    <el-table-column prop="day1" label="星期一" width="180" />
    <el-table-column prop="day2" label="星期二" width="180" />
    <el-table-column prop="day3" label="星期三" width="180" />
    <el-table-column prop="day4" label="星期四" width="180" />
    <el-table-column prop="day5" label="星期五" width="180" />
    <el-table-column prop="day6" label="星期六" width="180" />
    <el-table-column prop="day7" label="星期日" width="180" style="height: 100px" />
  </el-table>
</template>
