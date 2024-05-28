import type { Course, User, Laboratory } from '@/type'

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

export const laboratorys: Laboratory[] = [
  { name: '数据结构', week: '1', day: '1', section: '0' },
  { name: '数据结构', week: '1', day: '1', section: '1' },
  { name: '软件工程', week: '1', day: '2', section: '1' },
  { name: '软件工程', week: '2', day: '3', section: '1' },
  { name: '操作系统', week: '1', day: '3', section: '3' },
  { name: '操作系统', week: '1', day: '3', section: '5' }
]
export const listLaboratorys = () => laboratorys
