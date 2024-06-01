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

export const courses: Course[] = [
  { id: '202401', name: '软件工程', teacher: '李莉', time: [], period: 40 },
  { id: '202402', name: '操作系统', teacher: '李莉', time: [], period: 40 },
  { id: '202403', name: '计算机网络', teacher: '李莉', time: [], period: 40 },
  { id: '202404', name: '计算机组成原理', teacher: '李莉', time: [], period: 40 },
  { id: '202405', name: '数据结构', teacher: '李莉', time: [], period: 40 }
]

export const laboratorys: Laboratory[] = [
  { teacherName: '李莉', name: '数据结构', week: '1', day: '1', section: '0', clas: '1' },
  { teacherName: '李莉', name: '数据结构', week: '1', day: '1', section: '1', clas: '1' },
  { teacherName: '李莉', name: '软件工程', week: '1', day: '2', section: '1', clas: '1' },
  { teacherName: '李莉', name: '软件工程', week: '2', day: '3', section: '1', clas: '1' },
  { teacherName: '李莉', name: '操作系统', week: '1', day: '3', section: '3', clas: '1' },
  { teacherName: '李莉', name: '操作系统', week: '1', day: '5', section: '0', clas: '1' },
  { teacherName: '李莉', name: '数据结构', week: '2', day: '1', section: '3', clas: '1' },
  { teacherName: '李莉', name: '数据结构', week: '2', day: '4', section: '1', clas: '1' },
  { teacherName: '李莉', name: '软件工程', week: '2', day: '4', section: '4', clas: '1' },
  { teacherName: '李莉', name: '软件工程', week: '2', day: '1', section: '1', clas: '1' },
  { teacherName: '李莉', name: '计算机网络', week: '4', day: '3', section: '3', clas: '1' },
  { teacherName: '李莉', name: '计算机网络', week: '1', day: '4', section: '1', clas: '1' }
]
export const listLaboratorys = () => laboratorys
