import type { Course, User } from '@/type'

const User: User = {
  id: 2021223119,
  name: 'LiLi',
  office: '1001',
  number: '13398877661',
  title: 'professor',
  birth: '20001220',
  account: 'user1',
  password: '1001'
}

const Course: Course[] = [
  { name: '软件工程', teacher: 'LiLi', time: [], period: 40 },
  { name: '操作系统', teacher: 'LiLi', time: [], period: 40 },
  { name: '计算机网络', teacher: 'LiLi', time: [], period: 40 },
  { name: '计算机组成原理', teacher: 'LiLi', time: [], period: 40 },
  { name: '数据结构', teacher: 'LiLi', time: [], period: 40 }
]
